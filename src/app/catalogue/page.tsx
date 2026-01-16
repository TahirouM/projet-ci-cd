"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";
import productsData from "@/data/products.json";

function CatalogueContent() {
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

  // Load products from JSON file and transform to match ProductCard interface
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
      sizes: product.sizes,
      colors: product.colors,
      material: product.material,
      brand: product.brand,
      inStock: product.inStock,
      rating: product.rating,
      reviews: product.reviews,
    }));
  }, []);

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
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
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

export default function CataloguePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-black">Loading...</div></div>}>
      <CatalogueContent />
    </Suspense>
  );
}
