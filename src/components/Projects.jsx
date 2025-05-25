// Projects.jsx - Portfolio projects showcase
import { useState } from 'react';
import ProjectCard from './UI/ProjectCard';

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "AI Mental Health Support Platform-CareBot",
      description: "A conversational AI assistant built with HTML/CSS/JAVASCRIPT and TextBlob (Hugging Face Transformers) for natural language processing.",
      image: "/images/doc.jpg",
      technologies: ["HTML", "CSS", "DialoGPT", "Flask","TextBlob"],
      
      githubLink: "https://github.com/merryyxxx/CareBot",
      category: "AI"
    },
    {
      id: 2,
      title: "A tech consulting website- TechConsult Pro",
      description: "A full-featured website designed for a digital consulting agency",
      image: "/images/site.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      
      githubLink: "https://github.com/merryyxxx/ConsultantSite",
      category: "Web Design"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio site featuring modern design principles and smooth animations.",
      image: "/images/port.png",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      
      githubLink: "https://github.com/yourusername/project",
      category: "Web Design"
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description: "A productivity app to manage tasks, track progress, and collaborate with team members.",
      image: "/images/task.png",
      technologies: ["Flask", "HTML", "CSS","JavaScript"],
      
      githubLink: "https://github.com/merryyxxx/taskmanager",
      category: "Web App"
    },
    {
      id: 5,
      title: "AI Code Grader- AUTOGRADERX",
      description: "An interactive tool to grade and improve our code.",
      image: "/images/grade.jpg",
      technologies: ["Python", "Flask", "SQlite3", "HTML/CSS/JAVA"],
      
      githubLink: "https://github.com/merryyxxx/AutoGraderX-Backend",
      category: "AI"
    },
    
  ];

  const categories = ["All", ...new Set(allProjects.map(project => project.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Show More Projects Button (Optional) */}
        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/merryyxxx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 rounded-md transition-colors"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
