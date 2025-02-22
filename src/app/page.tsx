// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   ArrowRight,
//   Bot,
//   Brain,
//   Code,
//   Download,
//   FileText,
//   Laptop,
//   Leaf,
//   Rocket,
// } from "lucide-react";
// import { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { ProjectCard } from "@/components/project-card";
// import { Nav } from "@/components/nav";
// import { SocialIcons } from "@/components/social-icons";
// import { TechStack } from "@/components/tech-stack";
// import { ImageGrid } from "@/components/image-grid";
// import { AcademicJourney } from "@/components/academic-journey";

// export default function Home() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   return (
//     <div ref={ref} className="relative min-h-screen bg-white">
//       <Nav />

//       {/* Hero Section */}
//       <section id="home" className="relative pt-32 pb-20 overflow-hidden">
//         <motion.div style={{ y }} className="absolute inset-0 -z-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-10" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
//         </motion.div>

//         <div className="container px-4 mx-auto !z-50">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-xl text-blue-600 mb-2">Howdy! I&apos;m</h2>
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
//               Mohammad Jamiu
//             </h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//               A Telecommunications Engineer & Full Stack Developer on a mission
//               to create meaningful impact through code.
//             </p>
//             <div className="flex justify-center gap-4 mb-16">
//               <Button className="bg-blue-600 hover:bg-blue-700">
//                 View Projects
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-blue-200 hover:bg-blue-50"
//               >
//                 Download CV
//                 <Download className="w-4 h-4 ml-2" />
//               </Button>
//             </div>

//             <ImageGrid
//               images={[
//                 { src: "/photo-1.png", alt: "Mohammad Jamiu - Portrait" },
//                 { src: "/photo-2x.png", alt: "Mohammad Jamiu - Working" },
//                 { src: "/photo-3.jpg", alt: "Mohammad Jamiu - Speaking" },
//               ]}
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="max-w-4xl mx-auto mt-16"
//           >
//             <div className="relative p-8 bg-blue-50 rounded-2xl overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
//               <div className="relative z-10">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//                   Turning Code Into Impact
//                 </h3>
//                 <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
//                   My driving mission is to leverage technology for meaningful
//                   change, whether it&apos;s through AI-powered educational
//                   tools, charitable initiatives, or simplifying complex concepts
//                   for learners worldwide.
//                 </p>
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <Brain className="w-6 h-6 text-blue-600" />
//                     </div>
//                     <h4 className="font-medium mb-2">Innovation</h4>
//                     <p className="text-gray-600 text-sm">
//                       Building AI-powered tools that solve real problems
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <Rocket className="w-6 h-6 text-green-600" />
//                     </div>
//                     <h4 className="font-medium mb-2">Social Impact</h4>
//                     <p className="text-gray-600 text-sm">
//                       Creating technology for charitable causes
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                       <Laptop className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <h4 className="font-medium mb-2">Education</h4>
//                     <p className="text-gray-600 text-sm">
//                       Simplifying complex concepts for learners
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <TechStack />

//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="py-20 bg-gradient-to-b from-blue-50 to-white"
//       >
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
//               Featured Projects
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               A showcase of my impact-driven development journey
//             </p>
//           </motion.div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <ProjectCard
//               title="MonoEd Africa"
//               description="AI-powered educational platform empowering African students with innovative tools."
//               image="/monoed-photo.png"
//               tech={["Next.js", "MDX", "Vercel"]}
//               liveUrl="https://monoed.africa"
//               githubUrl="#"
//               icon={<Bot className="w-6 h-6 text-indigo-600" />}
//               color="indigo"
//               subProjects={[
//                 {
//                   title: "CV Resume Builder",
//                   description:
//                     "AI-powered CV generator with ATS-friendly templates",
//                   url: "https://cv-resume-builder.monoed.africa",
//                   icon: <FileText className="w-4 h-4" />,
//                 },
//                 {
//                   title: "AI Plant Analysis",
//                   description:
//                     "Instant plant identification and information tool",
//                   url: "https://ai-plant-analysis-v1.vercel.app",
//                   icon: <Leaf className="w-4 h-4" />,
//                 },
//               ]}
//             />

//             <ProjectCard
//               title="TooAbstractive"
//               description="Educational platform simplifying complex engineering concepts for students worldwide."
//               image="/tooabstractive-photo.png"
//               tech={["Hugo SSG", "HTML", "CSS", "Vercel"]}
//               liveUrl="https://tooabstractive.com"
//               icon={<Brain className="w-6 h-6 text-blue-600" />}
//               color="blue"
//             />

