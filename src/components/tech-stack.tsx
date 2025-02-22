// "use client";

// import { motion } from "framer-motion";
// import {
//   Bot,
//   Box,
//   Cloud,
//   Code2,
//   Database,
//   FileCode2,
//   Globe,
//   Palette,
//   Server,
// } from "lucide-react";

// const techStack = [
//   {
//     category: "Frontend",
//     items: [
//       {
//         name: "React",
//         icon: <Code2 className="w-5 h-5" />,
//         description: "Building interactive user interfaces",
//         color: "text-sky-500",
//       },
//       {
//         name: "Next.js",
//         icon: <Globe className="w-5 h-5" />,
//         description: "Full-stack React framework for production",
//         color: "text-black",
//       },
//       {
//         name: "TailwindCSS",
//         icon: <Palette className="w-5 h-5" />,
//         description: "Bringing UI designs to life",
//         color: "text-cyan-500",
//       },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [
//       {
//         name: "Node.js",
//         icon: <Server className="w-5 h-5" />,
//         description: "Runtime for server-side JavaScript",
//         color: "text-green-600",
//       },
//       {
//         name: "MongoDB",
//         icon: <Database className="w-5 h-5" />,
//         description: "NoSQL database for flexible data storage",
//         color: "text-green-500",
//       },
//       {
//         name: "Firebase",
//         icon: <Cloud className="w-5 h-5" />,
//         description: "Backend services and real-time features",
//         color: "text-amber-500",
//       },
//     ],
//   },
//   {
//     category: "Tools & Deployment",
//     items: [
//       {
//         name: "Vercel",
//         icon: <Box className="w-5 h-5" />,
//         description: "Deployment and hosting platform",
//         color: "text-black",
//       },
//       {
//         name: "Hugo",
//         icon: <FileCode2 className="w-5 h-5" />,
//         description: "Static site generation for blazing speed",
//         color: "text-pink-600",
//       },
//       {
//         name: "Gemini AI",
//         icon: <Bot className="w-5 h-5" />,
//         description: "AI integration for smart features",
//         color: "text-blue-600",
//       },
//     ],
//   },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// export function TechStack() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
//             Tech Stack
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             The tools and technologies I use to bring ideas to life
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {techStack.map((category) => (
//             <motion.div
//               key={category.category}
//               variants={item}
//               className="bg-white rounded-2xl p-6 shadow-sm"
//             >
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 {category.category}
//               </h3>
//               <div className="space-y-4">
//                 {category.items.map((tech) => (
//                   <motion.div
//                     key={tech.name}
//                     whileHover={{ x: 5 }}
//                     className="flex items-start space-x-3"
//                   >
//                     <div className={`p-2 rounded-lg bg-gray-50 ${tech.color}`}>
//                       {tech.icon}
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-900">
//                         {tech.name}
//                       </div>
//                       <p className="text-sm text-gray-600">
//                         {tech.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Box,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Globe,
  Key,
  Palette,
  Server,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: <Code2 className="w-5 h-5" />,
        description: "Building interactive user interfaces",
        color: "text-sky-500",
      },
      {
        name: "Next.js",
        icon: <Globe className="w-5 h-5" />,
        description: "Full-stack React framework for production",
        color: "text-black",
      },
      {
        name: "TailwindCSS",
        icon: <Palette className="w-5 h-5" />,
        description: "Bringing UI designs to life",
        color: "text-cyan-500",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <Server className="w-5 h-5" />,
        description: "Runtime for server-side JavaScript",
        color: "text-green-600",
      },
      {
        name: "MongoDB",
        icon: <Database className="w-5 h-5" />,
        description: "NoSQL database for flexible data storage",
        color: "text-green-500",
      },
      {
        name: "Firebase",
        icon: <Cloud className="w-5 h-5" />,
        description: "Backend services and real-time features",
        color: "text-amber-500",
      },
    ],
  },
  {
    category: "Authentication",
    items: [
      {
        name: "NextAuth.js",
        icon: <Key className="w-5 h-5" />,
        description: "Authentication for Next.js applications",
        color: "text-purple-600",
      },
      {
        name: "Appwrite",
        icon: <FileCode2 className="w-5 h-5" />,
        description: "Open source backend platform",
        color: "text-pink-600",
      },
    ],
  },
  {
    category: "Deployment & Tools",
    items: [
      {
        name: "Vercel",
        icon: <Box className="w-5 h-5" />,
        description: "Deployment and hosting platform",
        color: "text-black",
      },
      {
        name: "Netlify",
        icon: <Cloud className="w-5 h-5" />,
        description: "Web hosting and automation",
        color: "text-teal-600",
      },
      {
        name: "Gemini AI",
        icon: <Bot className="w-5 h-5" />,
        description: "AI integration for smart features",
        color: "text-blue-600",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="responsive-container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`p-2 rounded-lg bg-gray-50 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {tech.name}
                      </div>
                      <p className="text-sm text-gray-600">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
