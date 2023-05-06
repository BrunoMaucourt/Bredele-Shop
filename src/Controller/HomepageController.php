<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {

        $articles = [];
        $products = [];
        $recipes = [];

        return $this->render('homepage.html.twig', [
            'articles' => $articles,
            'products' => $products,
            'recipes' => $recipes,
        ]);
    }
}
