import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Analysis - Visualization",
      description:
        "Interactive dashboard for data visualization, facilitating informed decision-making. Cleaned data, drew insights, and represented them using Power BI with charts and slicers.",
      technologies: ["Power BI"],
      link: "#",
    },
    {
      title: "House Price Prediction",
      description:
        "Data preprocessing, feature selection, and model training to predict house prices. Contributed insights for real estate pricing strategies based on key parameters.",
      technologies: ["Python", "Regression Models"],
      link: "#",
    },
    {
      title: "Task Manager Web Application",
      description:
        "MERN stack task management solution inspired by To-Do lists, incorporating reminders, notifications, and a visually appealing design using Material-UI.",
      technologies: ["MERN Stack", "Material-UI"],
      link: "#",
    },
    {
      title: "Payment Application",
      description:
        "MERN stack payment application with secure user authentication (Zod validation), streamlined project management via middleware, and user-centric features like sign-in, sign-up, and transaction handling.",
      technologies: ["MERN Stack", "Zod", "Fetch/Axios"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-orange-400 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md bg-white border border-gray-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_2px_8px_rgba(251,146,60,0.1)] transition"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-100 text-orange-600 py-1 px-3 rounded-full text-sm hover:bg-orange-200
                                    hover:shadow-[0_2px_8px_rgba(251,146,60,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-teal-600 hover:text-teal-400 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};