"use client";

import { motion } from "framer-motion";
import { Code2, Download, Home, Laptop, Mail, User } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <Code2 className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Laptop className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  { name: "CV", href: "#cv", icon: <Download className="w-4 h-4" /> },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="border-b border-gray-100">
        <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-blue-600"
          >
            MJ
          </motion.div>
          <ul className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <MobileNav />
        </nav>
      </div>
    </motion.header>
  );
}
