import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Bot,
  Code2,
  Workflow,
  Radar,
  Wrench,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
  Download,
  ChevronRight,
} from "lucide-react";

const profile = {
  name: "Sazid Rahman Simanto",
  title: "Robotics Software Engineer",
  location: "Berlin, Germany",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "#",
  tagline:
    "I build intelligent robotic systems that combine perception, planning, control, and reliable software engineering.",
  summary:
    "Robotics Software Engineer focused on autonomous systems, ROS/ROS 2, motion planning, sensor integration, computer vision, and embedded-to-cloud robotics workflows. I enjoy turning complex robotics problems into robust, testable, production-ready software.",
};

const skills = [
  {
    icon: Bot,
    title: "Robotics",
    items: ["ROS / ROS 2", "Navigation", "SLAM", "Gazebo / Isaac Sim", "Robot URDF/Xacro"],
  },
  {
    icon: Radar,
    title: "Perception",
    items: ["Computer Vision", "Sensor Fusion", "LiDAR", "Camera Calibration", "Object Detection"],
  },
  {
    icon: Workflow,
    title: "Planning & Control",
    items: ["Path Planning", "Trajectory Control", "PID / MPC", "Kinematics", "MoveIt"],
  },
  {
    icon: Code2,
    title: "Software",
    items: ["C++", "Python", "Linux", "Docker", "CI/CD", "Git"],
  },
];

const projects = [
  {
    title: "Autonomous Mobile Robot Navigation Stack",
    category: "ROS 2 · Nav2 · SLAM",
    description:
      "Designed a complete autonomous navigation pipeline for a differential-drive robot, including mapping, localization, obstacle avoidance, and waypoint following.",
    impact: "Improved repeatable navigation performance in simulated indoor environments.",
    tech: ["ROS 2", "Nav2", "SLAM Toolbox", "Gazebo", "Python", "C++"],
    github: "#",
    demo: "#",
  },
  {
    title: "Vision-Based Object Detection for Robotic Picking",
    category: "Computer Vision · Robotics Perception",
    description:
      "Built a perception module for detecting and localizing target objects from RGB camera streams for robotic manipulation workflows.",
    impact: "Created a modular perception node ready for integration with a manipulation pipeline.",
    tech: ["OpenCV", "PyTorch", "ROS", "Python", "RealSense"],
    github: "#",
    demo: "#",
  },
  {
    title: "Multi-Sensor Robot Data Logger",
    category: "Systems · Tooling · Data",
    description:
      "Developed a logging and replay framework for synchronized robot sensor data, making debugging and offline evaluation faster and more reliable.",
    impact: "Reduced debugging time by enabling repeatable playback of robot experiments.",
    tech: ["ROS Bags", "Python", "Docker", "Linux", "Bash"],
    github: "#",
    demo: "#",
  },
];

