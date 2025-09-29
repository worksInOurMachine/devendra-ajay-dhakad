'use client";';
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "/technology" },
  ];

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        {/* BMW Logo */}
        <div className="transition-transform duration-600 ease-out">
          <Image
            src="/logo.png"
            alt="BMW Logo"
            className="rounded-full"
            width={80}
            height={80}
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-2xl font-bold text-card-foreground">BMW</h2>

        {/* Description */}
        <p className="text-muted-foreground mb-4 text-center max-w-md">
          Sheer driving pleasure through innovative luxury and sustainable
          mobility.
        </p>

        {/* Page Links */}
        <div className="flex justify-center gap-8 mb-6">
          {pages.map((page, i) => (
            <div key={i}>
              <Link
                href={page.href}
                // Use standard Tailwind hover classes for link effects
                className="text-card-foreground hover:text-white font-medium transition-transform duration-300 hover:scale-105"
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          &copy; 2025 BMW Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
