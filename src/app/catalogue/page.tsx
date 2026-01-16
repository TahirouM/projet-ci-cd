"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function CataloguePage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(true);

  // Synchronize selectedCategory with URL parameter changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Mock products data
  const allProducts = [
    {
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800",
      title: "Loro Piana Polo",
      description: "Polo with chest zip and Lyocell linen",
      price: "45",
      category: "men",
    },
    {
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
      title: "White Pants",
      description: "Premium pants",
      price: "90",
      category: "men",
    },
    {
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
      title: "Bisha Glasses",
      description: "Acetate sunglasses with shiny finishing",
      price: "50",
      category: "men",
    },
    {
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
      title: "Brown Bomber",
      description: "Reversible satin bomber jacket",
      price: "52",
      category: "men",
    },
    {
      image: "https://images.unsplash.com/photo-1613814098518-5834d1d823e5?q=80&w=800",
      title: "Leather Shoes Jack",
      description: "Nubuck ankle boots",
      price: "89",
      category: "men",
    },
    {
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      title: "Grey Tshirt",
      description: "Lyocell crew t-shirt",
      price: "21",
      category: "men",
    },
    {
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800",
      title: "Elegant Dress",
      description: "Black evening dress",
      price: "120",
      category: "women",
    },
    {
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800",
      title: "Summer Blouse",
      description: "Light cotton blouse",
      price: "35",
      category: "women",
    },
    {
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800",
      title: "Denim Jacket",
      description: "Classic denim jacket",
      price: "75",
      category: "women",
    },
    {
      image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=800",
      title: "Leather Bag",
      description: "Premium leather handbag",
      price: "150",
      category: "women",
    },
    {
      image: "https://images.unsplash.com/photo-1596830394077-6edbef637019?q=80&w=800",
      title: "High Heels",
      description: "Elegant high heel shoes",
      price: "95",
      category: "women",
    },
    {
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
      title: "Silk Scarf",
      description: "Luxury silk scarf",
      price: "40",
      category: "women",
    },
    {
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800",
      title: "Kids Sneakers",
      description: "Comfortable sports shoes",
      price: "45",
      category: "kids",
    },
    {
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800",
      title: "Kids T-Shirt",
      description: "Cotton t-shirt with print",
      price: "18",
      category: "kids",
    },
    {
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800",
      title: "Kids Jacket",
      description: "Warm winter jacket",
      price: "55",
      category: "kids",
    },
    {
      image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e7?q=80&w=800",
      title: "Kids Dress",
      description: "Summer dress with flowers",
      price: "32",
      category: "kids",
    },
    {
      image: "https://images.unsplash.com/photo-1555529211-5d483e6a1d1b?q=80&w=800",
      title: "Kids Jeans",
      description: "Comfortable denim jeans",
      price: "28",
      category: "kids",
    },
    {
      image: "https://images.unsplash.com/photo-1596643905863-e0051ece0894?q=80&w=800",
      title: "Kids Backpack",
      description: "School backpack",
      price: "35",
      category: "kids",
    },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    if (priceRange !== "all") {
      filtered = filtered.filter((p) => {
        const price = parseInt(p.price);
        if (priceRange === "0-50") return price <= 50;
        if (priceRange === "50-100") return price > 50 && price <= 100;
        if (priceRange === "100+") return price > 100;
        return true;
      });
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [allProducts, selectedCategory, searchQuery, priceRange, sortBy]);

  const getCategoryTitle = () => {
    if (selectedCategory === "men") return "MEN'S COLLECTION";
    if (selectedCategory === "women") return "WOMEN'S COLLECTION";
    if (selectedCategory === "kids") return "KIDS' COLLECTION";
    return "ALL PRODUCTS";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-black mb-4">{getCategoryTitle()}</h1>
          <p className="text-black">
            Discover our latest collection of premium fashion items
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="border-b bg-white sticky top-[104px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-black"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-black">Category</h3>
                  <div className="space-y-2">
                    {["all", "men", "women", "kids"].map((category) => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-black capitalize">{category === "all" ? "All Products" : category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-black">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "All Prices" },
                      { value: "0-50", label: "Under $50" },
                      { value: "50-100", label: "$50 - $100" },
                      { value: "100+", label: "Over $100" },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-black">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSearchQuery("");
                    setSortBy("featured");
                  }}
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Reset Filters
                </button>
              </div>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 text-black">
              <span className="font-medium">{filteredProducts.length}</span> products found
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-black underline hover:text-gray-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
