// Resume.jsx - Resume/CV section
import { useState } from 'react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');
  
  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' }
  ];
  
  // Resume data - replace with your actual information
  const resumeData = {
    experience: [
      {
        id: 1,
        role: "Project Manager",
        company: "WI Education Consultancy Pvt. Ltd.",
        duration: "2024 - Present",
        location: "Putalisadak, Kathmandu",
        description: [
          "Managed the company's website and helped in the SEO.",
          "Improved website performance by 40% through code optimization and implementing best practices.",
          ,
          
        ]
      },
      {
        id: 2,
        role: "Web Developer",
        company: "WI Educatiol Global",
        duration: "2025",
        location: "Remote",
        description: [
          "Developed and maintained client websites using JavaScript, HTML, and CSS.",
          "Implemented responsive designs and ensured mobile-first approach.",
          
          "Worked directly with clients to gather requirements and provide technical solutions."
        ]
      },
      
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor's in Information Technology",
        institution: "Texas College of Management and IT",
        duration: "2024-Present",
        location: "Siphal,Chabahil",
        description: "Participated in College based Hackathon and developed a full stack project, CareBot"
      },
      
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["JavaScript", "Python", "HTML5", "CSS3", "SQL"]
      },
      {
        category: "Frameworks & Libraries",
        items: ["React", "Node.js", "TailwindCSS", "Bootstrap"]
      },
      {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "VS Code"]
      },
      {
        category: "Design & Other",
        items: ["Figma", "Adobe XD", "Responsive Design", "RESTful APIs"]
      }
    ],
    certificates: [
      {
        id: 1,
        name: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2022"
      },
      {
        id: 2,
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2021"
      },
      {
        id: 3,
        name: "React Advanced Concepts",
        issuer: "Frontend Masters",
        date: "2020"
      },
      {
        id: 4,
        name: "Python for Data Science and Machine Learning",
        issuer: "Coursera",
        date: "2019"
      }
    ]
  };

  return (
    <section id="resume" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Resume</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          My professional journey, skills, and qualifications. Download my full resume for more details.
        </p>
        
        {/* Download Resume Button */}
        <div className="flex justify-center mb-12">
          <a 
            href="/pdf/merry.CV.pdf" 
            target="_blank"
            className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-md"
            download
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download CV
          </a>
        </div>
        
        {/* Resume Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-md transition-colors ${
                activeTab === tab.id 
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
              
              {resumeData.experience.map((job, index) => (
                <div key={job.id} className={`${index !== resumeData.experience.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 pb-8' : ''}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-lg font-medium">{job.role}</h4>
                    <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
                      {job.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <span>{job.company}</span>
                    <span className="mx-2">•</span>
                    <span>{job.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              
              {resumeData.education.map((edu, index) => (
                <div key={edu.id} className={`${index !== resumeData.education.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 pb-8' : ''}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resumeData.skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-lg mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.certificates.map(cert => (
                  <div key={cert.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-lg">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span>{cert.date}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">Credential: {cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}