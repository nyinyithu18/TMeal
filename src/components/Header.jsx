import React, { useRef } from "react";
import { Navbar, TextInput, Button } from "flowbite-react";

const Header = () => {
  const data = useRef("");

  return (
    <Navbar fluid className="bg-stone-700 pt-4">
      <Navbar.Brand href="">
        <img
          src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
          className="mx-2 pt-1 w-15 h-16 rounded-full"
          alt=""
        />
        <span className="self-center whitespace-nowrap text-4xl text-amber-600 font-bold">
          TMeal
        </span>
      </Navbar.Brand>
      <div className="text-3xl text-amber-600 font-semibold hidden md:block">
        Welcom To TMeal
      </div>
      <div className="flex md:order-2">
        <TextInput placeholder="Search meal....." />
        <Button className="ms-3 bg-amber-600">Search</Button>
      </div>
    </Navbar>
  );
};

export default Header;
