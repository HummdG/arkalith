import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "CAD GPT",
      description:
        "AI-driven application automating CAD tasks through agentic workflows.",
      tech: ["LLM", "Python", "C#", "React", "AWS"],
      image: "/projects/revit-fusion.png",
    },
    {
      title: "Embodied Carbon Assessment Tool",
      description: "Carbon footprint analysis embedded in CAD workflows.",
      tech: ["C#", "React", "PostgreSQL"],
      image: "/projects/ecat.png",
    },
    {
      title: "LitBot",
      description:
        "LLM Chatbot to summarize, organize and scrape research papers",
      tech: ["LLM", "Python", "React", "AWS"],
      image: "/projects/litbot.png",
    },
  ];

  const team = [
    {
      name: "Hummd Ghouri",
      role: "CEO & Founder",
      bio: "AI Engineer & Visionary, Imperial College London graduate, published researcher",
      image: "/team/hummd.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden select-none">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 text-black"
                fill="currentColor"
              >
                <path d="M12 2L1 21h22L12 2z M12 6l7.5 13H4.5L12 6z M9 14h6v2H9v-2z M10 17h4v2h-4v-2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Arkalith</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              🧠 Your AI Therapists
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Intelligence</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Meets Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We harness the power of artificial intelligence and cutting-edge
            technology to solve complex problems and drive digital
            transformation across industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
              <span className="relative z-10">Start Your Project</span>
            </button>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-white/50 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how we&apos;ve transformed businesses with cutting-edge
              AI solutions and innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <div key={index} className="group relative w-full max-w-sm">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 text-xs rounded-full border ${
                              techIndex % 2 === 0
                                ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                                : "bg-teal-600/20 text-teal-300 border-teal-500/30"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <button className="text-white hover:text-purple-400 font-semibold transition-colors duration-300 flex items-center gap-2 mt-auto">
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leveraging advanced AI and modern technology stack to deliver
              solutions that drive real business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🧠",
                title: "Artificial Intelligence",
                description:
                  "Custom AI solutions including machine learning, natural language processing, LLM and computer vision.",
                accent: "purple",
              },
              {
                icon: "⚙️",
                title: "Process Automation",
                description:
                  "Streamline operations with intelligent automation that reduces costs and improves efficiency.",
                accent: "teal",
              },
              {
                icon: "📱",
                title: "Mobile & Web Apps",
                description:
                  "Full-stack development with modern frameworks and cloud-native architecture.",
                accent: "purple",
              },
              {
                icon: "📊",
                title: "Data Intelligence",
                description:
                  "Transform raw data into actionable insights with advanced analytics and visualization.",
                accent: "teal",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 ${
                    feature.accent === "purple"
                      ? "bg-purple-500/10"
                      : "bg-teal-500/10"
                  }`}
                ></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
                  <div
                    className={`text-4xl mb-4 p-3 rounded-lg w-fit ${
                      feature.accent === "purple"
                        ? "bg-purple-600/20"
                        : "bg-teal-600/20"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              World-class experts in AI, technology, and innovation working
              together to build the future.
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <div key={index} className="group relative max-w-sm">
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 relative overflow-hidden p-1">
                    <div className="w-full h-full bg-black rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent text-center mb-3 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-center text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <a
                      href="https://www.linkedin.com/in/hummdghouri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/HummdG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl"></div>
            <div className="relative p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our AI-powered solutions can accelerate
                your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white/50 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                >
                  <path d="M12 2L1 21h22L12 2z M12 6l7.5 13H4.5L12 6z M9 14h6v2H9v-2z M10 17h4v2h-4v-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Arkalith</span>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>
              &copy; 2024 Arkalith. All rights reserved. Powering the future
              with intelligent technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
