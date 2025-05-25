// Hero.jsx - Hero section with introduction
export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Merry Subedi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            AI Enthusiast & Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            I build innovative web applications and explore AI solutions. Let's create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-md">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 rounded-md transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
            {/* Replace with your actual photo */}
            <img 
              src="/images/merry.png" 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}