//             <ProjectCard
//               title="#digitalsadaqah"
//               description="Building websites for NGOs as charity work, making technology accessible to non-profits."
//               image="/placeholder.svg"
//               tech={["React", "Next.js", "TailwindCSS"]}
//               liveUrl="https://twitter.com/hashtag/digitalsadaqah"
//               icon={<Rocket className="w-6 h-6 text-emerald-600" />}
//               color="emerald"
//               subProjects={[
//                 {
//                   title: "MCAN Kano",
//                   description:
//                     "Website for Muslim Corpers' Association of Nigeria",
//                   url: "https://mcankano-main.vercel.app",
//                   icon: <Code className="w-4 h-4" />,
//                 },
//               ]}
//             />
//           </div>
//         </div>
//       </section>

//       <AcademicJourney />

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-white">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-2xl mx-auto text-center"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
//               Get in Touch
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Want to chat? Just shoot me a dm with a direct question on Twitter
//               and I&apos;ll respond whenever I can. I will ignore all
//               soliciting.
//             </p>
//             <SocialIcons />
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Code,
  Download,
  FileText,
  Laptop,
  Leaf,
  Rocket,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Nav } from "@/components/nav";
import { SocialIcons } from "@/components/social-icons";
import { TechStack } from "@/components/tech-stack";

import { AcademicJourney } from "@/components/academic-journey";
import ImageGrid from "@/components/ImageGrid";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Add this handler function inside your Home component
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Mohammad-Jamiu-Res.pdf";
    link.download = "Mohammad-Jamiu-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div ref={ref} className="relative min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 md:pt-36 pb-20 md:pb-24 overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
        </motion.div>

        <div className="responsive-container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative z-10"
          >
            <h2 className="text-xl text-blue-600 mb-2 flex items-center justify-center gap-2">
              <span>Assalamu Alaikum</span>
              <span role="img" aria-label="waving hand">
                👋 I&apos;m
              </span>
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
              Mohammad Jamiu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A Telecommunications Engineer & Full Stack Developer on a mission
              to create meaningful impact through code.
            </p>
            <div className="flex justify-center gap-4 mb-20">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="#projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-200 hover:bg-blue-50"
                onClick={handleDownloadCV}
              >
                Download CV
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <ImageGrid
              images={[{ src: "/photo-1.png", alt: "Mohammad Jamiu" }]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="relative p-8 bg-blue-50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Turning Code Into Impact
                </h3>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                  My driving mission is to leverage technology for meaningful
                  change, whether it&apos;s through AI-powered educational
                  tools, charitable initiatives, or simplifying complex concepts
                  for learners worldwide.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-medium mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">
                      Building AI-powered tools that solve real problems
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-medium mb-2">Social Impact</h4>
                    <p className="text-gray-600 text-sm">
                      Creating technology for charitable causes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Laptop className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-medium mb-2">Education</h4>
                    <p className="text-gray-600 text-sm">
                      Simplifying complex concepts for learners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my impact-driven development journey
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="MonoEd Africa"
              description="AI-powered educational platform empowering African students with innovative tools."
              image="/monoed-photo.png"
              tech={["Next.js", "MDX", "Vercel"]}
              liveUrl="https://monoed.africa"
              githubUrl="#"
              icon={<Bot className="w-6 h-6 text-orange-600" />}
              color="orange"
              subProjects={[
                {
                  title: "CV Resume Builder",
                  description:
                    "AI-powered CV generator with ATS-friendly templates",
                  url: "https://cv-resume-builder.monoed.africa",
                  icon: <FileText className="w-4 h-4" />,
                },
                {
                  title: "AI Plant Analysis",
                  description:
                    "Instant plant identification and information tool",
                  url: "https://ai-plant-analysis-v1.vercel.app",
                  icon: <Leaf className="w-4 h-4" />,
                },
              ]}
            />

            <ProjectCard
              title="TooAbstractive"
              description="Educational platform simplifying complex engineering concepts for students worldwide."
              image="/tooabstractive-photo.png"
              tech={["Hugo SSG", "HTML", "CSS", "Vercel"]}
              liveUrl="https://tooabstractive.com"
              icon={<Brain className="w-6 h-6 text-blue-600" />}
              color="blue"
            />

            <ProjectCard
              title="#digitalsadaqah"
              description="Building websites for NGOs as charity work, making technology accessible to non-profits."
              image="/placeholder.svg"
              tech={["React", "Next.js", "TailwindCSS"]}
              liveUrl="https://twitter.com/hashtag/digitalsadaqah"
              icon={<Rocket className="w-6 h-6 text-emerald-600" />}
              color="emerald"
              subProjects={[
                {
                  title: "MCAN Kano",
                  description:
                    "Website for Muslim Corpers' Association of Nigeria",
                  url: "https://mcankano-main.vercel.app",
                  icon: <Code className="w-4 h-4" />,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <AcademicJourney />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out through any of these platforms. I&apos;ll
              get back to you as soon as possible.
            </p>
            <SocialIcons />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
