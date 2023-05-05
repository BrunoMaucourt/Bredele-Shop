<?php

namespace App\Entity;

use App\Repository\ProductPictureRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductPictureRepository::class)]
class ProductPicture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $picture_url = null;

    #[ORM\ManyToOne(inversedBy: 'picture')]
    private ?Product $product = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPictureUrl(): ?string
    {
        return $this->picture_url;
    }

    public function setPictureUrl(string $picture_url): self
    {
        $this->picture_url = $picture_url;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }
}
