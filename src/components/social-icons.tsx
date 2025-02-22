"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="w-5 h-5" />,
    color: "hover:text-sky-500",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+2347080462912",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "hover:text-green-500",
  },
  {
    name: "Email",
    href: "mailto:balogunmohammedjamiu@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "hover:text-red-500",
  },
];

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-full bg-gray-100 transition-colors ${social.color}`}
        >
          {social.icon}
          <span className="sr-only">{social.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
