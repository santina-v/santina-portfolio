import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

const skills = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "JavaScript",
  "React",
  "Machine Learning",
  "Data Science",
  "Data Analysis",
  "Deep Learning",
  "Spring Boot",
  "REST API",
  "MySQL",
  "MongoDB",
  "Ollama",
  "Streamlit",
  "Git",
];

const projects = [
  {
    title: "NEXUS AI - Offline Intelligent Desktop Assistant",
    category: "AI Desktop Assistant",
    text: "Built a fully offline AI-powered desktop assistant with conversational AI, desktop automation, document summarization, screenshot/browser control, PDF/TXT analysis, system monitoring, and optional live web-search enhancements.",
    tech: [
      "Python",
      "Ollama",
      "Llama3",
      "Phi3",
      "CustomTkinter",
      "PyAutoGUI",
      "PyMuPDF",
      "BeautifulSoup",
      "Requests",
    ],
  },
  {
    title: "VisionGuard Pro",
    category: "Computer Vision",
    text: "Developed an AI vs real image detection system using EfficientNet-B0 and transfer learning, reaching around 95% accuracy with a Streamlit interface for real-time prediction.",
    tech: [
      "Python",
      "EfficientNet-B0",
      "Transfer Learning",
      "Machine Learning",
      "Streamlit",
      "Image Classification",
    ],
  },
  {
    title: "Backend Framework Application",
    category: "Backend Engineering",
    text: "Built REST APIs using Spring Boot, Java, and MySQL with layered architecture and JWT authentication for secure backend application development.",
    tech: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "JWT Authentication",
      "Layered Architecture",
    ],
  },
  {
    title: "Impact of AI Tools on Students",
    category: "Data Analysis",
    text: "Analyzed the impact of AI tools on students' academic performance using data cleaning, visualization, regression, and statistical research methods.",
    tech: [
      "R",
      "Data Analysis",
      "Data Cleaning",
      "Data Visualization",
      "Regression",
      "Statistics",
    ],
  },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

