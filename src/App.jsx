import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const skills = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "Machine Learning",
  "Data Science",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "JavaScript",
];

const projects = [
  {
    title: "VisionGuard Pro",
    text: "AI vs Real Image Detection System using EfficientNet-B0, transfer learning, Streamlit, GitHub, and Streamlit Cloud.",
  },
  {
    title: "Backend Framework Application",
    text: "REST APIs using Spring Boot, Java, MySQL, layered architecture, and JWT authentication.",
  },
  {
    title: "Impact of AI Tools on Students",
    text: "Data analysis using R: cleaning, visualization, regression, and academic performance insights.",
  },
    {
    title: "NEXUS AI — Offline Intelligent Desktop Assistant",
    text: "Built a fully offline AI-powered desktop assistant using Python, Ollama, and CustomTkinter. It includes conversational AI, desktop automation, document summarization, screenshots/browser control, PDF/TXT analysis, real-time system monitoring, and live web-search enhancements.",
  },
];

function speakIntro() {
  const speech = new SpeechSynthesisUtterance(
    "Hi, I am Santina V, an aspiring Machine Learning Engineer and AI Data Science undergraduate."
  );
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
}

function Layout({ children }) {
  return (
    <main className="min-h-screen bg-[#fff7fb] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-2xl font-black text-pink-700">
            Santina V
          </Link>

          <div className="flex gap-4 text-sm font-bold md:text-base">
            <Link className="hover:text-pink-700" to="/about">About</Link>
            <Link className="hover:text-pink-700" to="/education">Education</Link>
            <Link className="hover:text-pink-700" to="/projects">Projects</Link>
            <Link className="hover:text-pink-700" to="/skills">Skills</Link>
            <Link className="hover:text-pink-700" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="page-slide mx-auto max-w-7xl px-5 py-10">
        {children}
      </section>
    </main>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-8 shadow-xl shadow-pink-100">
      <h2 className="mb-4 text-3xl font-black text-pink-700">{title}</h2>
      <div className="text-lg leading-8 text-slate-700">{children}</div>
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <div className="relative min-h-[82vh] overflow-hidden rounded-[36px] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6 py-12 shadow-2xl shadow-pink-100 md:px-14 md:py-16">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-bl-full bg-pink-100"></div>
        <div className="absolute bottom-0 left-0 h-52 w-52 rounded-tr-full bg-purple-100"></div>

        <div className="relative grid min-h-[70vh] items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-black text-pink-700 shadow-sm">
              Aspiring Machine Learning Engineer
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-tight text-slate-950 md:text-7xl">
              I'm{" "}
              <span className="bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
                Santina V
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              AI and Data Science undergraduate building professional,
              meaningful, and elegant AI-powered solutions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Python", "Machine Learning", "Spring Boot", "Data Science"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-pink-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-pink-700 px-7 py-3 font-black text-white shadow-lg shadow-pink-200 hover:bg-pink-800"
              >
                View Projects
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-pink-300 bg-white px-7 py-3 font-black text-pink-700 hover:bg-pink-50"
              >
                About Me
              </Link>

              <button
                onClick={speakIntro}
                className="rounded-full border border-slate-200 bg-white px-7 py-3 font-black text-slate-700 hover:text-pink-700"
              >
                Voice Intro
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-pink-200 blur-3xl opacity-60"></div>

              <div className="relative rounded-[40px] border border-pink-100 bg-white p-5 shadow-2xl shadow-pink-100">
                <img
                  src="/profile.jpeg"
                  alt="Santina V profile"
                  className="h-72 w-72 rounded-[32px] object-cover md:h-96 md:w-96"
                />

                <div className="absolute -bottom-6 left-1/2 w-72 -translate-x-1/2 rounded-2xl border border-pink-100 bg-white px-6 py-4 text-center shadow-xl">
                  <p className="font-black text-pink-700">AI & DS Student</p>
                  <p className="text-sm font-semibold text-slate-500">
                    CGPA 8.59 | Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <Card title="About Me">
        I am an AI and Data Science undergraduate passionate about building
        AI-driven solutions and applying data science techniques to real-world
        problems.
      </Card>
    </Layout>
  );
}

function Education() {
  return (
    <Layout>
      <Card title="Education">
        <p>B.Tech - Artificial Intelligence and Data Science</p>
        <p>Sri Krishna College of Engineering and Technology, Coimbatore</p>
        <p>2024 - 2028</p>
        <p>CGPA: 8.59</p>
      </Card>
    </Layout>
  );
}

function Projects() {
  return (
    <Layout>
      <Card title="Projects">
        <div className="grid gap-5">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-black">{project.title}</h3>
              <p className="mt-2">{project.text}</p>
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
      <Card title="Skills">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-pink-100 bg-white px-4 py-2 font-bold text-pink-700 shadow-sm">
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
      <Card title="Contact">
        <p>Email: santina212006@gmail.com</p>
        <p>Phone: +91 9629097100</p>
        <p>GitHub: github.com/santina-v</p>
        <p>Location: Coimbatore</p>
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