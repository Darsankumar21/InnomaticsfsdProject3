import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "JavaScript",
    "TailwindCSS",
    "HTML"
  ];

  const backendSkills = ["Node.js", "Python", "SQL", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-orange-400 text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 shadow-md bg-white border border-gray-200 hover:-translate-y-1 transition-all">
            <p className="text-gray-800 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 shadow-sm bg-stone-50 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-100 text-orange-600 py-1 px-3 rounded-full text-sm hover:bg-orange-200
                                    hover:shadow-[0_2px_8px_rgba(251,146,60,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 shadow-sm bg-stone-50 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-100 text-orange-600 py-1 px-3 rounded-full text-sm hover:bg-orange-200
                                    hover:shadow-[0_2px_8px_rgba(251,146,60,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl shadow-md bg-white border border-gray-200 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                🎓 Education
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong> Bachelor of Technology in Computer Science</strong> -
                  SRM University (Oct 2020 – June 2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Data Science,Software Engineering
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl shadow-md bg-white border border-gray-200 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                🏢 Work Experience
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Salesforce Developer Catalyst (Smart Internz)
                  </h4>
                  <p>Developed customized solutions within Salesforce.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">ML Intern (YBI)</h4>
                  <p>Implemented basic machine learning concepts.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    Full Stack Developer Intern (Innobyte Services)
                  </h4>
                  <p>Developed a MERN stack news blogging web application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};