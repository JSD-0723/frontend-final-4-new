import { SlideShowComponent } from "../Components/SlideShowComponent";
import { Brands } from "../Components/Brands";
<<<<<<< Updated upstream
import { ImageSlider } from "../Components/ImageSlider";
=======
import Handpicked from "../Components/HandPicked";
import ThreeCards from "../Components/ThreeCards";
import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { useEffect, useState } from "react";
import {
  loadNewArrivals,
  loadHandpickedProducts,
  loadBrands,
} from "../Shared/API/FetchData";
import Carousel from "../Components/Carousel";
import "../Components/style.css";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "var(--bright)",
  paddingBottom: "50px",
}));
>>>>>>> Stashed changes

export const Home = () => {
  const fetchedData = {
    success: true,
    message: "Products fetched successfully",
    pagination: {
      currentPage: 1,
      itemsPerPage: 20,
      totalProducts: 26,
      totalPages: 2,
    },
    data: [
      {
        id: 1,
        title: "Classic Watch",
        description: "A timeless piece for every occasion.",
        price: "99.99",
        availableInStock: 50,
        totalRating: "4.70",
        ratingCount: 25,
        imageUrl: "https://example.com/classic-watch.jpg",
        categoryId: 2,
        brandId: 1,
        discountId: 3,
        createdAt: "2023-05-05T05:45:04.000Z",
        updatedAt: "2023-05-05T05:45:04.000Z",
      },
      {
        id: 2,
        title: "Leather Handbag",
        description: "Elegance in every detail, crafted with genuine leather.",
        price: "129.99",
        availableInStock: 30,
        totalRating: "4.50",
        ratingCount: 18,
        imageUrl: "https://example.com/leather-handbag.jpg",
        categoryId: 1,
        brandId: 2,
        discountId: 1,
        createdAt: "2023-05-05T05:45:04.000Z",
        updatedAt: "2023-05-05T05:45:04.000Z",
      },
      {
        id: 3,
        title: "Aviator Sunglasses",
        description: "Protect your eyes with style.",
        price: "59.99",
        availableInStock: 40,
        totalRating: "4.80",
        ratingCount: 22,
        imageUrl: "https://example.com/aviator-sunglasses.jpg",
        categoryId: 3,
        brandId: 3,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 4,
        title: "Fedora Hat",
        description: "A classic accessory for a touch of sophistication.",
        price: "34.99",
        availableInStock: 25,
        totalRating: "4.20",
        ratingCount: 15,
        imageUrl: "https://example.com/fedora-hat.jpg",
        categoryId: 4,
        brandId: 1,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 5,
        title: "Diamond Necklace",
        description: "Shine bright with this exquisite diamond necklace.",
        price: "299.99",
        availableInStock: 15,
        totalRating: "4.90",
        ratingCount: 30,
        imageUrl: "https://example.com/diamond-necklace.jpg",
        categoryId: 5,
        brandId: 2,
        discountId: 1,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 6,
        title: "Stylish Backpack",
        description: "Versatile and trendy, perfect for daily adventures.",
        price: "79.99",
        availableInStock: 35,
        totalRating: "4.60",
        ratingCount: 20,
        imageUrl: "https://example.com/stylish-backpack.jpg",
        categoryId: 1,
        brandId: 3,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 7,
        title: "Silver Bracelet",
        description: "Add a touch of elegance to your wrist.",
        price: "49.99",
        availableInStock: 28,
        totalRating: "4.40",
        ratingCount: 17,
        imageUrl: "https://example.com/silver-bracelet.jpg",
        categoryId: 5,
        brandId: 1,
        discountId: 3,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 8,
        title: "Wide-Brim Hat",
        description: "Stay stylish and sun-protected.",
        price: "39.99",
        availableInStock: 22,
        totalRating: "4.00",
        ratingCount: 12,
        imageUrl: "https://example.com/wide-brim-hat.jpg",
        categoryId: 4,
        brandId: 2,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 9,
        title: "Gold Earrings",
        description: "Accentuate your look with these dazzling gold earrings.",
        price: "89.99",
        availableInStock: 18,
        totalRating: "4.80",
        ratingCount: 26,
        imageUrl: "https://example.com/gold-earrings.jpg",
        categoryId: 5,
        brandId: 3,
        discountId: 1,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 10,
        title: "Modern Wristwatch",
        description: "Sleek design for the contemporary lifestyle.",
        price: "119.99",
        availableInStock: 32,
        totalRating: "4.30",
        ratingCount: 19,
        imageUrl: "https://example.com/modern-wristwatch.jpg",
        categoryId: 2,
        brandId: 1,
        discountId: 1,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 11,
        title: "Canvas Tote Bag",
        description: "A stylish and spacious tote for everyday use.",
        price: "49.99",
        availableInStock: 40,
        totalRating: "4.50",
        ratingCount: 23,
        imageUrl: "https://example.com/canvas-tote-bag.jpg",
        categoryId: 1,
        brandId: 2,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 12,
        title: "Sporty Backpack",
        description: "Perfect for the active lifestyle, designed for comfort.",
        price: "64.99",
        availableInStock: 35,
        totalRating: "4.20",
        ratingCount: 15,
        imageUrl: "https://example.com/sporty-backpack.jpg",
        categoryId: 1,
        brandId: 3,
        discountId: 3,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 13,
        title: "Pearl Necklace",
        description: "Timeless elegance with a string of pearls.",
        price: "179.99",
        availableInStock: 20,
        totalRating: "4.90",
        ratingCount: 29,
        imageUrl: "https://example.com/pearl-necklace.jpg",
        categoryId: 5,
        brandId: 1,
        discountId: 1,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 14,
        title: "Leather Wallet",
        description:
          "Classic design with multiple compartments for your essentials.",
        price: "29.99",
        availableInStock: 50,
        totalRating: "4.30",
        ratingCount: 18,
        imageUrl: "https://example.com/leather-wallet.jpg",
        categoryId: 1,
        brandId: 2,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 15,
        title: "Retro Sunglasses",
        description: "Channel your inner vintage with these stylish shades.",
        price: "54.99",
        availableInStock: 30,
        totalRating: "4.70",
        ratingCount: 22,
        imageUrl: "https://example.com/retro-sunglasses.jpg",
        categoryId: 3,
        brandId: 3,
        discountId: 3,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 16,
        title: "Silver Cuff Bracelet",
        description: "A statement piece to elevate your wristwear.",
        price: "69.99",
        availableInStock: 25,
        totalRating: "4.60",
        ratingCount: 21,
        imageUrl: "https://example.com/silver-cuff-bracelet.jpg",
        categoryId: 5,
        brandId: 1,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 17,
        title: "Panama Hat",
        description: "Stay cool and stylish under the sun.",
        price: "44.99",
        availableInStock: 28,
        totalRating: "4.10",
        ratingCount: 16,
        imageUrl: "https://example.com/panama-hat.jpg",
        categoryId: 4,
        brandId: 2,
        discountId: 1,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 18,
        title: "Rose Gold Earrings",
        description:
          "Add a touch of warmth with these elegant rose gold earrings.",
        price: "99.99",
        availableInStock: 18,
        totalRating: "4.80",
        ratingCount: 27,
        imageUrl: "https://example.com/rose-gold-earrings.jpg",
        categoryId: 5,
        brandId: 3,
        discountId: 3,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 19,
        title: "Minimalist Wristwatch",
        description:
          "Simplicity meets sophistication in this modern timepiece.",
        price: "89.99",
        availableInStock: 32,
        totalRating: "4.40",
        ratingCount: 19,
        imageUrl: "https://example.com/minimalist-wristwatch.jpg",
        categoryId: 2,
        brandId: 1,
        discountId: 2,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
      {
        id: 20,
        title: "Crystal Pendant Necklace",
        description: "Capture the light with this dazzling crystal pendant.",
        price: "129.99",
        availableInStock: 15,
        totalRating: "4.90",
        ratingCount: 31,
        imageUrl: "https://example.com/crystal-pendant-necklace.jpg",
        categoryId: 5,
        brandId: 2,
        discountId: 1,
        createdAt: "2023-10-10T05:45:04.000Z",
        updatedAt: "2023-10-10T05:45:04.000Z",
      },
    ],
  };

<<<<<<< Updated upstream
  return (
    <>
      <SlideShowComponent fetchedData={fetchedData} />
      <Brands />
=======
  useEffect(() => {
    loadNewArrivals()
      .then((response) => {
        setNewArrivals(response.data);
      })
      .catch((error) => {
        console.log("Error fetching New Arrivals", error);
      });

    loadHandpickedProducts()
      .then((response) => {
        setHandPicked(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Handpicked", error);
      });

    loadBrands()
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Brands", error);
      });
  }, []);

  const sliderNewArrivals = newArrivals.slice(0, 10);
  const fourhandpicked = handpicked.slice(0, 4);
  const sixBrands = brands.slice(0, 6);
  return (
    <>
      <Container>
        <Carousel/>
        <SlideShowComponent newArrivals={sliderNewArrivals} />
        <Handpicked handpicked={fourhandpicked} />
        <Brands brands={sixBrands} />
        <ThreeCards />
      </Container>
>>>>>>> Stashed changes
    </>
  );
};
