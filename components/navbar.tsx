"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`border-1 fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ease-in-out rounded-full ${
        isScrolled
          ? " backdrop-blur-md shadow-md max-w-3xl mx-auto"
          : "bg-transparent max-w-full"
      }`}
    >
      <div className="flex flex-row justify-between items-center px-4 gap-4 h-full">
        {/* Navigation Links */}
        <ul className="flex flex-row justify-center gap-10 flex-1">
          <li className="text-sm font-medium cursor-pointer hover:text-gray-300 transition-colors">
            <Link href="#profile" scroll={false} onClick={(e) => {
              e.preventDefault();
              scrollToSection('profile');
            }}>
              Profile
            </Link>
          </li>
          <li className="text-sm font-medium cursor-pointer hover:text-gray-300 transition-colors">
            <Link href="#skills" scroll={false} onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}>
              Skills
            </Link>
          </li>
          <li className="text-sm font-medium cursor-pointer hover:text-gray-300 transition-colors">
            <Link href="#Projects" scroll={false} onClick={(e) => {
              e.preventDefault();
              scrollToSection('Projects');
            }}>
              Projects
            </Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
