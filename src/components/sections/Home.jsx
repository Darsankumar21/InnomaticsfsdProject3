import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-400 leading-right">
            Hi, I'm Surya Darsan Kumar         </h1>

          <p className="text-gray-700 text-lg mb-8 max-w-lg mx-auto">
          "I am a passionate developer with a strong focus on building scalable and optimized web applications. My goal is to create efficient, high-performance solutions that deliver a seamless user experience while adhering to best practices in development."
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(251, 146, 60, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-400 text-orange-400 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(251, 146, 60, 0.2)] hover:bg-orange-50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};