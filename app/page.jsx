"use client";

import { useState } from "react";

const skills = [
  {
    title: "User Manual Maker",
    icon: "📘",
    description:
      "Creates clear and organized user manuals, guides, and system documentation to help users understand and properly use applications.",
  },
  {
    title: "System QA",
    icon: "🔍",
    description:
      "Performs basic system testing, identifies issues, checks functionality, and provides feedback for system improvements.",
  },
  {
    title: "Feedback Form Maker",
    icon: "📝",
    description:
      "Creates system evaluation and feedback forms using Google Forms to collect user experience and system performance feedback.",
  },
  {
    title: "PPT & Orientation",
    icon: "📊",
    description:
      "Creates PowerPoint presentations and visual materials for system orientations, training sessions, and implementation activities.",
  },
  {
    title: "Meeting Planner",
    icon: "📅",
    description:
      "Prepares meeting flows, agendas, discussion points, schedules, and supporting materials.",
  },
  {
    title: "Basic Web Design",
    icon: "💻",
    description:
      "Creates basic responsive websites and interfaces using VSCode, HTML, CSS, JavaScript, and JSX.",
  },
  {
    title: "AI-Assisted Design",
    icon: "✨",
    description:
      "Uses AI platforms to create design concepts, visual materials, layouts, and creative content.",
  },
];

