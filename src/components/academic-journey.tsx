"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, LightbulbIcon } from "lucide-react";

const journeyItems = [
  {
    year: "2024",
    title: "Academic Excellence & Leadership",
    description:
      "Graduated with First Class Honours (CGPA: 4.64) in Telecommunications Engineering and emerged as the Best Graduating Student in the Department of Electrical Engineering. Represented high-achieving Muslim graduates at the First Class Muslim Foundation, contributing to discussions on educational transformation with the National Universities Commission.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    year: "2021",
    title: "Founded TooAbstractive",
    description:
      "Created an educational platform while in Level 300, focusing on simplifying complex engineering concepts for students worldwide. The platform now attracts over 10,000 monthly readers.",
    icon: <LightbulbIcon className="w-6 h-6" />,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    year: "2019-2024",
    title: "Academic Impact & Mentorship",
    description:
      "Served as an Academic Tutor, mentoring prospective undergraduates with over 65% success rate. Received multiple scholarships for academic excellence.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

export function AcademicJourney() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Academic Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of academic achievements and transformative impact in
            education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== journeyItems.length - 1 && (
                <div className="absolute left-4 top-4 bottom-0 w-px bg-gray-200" />
              )}
              <div className="flex items-start gap-6">
                <div
                  className={`${item.bg} p-2 rounded-xl shrink-0 relative z-10`}
                >
                  <div className={item.color}>{item.icon}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
