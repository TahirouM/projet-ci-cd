"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, Heart, Share2, Truck, RefreshCw, Shield } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock products data (same as catalogue)
  const allProducts = [
    {
      id: "loro-piana-polo",
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800",
      title: "Loro Piana Polo",
      description: "Polo with chest zip and Lyocell linen",
      price: "45",
      category: "men",
      fullDescription: "Premium polo shirt crafted from a luxurious blend of Lyocell and linen. Features a distinctive chest zip detail and refined finishing. Perfect for both casual and semi-formal occasions.",
      images: [
        "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800",
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=800",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy", "Grey"],
    },
    {
      id: "white-pants",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
      title: "White Pants",
      description: "Premium pants",
      price: "90",
      category: "men",
      fullDescription: "Elegant white pants made from premium cotton blend. Features a tailored fit with classic styling. Perfect for summer occasions and sophisticated casual wear.",
      images: [
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800",
      ],
      sizes: ["28", "30", "32", "34", "36", "38"],
      colors: ["White", "Cream", "Light Grey"],
    },
    {
      id: "bisha-glasses",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
      title: "Bisha Glasses",
      description: "Acetate sunglasses with shiny finishing",
      price: "50",
      category: "men",
      fullDescription: "Modern acetate sunglasses with high-quality lenses and shiny finishing. UV400 protection for your eyes. Contemporary design suitable for all face shapes.",
      images: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800",
      ],
      sizes: ["One Size"],
      colors: ["Black", "Tortoise", "Clear"],
    },
    {
      id: "brown-bomber",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
      title: "Brown Bomber",
      description: "Reversible satin bomber jacket",
      price: "52",
      category: "men",
      fullDescription: "Versatile reversible bomber jacket in luxurious satin. Features two distinct looks in one piece. Perfect for transitional weather with a contemporary edge.",
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Brown", "Black", "Olive"],
    },
    {
      id: "leather-shoes-jack",
      image: "https://images.unsplash.com/photo-1613814098518-5834d1d823e5?q=80&w=800",
      title: "Leather Shoes Jack",
      description: "Nubuck ankle boots",
      price: "89",
      category: "men",
      fullDescription: "Premium nubuck leather ankle boots with cushioned insole. Durable rubber sole for all-day comfort. Classic design that pairs well with any outfit.",
      images: [
        "https://images.unsplash.com/photo-1613814098518-5834d1d823e5?q=80&w=800",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800",
      ],
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      colors: ["Brown", "Black", "Tan"],
    },
    {
      id: "grey-tshirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      title: "Grey Tshirt",
      description: "Lyocell crew t-shirt",
      price: "21",
      category: "men",
      fullDescription: "Comfortable crew neck t-shirt made from sustainable Lyocell fabric. Soft, breathable, and perfect for everyday wear. Classic fit with reinforced seams.",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Grey", "Black", "White", "Navy"],
    },
    {
      id: "elegant-dress",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800",
      title: "Elegant Dress",
      description: "Black evening dress",
      price: "120",
      category: "women",
      fullDescription: "Sophisticated evening dress in elegant black. Features a flattering silhouette with premium fabric. Perfect for special occasions and formal events.",
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800",
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Burgundy"],
    },
    {
      id: "summer-blouse",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
      title: "Summer Blouse",
      description: "Light cotton blouse",
      price: "35",
      category: "women",
      fullDescription: "Lightweight cotton blouse perfect for warm weather. Breathable fabric with a relaxed fit. Easy to style for both casual and professional settings.",
      images: [
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Blue", "Pink", "Yellow"],
    },
  ];

  const productId = params?.id as string;
  const product = allProducts.find((p) => p.id === productId);

  // Find similar products
  const similarProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Product Not Found</h1>
          <p className="text-black mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push("/catalogue")}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Back to Catalogue
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0 && product.sizes[0] !== "One Size") {
      alert("Please select a size");
      return;
    }
    if (!selectedColor) {
      alert("Please select a color");
      return;
    }
    alert(`Added ${quantity} x ${product.title} to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => router.push("/")} className="hover:text-black">
              Home
            </button>
            <span>/</span>
            <button onClick={() => router.push("/catalogue")} className="hover:text-black">
              Catalogue
            </button>
            <span>/</span>
            <span className="text-black font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-black" : ""
                  }`}
                >
                  <img src={img} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-black">{product.title}</h1>
            <p className="text-3xl font-bold mb-6 text-black">${product.price}</p>

            <div className="border-t border-b py-6 mb-6">
              <p className="text-black leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-black">
                Color: {selectedColor && <span className="font-normal">{selectedColor}</span>}
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg hover:border-black transition ${
                      selectedColor === color ? "border-black bg-black text-white" : "border-gray-300 text-black"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-black">
                Size: {selectedSize && <span className="font-normal">{selectedSize}</span>}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg hover:border-black transition ${
                      selectedSize === size ? "border-black bg-black text-white" : "border-gray-300 text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3 text-black">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:border-black transition text-black"
                >
                  -
                </button>
                <span className="text-lg font-medium text-black w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:border-black transition text-black"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded-lg hover:border-black transition flex items-center justify-center">
                <Heart className="w-5 h-5 text-black" />
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded-lg hover:border-black transition flex items-center justify-center">
                <Share2 className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-start gap-4">
                <Truck className="w-6 h-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Free Shipping</h3>
                  <p className="text-sm text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Easy Returns</h3>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Secure Payment</h3>
                  <p className="text-sm text-gray-600">100% secure transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-black">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
