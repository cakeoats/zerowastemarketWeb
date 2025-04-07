import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { HiSearch, HiUser } from 'react-icons/hi';

function NavbarComponent() {
    return (
        <div className="w-full bg-gray-800">
            <div className="container mx-auto">
                <Navbar fluid className="py-4 px-4 bg-gray-800 border-none">
                    <Navbar.Brand href="#">
                        <span className="self-center whitespace-nowrap text-xl font-bold text-white">ZeroWasteMarket</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Button color="gray" pill className="mr-2">
                            <HiSearch className="h-5 w-5" />
                        </Button>
                        <Button color="gray" pill>
                            <HiUser className="h-5 w-5" />
                        </Button>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">Luxury</Navbar.Link>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">Fashion</Navbar.Link>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">Electronics</Navbar.Link>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">Property</Navbar.Link>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">Cars</Navbar.Link>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">Collectibles</Navbar.Link>
                        <Navbar.Link href="#" className="text-gray-300 hover:text-white">All Categories</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default NavbarComponent;
