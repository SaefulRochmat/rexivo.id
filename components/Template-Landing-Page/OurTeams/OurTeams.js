"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Adam Renklint",
    role: "Founder & CEO",
    image: "/images/avatar1.png",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
    big: true,
  },
  {
    name: "John Doe",
    role: "CTO",
    image: "/images/avatar2.png",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Head of Marketing",
    image: "/images/avatar3.png",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Brown",
    role: "Lead Designer",
    image: "/images/avatar2.png",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Developer",
    image: "/images/avatar1.png",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  return (
   <div className="px-1 py-2">
    <section className="max-w-full mx-auto px-4 py-16 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-red-500/40 rounded-lg">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Meet the People Behind{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
            Our Success
          </span>
        </h2>
        <p className="text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
          Tim profesional kami yang beragam dan penuh semangat menyatukan pengalaman
          dan pemikiran inovatif untuk memberikan hasil yang luar biasa bagi klien kami.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Large Photo - Founder/CEO */}
        {teamMembers
          .filter((member) => member.big)
          .map((member, index) => (
            <div
              key={index}
              className="relative col-span-1 row-span-2 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="mb-2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    Leadership
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-200 text-base mb-4">{member.role}</p>
                <div className="flex space-x-3">
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="text-white w-5 h-5" />
                  </a>
                  <a 
                    href={member.socials.twitter} 
                    target="_blank"
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-sky-500 transition-colors duration-200"
                  >
                    <Twitter className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}

        {/* Small Photos - Other Team Members */}
        {teamMembers
          .filter((member) => !member.big)
          .map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 aspect-square"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-lg font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-200 text-sm mb-3">{member.role}</p>
                <div className="flex space-x-2">
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank"
                    className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="text-white w-4 h-4" />
                  </a>
                  <a 
                    href={member.socials.twitter} 
                    target="_blank"
                    className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full hover:bg-sky-500 transition-colors duration-200"
                  >
                    <Twitter className="text-white w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
   </div>
  );
}