// "use client";

// import { motion } from "framer-motion";
// import { Code2, Download, Home, Laptop, Mail, User } from "lucide-react";
// import Link from "next/link";
// import { MobileNav } from "./mobile-nav";

// const navItems = [
//   { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
//   { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
//   { name: "Projects", href: "#projects", icon: <Code2 className="w-4 h-4" /> },
//   { name: "Skills", href: "#skills", icon: <Laptop className="w-4 h-4" /> },
//   { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
//   { name: "CV", href: "#cv", icon: <Download className="w-4 h-4" /> },
// ];

// export function Nav() {
//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
//     >
//       <div className="border-b border-gray-100">
//         <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-xl font-bold text-blue-600"
//           >
//             MJ
//           </motion.div>
//           <ul className="hidden lg:flex items-center">
//             {navItems.map((item, index) => (
//               <motion.li
//                 key={item.name}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center px-3 py-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
//                 >
//                   {item.icon}
//                   <span className="ml-1">{item.name}</span>
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>
//           <MobileNav />
//         </nav>
//       </div>
//     </motion.header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Download,
  Home,
  Laptop,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <Code2 className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Laptop className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  { name: "CV", href: "#cv", icon: <Download className="w-4 h-4" /> },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b  border-gray-100 bg-white/80 backdrop-blur-md"
    >
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-blue-600"
        >
          MJ
        </motion.div> */}
        <Image
          src={`/logo-1.png`}
          alt="MJ"
          width={50}
          height={50}
          className="ml-2"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8">
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
                <span className="ml-2">{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={
            isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }
          }
          className={`${
            isMenuOpen ? "fixed" : "hidden"
          } lg:hidden top-16 left-0 right-0 bottom-0 bg-white z-40`}
        >
          <nav className="responsive-container px-4 py-6 bg-white border-b border-blue-100  ">
            <ul className="space-y-2 px-2 ">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center  py-3 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </nav>
    </motion.header>
  );
}
