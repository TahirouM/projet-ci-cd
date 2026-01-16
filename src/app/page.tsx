import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";

export default function Home() {
  const newProducts = [
    {
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=800",
      title: "Loro Piana",
      description: "Polo with chest zip and Lyocell linen-Polo shirt",
      price: "45",
    },
    {
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800",
      title: "White Pants",
      description: "Premium pants",
      price: "90",
    },
    {
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
      title: "Bisha Glasses",
      description: "Acetate sunglasses with shiny finishing",
      price: "50",
    },
    {
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
      title: "Brown Bomber",
      description: "Reversible satin bomber jacket",
      price: "52",
    },
    {
      image: "https://images.unsplash.com/photo-1613814098518-5834d1d823e5?q=80&w=800",
      title: "Leather Shoes Jack",
      description: "Nubuck ankle boots",
      price: "89",
    },
    {
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      title: "Grey Tshirt",
      description: "Lyocell crew t-shirt",
      price: "21",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* New Collection Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">NEW COLLECTION</h2>
            <p className="text-black max-w-2xl mx-auto">
              Our latest collection, where classic and contemporary styles converge in perfect harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wear to Wedding Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')",
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">WEAR TO WEDDING</h2>
              <p className="text-lg mb-8 max-w-2xl">
                If you're going to an outside holiday this day or any other, consider this wedding day.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                See Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard
              image="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=800"
              title="MAN"
              href="/catalogue?category=men"
            />
            <CategoryCard
              image="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800"
              title="WOMAN"
              href="/catalogue?category=women"
            />
            <CategoryCard
              image="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800"
              title="KIDS"
              href="/catalogue?category=kids"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
