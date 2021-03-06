import React from "react";
import CartItem from "./components/cartItem/Cart";
import Navigation from "./components/navigation/Navigation";

function App() {
  const balls = [
    {
      id: 0,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/eff/370_416_1/45125290299.jpg",
      name: "Wilson NBA Authentic",
      types: ["indoor", "outdoor", "all"],
      sizes: 7,
      price: 4499,
      category: 0,
      rating: 4,
    },
    {
      id: 1,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/990/370_416_1/45125320299.jpg",
      name: "Wilson NBA Team Tribute All Team",
      types: ["outdoor"],
      sizes: 6,
      price: 2399,
      category: 1,
      rating: 6,
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/48a/370_416_1/45125350299.jpg",
      name: "Wilson NBA Team Tribute All Team",
      types: ["outdoor"],
      sizes: 7,
      price: 2399,
      category: 1,
      rating: 4,
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/32a/370_416_1/45125200299.jpg",
      name: "Wilson NBA Forge Plus",
      types: ["indoor", "outdoor", "all"],
      sizes: 7,
      price: 3999,
      category: 2,
      rating: 2,
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/79e/370_416_1/45125260299.jpg",
      name: "Wilson NBA Authentis Series",
      types: ["indoor", "outdoor", "all"],
      sizes: 7,
      price: 2700,
      category: 3,
      rating: 8,
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/fb5/370_416_1/45125230299.jpg",
      name: "Wilson NBA Forge Rpo Printed",
      types: ["outdoor"],
      sizes: 6,
      price: 4999,
      category: 2,
      rating: 2,
    },
    {
      id: 6,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/31d/370_416_1/45125170299.jpg",
      name: "Wilson NBA DRV Pro",
      types: ["indoor", "outdoor", "all"],
      sizes: 7,
      price: 2499,
      category: 1,
      rating: 9,
    },
    {
      id: 7,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/bae/370_416_1/40736420299.jpg",
      name: "Wilson FIBA 3X3 REPLICA BALL",
      types: ["outdoor", "all"],
      sizes: 7,
      price: 1899,
      category: 4,
      rating: 10,
    },
    {
      id: 8,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/5e7/370_416_1/40071680299.jpg",
      name: "Wilson MVP Elite",
      types: ["outdoor", "all"],
      sizes: 6,
      price: 1299,
      category: 5,
      rating: 10,
    },
    {
      id: 9,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/bf0/370_416_1/18738790299.jpg",
      name: "Wilson NCAA LIMITED BLMA",
      types: ["outdoor", "all"],
      sizes: 7,
      price: 3699,
      category: 5,
      rating: 7,
    },
    {
      id: 10,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/de2/370_416_1/21516630299.jpg",
      name: "Wilson SOLUTION OFFICIAL GAME BALL",
      types: ["indoor", "outdoor", "all"],
      sizes: 7,
      price: 5499,
      category: 5,
      rating: 7,
    },
    {
      id: 11,
      imageUrl:
        "https://cdn.sptmr.ru/upload/resize_cache/iblock/32a/370_416_1/45125200299.jpg",
      name: "Wilson NBA Forge Plus",
      types: ["indoor", "outdoor", "all"],
      sizes: 7,
      price: 3999,
      category: 2,
      rating: 2,
    },
  ];
  return (
    <div className="container">
      <Navigation />
      <div className="cart_flex">
        <CartItem balls={balls} />
      </div>
    </div>
  );
}

export default App;
