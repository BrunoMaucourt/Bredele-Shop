<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Entity\ProductPicture;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\ProductFormType;
use App\Form\ProductCategoryFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'admin_page')]
    public function index(): Response
    {
        // Only ROLE_ADMIN user can connect
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        return $this->render('admin/admin.html.twig', [
        ]);
    }

    #[Route('/admin/addProduct', name: 'admin_add_product')]
    public function addProduct(EntityManagerInterface $entityManager, Request $request): Response
    {
        // Only ROLE_ADMIN user can connect
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        //$category = new ProductCategory();
        //$category->setName('Computer Peripherals');

        $product = new Product();

        $form = $this->createForm(ProductFormType::class, $product);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $product = $form->getData();

            // Add profil picture
            /** @var UploadedFile $uploaded_picture */
            $uploaded_picture = $form->get('add_profil_picture')->getData();
            $newFilename = 'pictures/product/' . uniqid() . '.' . $uploaded_picture->guessExtension();

            // Move the file to the directory where profil pictures are stored
            try {
                $uploaded_picture->move(
                    $this->getParameter('product_profil_picture_directory'),
                    $newFilename
                );
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }
            $product->setProfilPicture($newFilename);

            // Save in database
            $entityManager->persist($product);
            $entityManager->flush();

            return $this->render('admin/admin.html.twig', [
            ]);
        }

        return $this->render('admin/adminAddProduct.html.twig', [
            'productForm'=> $form->createView(),
        ]);
    }

    #[Route('/admin/addProductCategory', name: 'admin_add_product_category')]
    public function addProductCategory(EntityManagerInterface $entityManager, Request $request): Response
    {
        // Only ROLE_ADMIN user can connect
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $category = new ProductCategory();
        $form = $this->createForm(ProductCategoryFormType::class, $category);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $category = $form->getData();
            $entityManager->persist($category);
            $entityManager->flush();

            return $this->render('admin/admin.html.twig', [
            ]);
        }

        return $this->render('admin/adminAddProductCategory.html.twig', [
            'productCategoryForm'=> $form->createView(),
        ]);
    }
}
