import Image from "next/image";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export const Header = () => {
  return (
    <Navbar maxWidth="full" isBordered className="border-neutral-900">
      <NavbarBrand>
        <Image src="/a41_logo.svg" alt="a41-logo" height={20} width={60} />
        <div className="flex items-center font-semibold text-xl ml-6 gap-2">
          <p className="hidden sm:block">DApp Engineer</p>
          <p>전광현</p>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-12 font-semibold" justify="end">
        <NavbarItem>
          <Link href="https://narrow-cello-dab.notion.site/DApp-Engineer-161c62052b8e809da687f14934fa6137" target="_blank" className="group text-black hover:text-neutral-700 transition-colors duration-500">
            REQUIREMENTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" target="_blank" className="text-black hover:text-neutral-700 transition-colors duration-500">
            DOCS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://github.com/gWhy-j/staking-rewards" target="_blank" className="text-black hover:text-neutral-700 transition-colors duration-500">
            GITHUB
          </Link>
        </NavbarItem>
      </NavbarContent>
      <Link
        href="https://purring-oriole-e2f.notion.site/Dylan-15aa9255fa9b80d6b622d69b0c13134a"
        target="_blank"
        className="!h-full flex items-center font-semibold ml-6 text-black px-6 border-x border-neutral-900 hover:text-neutral-700 transition-colors duration-500"
      >
        CONTACT US
      </Link>
    </Navbar>
  );
};
