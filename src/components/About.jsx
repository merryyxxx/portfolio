// About.jsx - About section with skills
export default function About() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'AI & ML', level: 70 },
    { name: 'UI/UX Design', level: 65 },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer and AI enthusiast with a strong background in building web applications and exploring cutting-edge technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
               I've worked on various projects ranging from small business websites to complex enterprise applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm always eager to learn new technologies and techniques to improve my skills and deliver better solutions to clients and users.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Artificial Intelligence', 'UI/UX Design', 'Open Source', 'Digital Marketing'].map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-3">Education</h4>
              <div className="mb-4">
                <h5 className="font-medium">Bachelor's Degree in Information Technology</h5>
                <p className="text-gray-600 dark:text-gray-400">Texas College of Management and IT • 2024 - date</p>
              </div>
              <div>
                <h5 className="font-medium">Relevant Certifications</h5>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Full-Stack Web Development</li>
                  <li>3-month Python Course</li>
                  <li>UI/UX Design Fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}