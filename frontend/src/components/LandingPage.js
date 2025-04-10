import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom"; // ✅ Penting untuk routing tombol
import "../index.css";

function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-red-300">
      {/* Konten Utama */}
      <main className="w-full h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Kiri */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-red-600 font-medium mb-4">
                Hallo, Selamat Datang
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Temukan Barang<br />Murah Impian mu
              </h1>
              <p className="mb-8 mt-5">
                Trending : Zara, iPhone, Dress, iPad, Adidas, Crocs, Apple Watch, Furniture
              </p>
              <div className="mt-10 flex space-x-5">
                <Link to="/register">
                  <Button color="failure" size="sm" className="px-7 py-2 font-medium">
                    Daftar
                  </Button>
                </Link>
                <Link to="/login">
                  <Button color="gray" size="sm" className="px-7 py-2 font-medium">
                    Login
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kanan - Gambar */}
            <div className="md:w-1/2 mt-10 md:mt-0 relative z-10">
              <img
                src="/1234.png"
                alt="Product showcase"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
