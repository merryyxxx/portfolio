// ProjectCard.jsx - Reusable component for projects
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img 
        src={project.image || "/api/placeholder/400/250"} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 rounded text-sm transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}