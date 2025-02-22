"use client";

import type React from "react";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface SubProject {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon: React.ReactNode;
  color?: "blue" | "indigo" | "emerald";
  subProjects?: SubProject[];
}

export function ProjectCard({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
  icon,
  color = "blue",
  subProjects,
}: ProjectCardProps) {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      hover: "hover:bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    indigo: {
      bg: "bg-indigo-50",
      hover: "hover:bg-indigo-100",
      text: "text-indigo-600",
      border: "border-indigo-200",
    },
    emerald: {
      bg: "bg-emerald-50",
      hover: "hover:bg-emerald-100",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="group">
      <Card className="overflow-hidden bg-white border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="relative h-48">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {liveUrl && (
                  <Link
                    href={liveUrl}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </Link>
                )}
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="p-6">
            <div
              className={`w-10 h-10 ${colors[color].bg} rounded-lg flex items-center justify-center mb-4`}
            >
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((item) => (
                <Badge
                  key={item}
                  className={`${colors[color].bg} ${colors[color].text} ${colors[color].hover}`}
                >
                  {item}
                </Badge>
              ))}
            </div>
            {subProjects && subProjects.length > 0 && (
              <div className="mt-4 space-y-3 border-t pt-4">
                <h4 className="font-medium text-gray-900">Related Projects</h4>
                {subProjects.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.url}
                    className={`flex items-center space-x-3 p-3 -mx-3 rounded-lg ${colors[color].hover} transition-colors`}
                  >
                    <div
                      className={`p-2 ${colors[color].bg} rounded-lg ${colors[color].text}`}
                    >
                      {sub.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {sub.title}
                      </div>
                      <p className="text-sm text-gray-600">{sub.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
