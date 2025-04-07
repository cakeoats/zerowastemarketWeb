import React from 'react';
import { Button } from 'flowbite-react';

function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-red-300">

            {/* Konten Utama */}
            <main className="w-full h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* Kiri */}
                        <div className="w-full md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-red-600 font-medium mb-4">Hallo, Selamat Datang</h2>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Temukan Barang<br />Murah Impian mu
                            </h1>
                            <p className="mb-8 mt-5">
                                Trending : Zara, iphone, Dress, Ipad, Adidas, crocs, Apple watch, Furniture
                            </p>
                            <div className="mt-10 flex space-x-5">
                                <Button color="failure" size="sm" className="px-7 py-2 font-medium">
                                    Daftar
                                </Button>
                                <Button color="gray" size="sm" className="px-7 py-2 font-medium">
                                    Login
                                </Button>
                            </div>
                        </div>

                        {/* Kanan - Gambar */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative h-64 md:h-96">
                                {/* Kursi */}
                                <div className="absolute right-12 bottom-0">
                                    <div className="w-48 h-48 bg-yellow-100 rounded-t-full"></div>
                                    <div className="absolute bottom-0 left-4 w-2 h-16 bg-amber-800"></div>
                                    <div className="absolute bottom-0 right-4 w-2 h-16 bg-amber-800"></div>
                                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-gray-400 rounded-lg"></div>
                                </div>

                                {/* Barang Melayang */}
                                <div className="absolute top-12 left-12 w-24 h-20 bg-gray-600 rounded-lg"></div>
                                <div className="absolute top-8 right-8 w-20 h-32 bg-blue-600 rounded-lg -rotate-12"></div>
                                <div className="absolute bottom-24 right-48 w-16 h-16 bg-green-600 rounded-full">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-green-800"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LandingPage;
