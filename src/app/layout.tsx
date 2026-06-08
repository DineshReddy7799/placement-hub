// src/components/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Automatically shut the mobile slider menu drawer whenever the current route paths swap
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoArea}>
        PlacementHub
      </Link>

      {/* Responsive Hamburger Toggle Button */}
      <button 
        className={styles.menuToggle} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Hamburger Menu Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Links Layout Shelf */}
      <div className={`${styles.linkContainer} ${isOpen ? styles.mobileOpen : ""}`}>
        <Link 
          href="/" 
          className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}
        >
          Latest Jobs
        </Link>
        <Link 
          href="/materials" 
          className={`${styles.navLink} ${pathname?.includes("/materials") ? styles.activeLink : ""}`}
        >
          Materials
        </Link>
        <Link 
          href="/roadmaps" 
          className={`${styles.navLink} ${pathname?.includes("/roadmaps") ? styles.activeLink : ""}`}
        >
          Roadmaps
        </Link>
        <Link 
          href="/dsa" 
          className={`${styles.navLink} ${pathname?.includes("/dsa") ? styles.activeLink : ""}`}
        >
          DSA Prep
        </Link>
        <Link 
          href="/about" 
          className={`${styles.navLink} ${pathname === "/about" ? styles.activeLink : ""}`}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className={`${styles.navLink} ${pathname === "/contact" ? styles.activeLink : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}