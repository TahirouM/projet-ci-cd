"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, Heart, Share2, Truck, RefreshCw, Shield } from "lucide-react";
import productsData from "@/data/products.json";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Load products from JSON
  const allProducts = useMemo(() => {
    const products = [
      ...productsData.men,
      ...productsData.women,
      ...productsData.kids,
    ];

    return products.map((product) => ({
      id: product.id,
      image: product.image,
      title: product.name,
      description: product.description,
      price: product.price.toFixed(2),
      category: product.category,
      subcategory: product.subcategory,
      sizes: product.sizes,
      colors: product.colors,
      material: product.material,
      brand: product.brand,
      inStock: product.inStock,
      rating: product.rating,
      reviews: product.reviews,
      images: [product.image, product.image, product.image], // Using same image 3 times for gallery
    }));
  }, []);

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
            <div className="mb-4">
              <p className="text-sm text-gray-600">{product.brand} • {product.subcategory}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm text-black">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-3xl font-bold mb-6 text-black">${product.price}</p>

            <div className="border-t border-b py-6 mb-6">
              <p className="text-black leading-relaxed mb-4">{product.description}</p>
              <div className="text-sm text-gray-600">
                <p><strong className="text-black">Material:</strong> {product.material}</p>
                <p className="mt-1"><strong className="text-black">Stock:</strong> {product.inStock ? "In Stock" : "Out of Stock"}</p>
              </div>
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