const tools = [
  "Canva",
  "Google Workspace",
  "Microsoft Office",
  "VS Code",
  "GitHub",
  "Vercel",
  "Figma",
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
 
  {
    title: "Previous Job Projects",
    category: "Previous Work",
    icon: "📈",
    image: ["/projects/Projects & Certificates.png"],
    description:
    "A collection of selected projects, certificates, and professional outputs showcasing my experience in system documentation, digital design, office productivity, and technical support.",

    technologies: ["Canva", "Google Workspace", "Microsoft Office"],
    link: "https://drive.google.com/drive/u/0/folders/1eYNUABFaHrY6aWQkXLq7tcGn4uGM_fax",
  },
  {
    title: "Attendance & Payroll System",
    category: "System UI",
    image: "/projects/eaps.png",
    video: "/projects/attendance.mp4",
    description:
      "A web-based attendance and payroll system interface designed to organize employee attendance records, payroll information, reports, and system settings.",
    technologies: ["AI", "Next.js", "JSX", "Tailwind CSS"],
  },
  {
    title: "IT Training Center Website",
    category: "Web Design",
    image: "/projects/ittraining.png",
    video: "/projects/video.mp4",
    description:
      "A responsive frontend website concept for an IT Training Center. The project focuses on clean navigation, modern interface design, training information, and user-friendly layouts.",
    technologies: ["AI", "Next.js", "JSX", "Tailwind CSS"],
  },

 

  {
    title: "User Manual Design",
    category: "Documentation",
    icon: "📘",
    image: "/projects/um/um-arta1.png",
    manualImages: [
      "/projects/um/um-arta1.png",
      "/projects/um/um-arta2.png",
      "/projects/um/um-arta3.png",
    ],
    description:
      "A professional user manual layout designed to help users understand application features, workflows, and procedures through clear documentation.",
    technologies: ["Canva", "Microsoft Office"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [manualPage, setManualPage] = useState(0);

  return (
    <>
  {/* =====================================================
        NAVBAR
      ===================================================== */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0f19]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold">
            J.R.S<span className="text-purple-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#tools"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Tools
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0f19] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#tools" onClick={() => setMenuOpen(false)}>
                Tools
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        {/* Background Glow */}
        <div className="absolute left-[-150px] top-[100px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-purple-400">
              Portfolio
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
              Joan A.
              <br />

              <span className="text-purple-400">
                Riego-Salisipan
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-medium text-gray-300">
              System Support & Documentation Specialist
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              I create user manuals, system feedback forms, QA materials,
              orientation presentations, meeting plans, and user-friendly
              digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-purple-500 px-6 py-3 font-medium transition hover:bg-purple-400"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - PHOTO */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Purple Glow */}
              <div className="absolute -inset-6 rounded-[2rem] bg-purple-500/20 blur-3xl" />

              {/* Photo */}
              <div className="relative h-[480px] w-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
                <img
                  src="/joan-profile.png"
                  alt="Joan A. Riego-Salisipan"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0f19] to-transparent" />
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-5 -left-6 rounded-2xl border border-white/10 bg-[#111624]/95 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-xs text-gray-500">
                  Specialization
                </p>

                <p className="mt-1 text-sm font-semibold">
                  System & Creative Support
                </p>
              </div>

            
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-purple-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Turning systems into something people can understand.
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I support system development and implementation through
            documentation, quality assurance, feedback gathering,
            presentation design, and meeting coordination. I also have
            basic web development skills and enjoy combining technology
            and design to create useful and easy-to-understand materials.
          </p>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="bg-white/[0.02] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[3px] text-purple-400">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <button
                key={skill.title}
                onClick={() => setSelectedSkill(skill)}
                className="group rounded-2xl border border-white/10 bg-[#111624] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-500/50"
              >
                <div className="mb-5 text-3xl">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {skill.description}
                </p>

                <p className="mt-5 text-sm font-medium text-purple-400">
                  View details →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[3px] text-purple-400">
              My Work
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-500">
              A collection of websites, system interfaces,
              documentation, and digital materials that I have
              designed or developed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111624] transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-white/[0.03]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Fallback Icon */}
                  <div className="absolute inset-0 -z-0 flex items-center justify-center text-6xl">
                    {project.icon}
                  </div>

                  {/* Category */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0b0f19]/80 px-4 py-2 text-xs font-medium text-purple-300 backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Preview Button */}
                  <button
                  
                    onClick={() => {
                      setSelectedProject(project);
                      setManualPage(0);
                    }}
                    className="mt-6 w-full rounded-full bg-purple-500 px-5 py-3 text-sm font-medium transition hover:bg-purple-400"
                  >
                    Preview Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ===================================================== */}

      <section
        id="tools"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-purple-400">
            My Toolkit
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tools I Use
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-full border border-white/10 bg-[#111624] px-6 py-3 text-sm text-gray-300 transition hover:border-purple-500/50 hover:text-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[3px] text-purple-400">
            Let's Connect
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-500">
            Whether you need documentation, system QA support,
            presentation materials, or a basic website, I'd be happy
            to connect.
          </p>

          <a
            href="mailto:annriego30@gmail.com"
            className="mt-8 inline-block rounded-full bg-purple-500 px-7 py-3 font-medium transition hover:bg-purple-400"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>
            © 2026 Joan A. Riego-Salisipan
          </p>

          <p>
            Built with Next.js & JSX
          </p>
        </div>
      </footer>

      {/* =====================================================
          SKILL MODAL
      ===================================================== */}

      {selectedSkill && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#111624] p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="text-4xl">
              {selectedSkill.icon}
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              {selectedSkill.title}
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              {selectedSkill.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-medium text-purple-400">
                Related Tools
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Canva • Google Workspace • Microsoft Office • Figma •
                VS Code
              </p>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="mt-7 rounded-full bg-purple-500 px-6 py-3 text-sm font-medium transition hover:bg-purple-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          PROJECT PREVIEW MODAL
      ===================================================== */}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#111624] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0f19]/80 text-gray-400 backdrop-blur transition hover:bg-white/10 hover:text-white"
              aria-label="Close project preview"
            >
              ✕
            </button>

            {/* =================================================
             VIDEO / IMAGE / USER MANUAL PREVIEW     
            ================================================= */}

<div className="relative bg-[#0b0f19] p-4 sm:p-6">

{selectedProject.video ? (
  /* VIDEO PROJECT */
  <video
    controls
    preload="metadata"
    playsInline
    className="max-h-[500px] w-full rounded-2xl bg-black object-contain"
  >
    <source
      src={selectedProject.video}
      type="video/mp4"
    />

    Your browser does not support video playback.
  </video>

) : selectedProject.manualImages ? (
  /* USER MANUAL SLIDESHOW */
  <div>

    {/* Screenshot */}
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
      <img
        src={selectedProject.manualImages[manualPage]}
        alt={`${selectedProject.title} - Page ${manualPage + 1}`}
        className="max-h-[600px] w-full object-contain"
      />
    </div>

    {/* Navigation */}
    <div className="mt-5 flex items-center justify-between gap-4">

      {/* Previous */}
      <button
        onClick={() =>
          setManualPage((current) =>
            current === 0
              ? selectedProject.manualImages.length - 1
              : current - 1
          )
        }
        className="rounded-full border border-white/10 bg-[#111624] px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-purple-500/50 hover:bg-purple-500 hover:text-white"
      >
        ← Previous
      </button>

      {/* Page Counter */}
      <span className="text-sm text-gray-400">
        Page {manualPage + 1} of{" "}
        {selectedProject.manualImages.length}
      </span>

      {/* Next */}
      <button
        onClick={() =>
          setManualPage((current) =>
            current === selectedProject.manualImages.length - 1
              ? 0
              : current + 1
          )
        }
        className="rounded-full border border-white/10 bg-[#111624] px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-purple-500/50 hover:bg-purple-500 hover:text-white"
      >
        Next →
      </button>
    </div>
  </div>

) : (
  /* NORMAL IMAGE PROJECT */
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="w-full rounded-2xl object-cover"
  />
)}

</div>

            {/* =================================================
                PROJECT DETAILS
            ================================================= */}

            <div className="p-7 sm:p-9">
              <p className="text-sm font-medium uppercase tracking-[3px] text-purple-400">
                {selectedProject.category}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {selectedProject.title}
              </h2>

              <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="text-sm font-medium text-purple-400">
                  Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
                {selectedProject.link && (
               <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#a70000] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#8f0000] hover:shadow-lg"
                >
                View Previous Job Projects
               <span>↗</span>
               </a>
                )}
              </div>

              {/* Close Preview Button */}
              <div className="mt-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-purple-500 px-6 py-3 text-sm font-medium transition hover:bg-purple-400"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
