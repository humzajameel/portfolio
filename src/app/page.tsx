"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Code2,
  Server,
  Brain,
  Cloud,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const skills = {
    "Core CS & Backend": [
      "Python",
      "FastAPI",
      "Node.js",
      "C# (.NET)",
      "REST APIs",
      "GraphQL",
      "Async Python",
      "Data Structures",
      "Distributed Systems",
    ],
    Frontend: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React Native",
      "Streamlit",
      "HTML5/CSS3",
    ],
    "AI & ML": [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "VAPI.ai",
      "PyTorch",
      "Scikit-Learn",
      "Vector Search",
      "Agentic Workflows",
    ],
    "Cloud & DevOps": [
      "AWS (Lambda, S3, DynamoDB)",
      "Azure",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "MongoDB",
      "Redis",
      "SQL Server",
    ],
    Methodologies: ["Agile/Scrum", "Clean Code", "Object-Oriented Design"],
  };

  const experiences = [
    {
      role: "AI / Full Stack Engineer (Working Student)",
      company: "New Digital Intelligence GmbH",
      location: "Berlin, Germany",
      period: "May 2024 – Aug 2025",
      bullets: [
        "Built internal React/Node.js tooling enabling product and engineering teams to validate and test complex AI features before production rollout.",
        "Developed and integrated responsive user-facing interfaces to interact with complex RAG pipelines and real-time voice agents.",
        "Implemented event-driven backend tasks and scheduled cron jobs with structured logging for production observability.",
        "Collaborated in a flat-hierarchy agile team with daily syncs, code reviews, and technical deep-dives.",
      ],
    },
    {
      role: "Product Development Engineer / Full Stack Engineer",
      company: "Habib Bank Limited",
      location: "Karachi, Pakistan",
      period: "Aug 2022 – Mar 2023",
      bullets: [
        "Built and maintained scalable frontend features for large-scale enterprise banking web and mobile applications.",
        "Implemented Redis caching for high-frequency database calls, significantly reducing data retrieval latency.",
        "Migrated legacy code into modular, reusable UI components, improving maintainability and delivery speed.",
        "Automated build and release pipelines via cloud DevOps, removing manual steps and adding crash monitoring.",
      ],
    },
    {
      role: "Software Engineer",
      company: "United Bank Limited",
      location: "Karachi, Pakistan",
      period: "Jul 2021 – Jan 2022",
      bullets: [
        "Modernized web portals using JavaScript, HTML5, and CSS3 for high-performance user interfaces.",
        "Engineered reliable backend logic with C# (.NET) and REST APIs, optimizing database queries.",
        "Participated in daily stand-ups and cross-functional design sprints.",
      ],
    },
    {
      role: "Software Developer",
      company: "Evantagesoft",
      location: "Karachi, Pakistan",
      period: "Feb 2021 – Jul 2021",
      bullets: [
        "Developed web applications with the MERN stack, focusing on component state management.",
        "Built responsive layouts and cross-platform mobile elements for smooth user experiences.",
      ],
    },
  ];

  const projects = [
    {
      title: "Agentic Voice Assistant with Tool-Calling",
      tech: ["VAPI.ai", "FastAPI", "LangGraph", "Python", "AsyncIO"],
      description:
        "Real-time phone agent infrastructure using asynchronous Python to orchestrate multi-step reasoning chains with dynamic tool-calling and webhook integration for ticket management APIs.",
    },
    {
      title: "MidiNet GAN — Symbolic Music Generation",
      tech: ["PyTorch", "GANs", "MIDI"],
      description:
        "Reimplemented and extended the MidiNet GAN architecture in modern PyTorch. Fixed architectural bugs, introduced lambda-based chord and history conditioning, and ran GPU training experiments.",
    },
    {
      title: "Loan Default Predictor API",
      tech: ["FastAPI", "Scikit-Learn", "Docker"],
      description:
        "End-to-end Machine Learning pipeline wrapped in a high-performance FastAPI endpoint. Fully containerized with Docker for seamless deployment across environments.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center text-slate-950 font-bold text-xl">
              MH
            </div>
            <div>
              <div className="font-semibold tracking-tight">Muhammad Humza</div>
              <div className="text-xs text-slate-500 -mt-1">
                Full Stack &amp; AI Engineer
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-sky-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-sky-400 transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/humzajameel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/humzajameel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-900 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="/Muhammad_Humza_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-white text-slate-950 rounded-xl text-sm font-medium hover:bg-slate-200 transition-all active:scale-[0.985]"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-3">
              Muhammad
              <br />
              Humza
            </h1>

            {/* Location moved below the name */}
            <div className="flex items-center gap-2 text-slate-400 mb-4">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="text-lg">Berlin, Germany</span>
            </div>

            <p className="text-2xl md:text-3xl text-slate-400 font-light tracking-tight mb-6">
              Full Stack &amp; AI Engineer
            </p>

            <p className="max-w-lg text-lg text-slate-400 mb-8">
              M.Sc. Artificial Intelligence student building production-grade
              React/TypeScript frontends and high-performance Python/FastAPI
              backends with AWS and agentic AI systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-medium transition-all flex items-center gap-2 active:scale-[0.985]"
              >
                Get in touch <Mail className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="px-8 py-3.5 border border-slate-700 hover:bg-slate-900 rounded-2xl font-medium transition-all"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <Image
              src="/image.png"
              alt="Muhammad Humza - Full Stack & AI Engineer"
              width={320}
              height={320}
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl border border-slate-800 shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-3xl text-lg text-slate-300 leading-relaxed">
          Ambitious M.Sc. Artificial Intelligence student possessing strong
          computer science fundamentals and 3+ years of engineering experience
          spanning full-stack application development and distributed AI
          workflows. Proven track record building responsive React/TypeScript
          frontends alongside high-performance Python/FastAPI and
          Node/Express.js backends. Experienced with AWS event-driven
          architectures and production-level database management. Highly
          effective collaborator thriving in agile, fast-paced environments,
          bringing a “dig-first” troubleshooting mentality to complex systems.
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800 bg-slate-900/50"
      >
        <h2 className="section-heading">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => {
            const icons = [Code2, Server, Brain, Cloud, Users];
            const Icon = icons[index % icons.length];

            return (
              <div key={category} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800 rounded-xl">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-950 border border-slate-800 rounded-full hover:border-sky-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h2 className="section-heading">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-1 mb-4">
                  <div>
                    <h3 className="font-semibold text-xl">{exp.role}</h3>
                    <p className="text-sky-400">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400 font-mono tracking-tight">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-2 text-slate-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800 bg-slate-900/50"
      >
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-heading mb-0">Featured Projects</h2>
          <a
            href="https://github.com/humzajameel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-slate-900 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="card group flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-slate-950 border border-slate-800 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="section-heading">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="text-sky-400 text-sm font-medium tracking-widest">
              2023 – PRESENT
            </div>
            <h3 className="font-semibold text-xl mt-1">
              M.Sc. Artificial Intelligence
            </h3>
            <p className="text-slate-400">
              Brandenburg University of Technology, Cottbus, Germany
            </p>
            <div className="mt-4 text-sm text-slate-400">
              Modules: Distributed Agentic Systems, Machine Learning, Automated
              Reasoning, Data Structures &amp; Advanced Algorithms
            </div>
          </div>

          <div className="card">
            <div className="text-sky-400 text-sm font-medium tracking-widest">
              2017 – 2021
            </div>
            <h3 className="font-semibold text-xl mt-1">
              B.Sc. Computer Science
            </h3>
            <p className="text-slate-400">
              COMSATS University Islamabad, Pakistan
            </p>
            <div className="mt-4 text-sm text-slate-400">
              Thesis: Geo-navigation application with React Native frontend,
              Node.js backend, and MongoDB.
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800 bg-slate-900/50"
      >
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="section-heading">Let’s work together</h2>
            <p className="text-xl text-slate-400 max-w-md">
              I’m currently open to opportunities in Full Stack &amp; AI
              engineering roles, interesting projects, or collaborations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:humza.career@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-white text-slate-950 rounded-2xl font-medium hover:bg-slate-200 transition-all"
              >
                <Mail className="w-5 h-5" /> Email me
              </a>
              <a
                href="https://linkedin.com/in/humzajameel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-slate-900 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4 text-sm">
            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span className="text-slate-400">English</span>
              <span className="font-medium">Fluent (C1)</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span className="text-slate-400">German</span>
              <span className="font-medium">A2 (Targeting B1)</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-3">
              <span className="text-slate-400">Urdu</span>
              <span className="font-medium">Native</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Muhammad Humza. Built with Next.js &amp;
        Tailwind.
      </footer>
    </div>
  );
}
