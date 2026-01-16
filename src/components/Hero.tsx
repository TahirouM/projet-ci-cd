export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            TOLUS SPRING COLLECTION
          </h1>
          <p className="text-lg mb-8 text-white/90">
            Introducing Our Latest Spring Collection, Where Timeless Elegance Meets Modern Innovation. Step Into the New Season with Style
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