function speakIntro() {
  const text =
    "Hi, I am Santina V, an aspiring Machine Learning Engineer and Artificial Intelligence and Data Science undergraduate.";

  function speakWithVoice() {
    const voices = window.speechSynthesis.getVoices();

    const preferredVoice =
      voices.find((voice) => voice.name.toLowerCase().includes("zira")) ||
      voices.find((voice) => voice.name.toLowerCase().includes("samantha")) ||
      voices.find((voice) => voice.name.toLowerCase().includes("female")) ||
      voices.find((voice) =>
        voice.name.toLowerCase().includes("google uk english female")
      ) ||
      voices.find((voice) =>
        voice.name.toLowerCase().includes("google us english")
      ) ||
      voices.find((voice) => voice.lang === "en-IN") ||
      voices.find((voice) => voice.lang.startsWith("en"));

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    speech.pitch = 1.25;
    speech.rate = 0.92;
    speech.volume = 1;

    if (preferredVoice) {
      speech.voice = preferredVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }

  const voices = window.speechSynthesis.getVoices();

  if (voices.length === 0) {
    window.speechSynthesis.onvoiceschanged = speakWithVoice;
  } else {
    speakWithVoice();
  }
}

function Layout({ children }) {
  return (
    <main className="min-h-screen bg-[#fbf7f9] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="leading-tight">
            <span className="block text-lg font-black tracking-wide text-slate-950">
              Santina V
            </span>
            <span className="block text-xs font-bold text-rose-600">
              ML Engineer Portfolio
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-rose-50 hover:text-rose-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <section className="page-slide mx-auto max-w-7xl px-5 py-8 md:py-12">
        {children}
      </section>
    </main>
  );
}

function Card({ title, eyebrow, children }) {
  return (
    <div className="rounded-[28px] border border-rose-100 bg-white p-6 shadow-xl shadow-rose-100/70 md:p-9">
      {eyebrow && (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-rose-600">
          {eyebrow}
        </p>
      )}
      <h1 className="mb-5 text-3xl font-black text-slate-950 md:text-5xl">
        {title}
      </h1>
      <div className="text-base leading-8 text-slate-700 md:text-lg">
        {children}
      </div>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <div className="grid min-h-[82vh] overflow-hidden rounded-[34px] border border-rose-100 bg-white shadow-2xl shadow-rose-100/80 md:grid-cols-[1.05fr_0.95fr]">
        <section className="flex flex-col justify-center px-6 py-12 md:px-14">
          <p className="mb-5 w-fit rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-rose-700">
            AI and Data Science
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight text-slate-950 md:text-7xl">
            Santina V
          </h1>

          <p className="mt-4 text-xl font-bold text-rose-700">
            Aspiring Machine Learning Engineer
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            I build AI, data, and backend projects with a focus on practical
            problem-solving, clean user experiences, and reliable engineering.
          </p>

          <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-4">
              <p className="text-2xl font-black text-slate-950">4+</p>
              <p className="text-sm font-bold text-slate-500">Projects</p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-4">
              <p className="text-2xl font-black text-slate-950">8.59</p>
              <p className="text-sm font-bold text-slate-500">CGPA</p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-4">
              <p className="text-2xl font-black text-slate-950">AI</p>
              <p className="text-sm font-bold text-slate-500">Specialization</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-slate-950 px-7 py-3 font-black text-white shadow-lg shadow-slate-200 hover:-translate-y-1 hover:bg-rose-700"
            >
              View Projects
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-rose-200 bg-white px-7 py-3 font-black text-rose-700 hover:-translate-y-1 hover:bg-rose-50"
            >
              About Me
            </Link>

            <button
              onClick={speakIntro}
              className="rounded-full border border-slate-200 bg-white px-7 py-3 font-black text-slate-700 hover:-translate-y-1 hover:text-rose-700"
            >
              Voice Intro
            </button>
          </div>
        </section>

        <section className="relative flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-[#f3edf7] px-6 py-12">
          <div className="absolute right-8 top-8 rounded-full border border-white bg-white/70 px-5 py-2 text-sm font-bold text-slate-600 shadow-sm">
            Coimbatore, India
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[44px] bg-rose-200/40 blur-3xl" />
            <div className="relative rounded-[36px] border border-white bg-white p-4 shadow-2xl">
              <img
                src="/profile.jpeg"
                alt="Santina V profile"
                className="h-80 w-72 rounded-[28px] object-cover md:h-[430px] md:w-[360px]"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-72 -translate-x-1/2 rounded-2xl border border-rose-100 bg-white px-5 py-4 text-center shadow-xl">
              <p className="font-black text-slate-950">AI & DS Undergraduate</p>
              <p className="text-sm font-semibold text-slate-500">
                Machine Learning | Backend | Data
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <Card title="About Me" eyebrow="Profile">
        <p>
          I am Santina V, an Artificial Intelligence and Data Science
          undergraduate at Sri Krishna College of Engineering and Technology,
          Coimbatore. I am passionate about machine learning, data analytics,
          backend development, and building AI-powered solutions for real-world
          problems.
        </p>

        <p className="mt-4">
          I have worked on offline AI assistants, image classification, REST
          APIs, document analysis, automation, and data-driven research. My goal
          is to grow as a Machine Learning Engineer and create useful, scalable,
          and impactful technology.
        </p>
      </Card>
    </Layout>
  );
}

function Education() {
  return (
    <Layout>
      <Card title="Education" eyebrow="Academic background">
        <div className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-6">
          <p className="text-2xl font-black text-slate-950">
            B.Tech - Artificial Intelligence and Data Science
          </p>
          <p className="mt-2 font-semibold text-slate-700">
            Sri Krishna College of Engineering and Technology, Coimbatore
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700">
              2024 - 2028
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-rose-700">
              CGPA: 8.59
            </span>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

function Projects() {
  return (
    <Layout>
      <Card title="Selected Projects" eyebrow="Work">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100"
            >
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-rose-600">
                {project.category}
              </p>
              <h2 className="text-2xl font-black text-slate-950">
                {project.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {project.text}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-rose-100 bg-white px-3 py-1 text-sm font-bold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Card>
    </Layout>
  );
}

function Skills() {
  return (
    <Layout>
      <Card title="Skills" eyebrow="Technical toolkit">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-rose-100 bg-[#fbf7f9] px-5 py-4 font-black text-slate-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </Layout>
  );
}

function Contact() {
  return (
    <Layout>
      <Card title="Contact" eyebrow="Get in touch">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:santina212006@gmail.com"
            className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-5 font-bold text-slate-800 hover:border-rose-200 hover:text-rose-700"
          >
            santina212006@gmail.com
          </a>
          <a
            href="tel:+919629097100"
            className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-5 font-bold text-slate-800 hover:border-rose-200 hover:text-rose-700"
          >
            +91 9629097100
          </a>
          <a
            href="https://github.com/santina-v"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-5 font-bold text-slate-800 hover:border-rose-200 hover:text-rose-700"
          >
            github.com/santina-v
          </a>
          <p className="rounded-2xl border border-rose-100 bg-[#fbf7f9] p-5 font-bold text-slate-800">
            Coimbatore, India
          </p>
        </div>
      </Card>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