const experience = [
  {
    role: "Robotics Software Engineer",
    company: "Company / Lab Name",
    period: "2025 — Present",
    bullets: [
      "Developed ROS-based software modules for robot perception, navigation, and system integration.",
      "Integrated sensors including cameras, LiDAR, IMUs, and motor controllers into reliable robotic pipelines.",
      "Improved software maintainability through modular architecture, testing, documentation, and version control.",
    ],
  },
  {
    role: "Robotics / AI Project Developer",
    company: "University / Research / Personal Projects",
    period: "2023 — 2025",
    bullets: [
      "Built simulation-first robotics prototypes using Gazebo, RViz, and ROS tooling.",
      "Implemented algorithms for path planning, perception, control, and autonomous behavior.",
      "Documented project outcomes with clean GitHub repositories, demos, and reproducible setup instructions.",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. / M.Sc. in Robotics, Computer Science, Electrical Engineering, or Related Field",
    school: "Your University Name",
    period: "Year — Year",
    details: "Relevant coursework: Robotics, Control Systems, Computer Vision, Machine Learning, Embedded Systems, Algorithms.",
  },
];

const stats = [
  { label: "Robotics Projects", value: "10+" },
  { label: "Core Languages", value: "C++ / Python" },
  { label: "Focus", value: "ROS 2" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
      {children}
    </span>
  );
}

export default function RoboticsPortfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute left-0 top-1/3 h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <Cpu size={20} />
            </span>
            <span>{profile.name}</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="hover:text-cyan-300" href="#projects">Projects</a>
            <a className="hover:text-cyan-300" href="#skills">Skills</a>
            <a className="hover:text-cyan-300" href="#experience">Experience</a>
            <a className="hover:text-cyan-300" href="#contact">Contact</a>
          </div>
          <a
            href={profile.resume}
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/60 hover:bg-white/5 md:inline-flex"
          >
            Resume
          </a>
        </div>
      </nav>

      <section id="home" className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pt-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-lg shadow-cyan-950/30">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Available for robotics software roles
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            {profile.title} building autonomous robot intelligence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{profile.summary}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/40 transition hover:bg-cyan-200"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/5"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
            <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={profile.github}><Github size={16} /> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={profile.linkedin}><Linkedin size={16} /> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-900 p-6">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Robot System Status</p>
                  <h3 className="text-xl font-bold text-white">Autonomy Stack</h3>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">ONLINE</div>
              </div>

              <div className="space-y-4">
                {[
                  ["Perception", "Camera + LiDAR fusion", "94%"],
                  ["Localization", "SLAM / AMCL pipeline", "88%"],
                  ["Planning", "Global + local planner", "91%"],
                  ["Control", "Velocity command tracking", "86%"],
                ].map(([name, desc, value]) => (
                  <div key={name} className="rounded-2xl bg-white/[0.04] p-4">
                    <div className="mb-2 flex justify-between">
                      <div>
                        <p className="font-semibold text-white">{name}</p>
                        <p className="text-sm text-slate-400">{desc}</p>
                      </div>
                      <span className="text-sm text-cyan-300">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-cyan-300" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <p className="text-lg font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="relative border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technical Expertise"
            title="Robotics software across the full autonomy stack"
            description="A practical toolkit for designing, building, testing, and deploying intelligent robotic systems."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => <Pill key={item}>{item}</Pill>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects that demonstrate robotics engineering depth"
          description="Replace these examples with your own GitHub repositories, demos, papers, or case studies."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="group flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-medium text-cyan-300">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 p-2 text-slate-300 transition group-hover:border-cyan-300/40 group-hover:text-cyan-300">
                  <ChevronRight size={18} />
                </span>
              </div>
              <p className="leading-7 text-slate-300">{project.description}</p>
              <p className="mt-4 rounded-2xl bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-100">
                <strong>Impact:</strong> {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
              <div className="mt-6 flex gap-3 pt-2">
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-cyan-300" href={project.github}>
                  <Github size={16} /> Code
                </a>
                <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-cyan-300" href={project.demo}>
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative border-y border-white/10 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Experience"
            title="Engineering experience with real robotic systems"
            description="Use this section to highlight internships, research work, industry roles, freelance projects, and major academic projects."
          />
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <BriefcaseBusiness size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                    <p className="mt-1 text-slate-300">{job.company}</p>
                  </div>
                  <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <Wrench className="mt-1 shrink-0 text-cyan-300" size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <SectionHeader
          eyebrow="Education"
          title="Academic background"
          description="Add degrees, certifications, coursework, thesis work, awards, and robotics competitions here."
        />
        {education.map((item) => (
          <div key={item.degree} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
            <p className="mt-2 text-slate-300">{item.school} · {item.period}</p>
            <p className="mt-4 leading-7 text-slate-400">{item.details}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="relative px-6 pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300 p-[1px] shadow-2xl shadow-cyan-950/40">
          <div className="rounded-[2rem] bg-slate-950 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Contact</p>
                <h2 className="text-3xl font-black text-white md:text-5xl">Let’s build reliable robots.</h2>
                <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                  I’m open to robotics software engineering roles, research collaborations, and projects involving autonomous systems, ROS 2, perception, navigation, and robotic intelligence.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-200">
                  <Mail size={18} /> Email Me
                </a>
                <a href={profile.resume} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 font-bold text-white hover:border-cyan-300/60 hover:bg-white/5">
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-cyan-300" href={profile.github}><Github size={18} /></a>
            <a className="hover:text-cyan-300" href={profile.linkedin}><Linkedin size={18} /></a>
            <a className="hover:text-cyan-300" href={`mailto:${profile.email}`}><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
