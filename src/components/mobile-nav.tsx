"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Code2, Download, Home, Laptop, Mail, User } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
  { name: "Projects", href: "#projects", icon: <Code2 className="w-5 h-5" /> },
  { name: "Skills", href: "#skills", icon: <Laptop className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  { name: "CV", href: "#cv", icon: <Download className="w-5 h-5" /> },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col justify-center w-8 h-8 focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute w-6 h-0.5 bg-gray-600 transform"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : -8,
          }}
          transition={{ duration: 0.2 }}
          className="absolute w-6 h-0.5 bg-gray-600 transform"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
                  >
                    {item.icon}
                    <span className="text-lg">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
