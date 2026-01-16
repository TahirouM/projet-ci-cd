"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 tracking-[0.2em] text-black">TOLUS</h2>
              <p className="text-black">
                Subscribe to our newsletter for new collections, product<br />
                and best discount for all items
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-black">Product</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-gray-700 transition">Shirt</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">New Arrival</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Shoes</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Jacket</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Tshees</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Categories</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-gray-700 transition">Man</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Woman</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Kids</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Gift</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">New Arrival</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Our Social Media</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-gray-700 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Youtube</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">X</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Categories</h3>
            <ul className="space-y-2 text-black">
              <li><a href="#" className="hover:text-gray-700 transition">Man</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Woman</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Kids</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">Gift</a></li>
              <li><a href="#" className="hover:text-gray-700 transition">New Arrival</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 Tolus Production</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
              <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

