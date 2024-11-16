import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../constants/index'
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get the projectId from the URL
  const navigate = useNavigate(); // To handle navigation
  const project = projects.find((project) => project.id === parseInt(projectId));

  if (!project) return <div className="text-center p-4">Project not found</div>; // Handle the case where the project is not found

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
      <div className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col lg:flex-row-reverse">
        {/* Full Height Image Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </div>

        {/* Back Arrow Button */}
        <div
          className="absolute sm:left-4 top-0 z-10 p-2 bg-white dark:bg-gray-800 rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon className="text-gray-900 dark:text-white text-xl" />
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex flex-col justify-start w-full lg:w-1/2 space-y-4 lg:space-y-6 bg-white dark:bg-gray-900 overflow-y-auto">
          <h1 className="text-xl lg:text-2xl mt-3 font-extrabold text-gray-900 dark:text-white leading-tight">{project.title}</h1>
          <p className="text-base lg:text-lg font-semibold text-blue-600 dark:text-blue-400">{project.description}</p>
          <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
            {project.LongDescription}
          </p>

          {/* Additional Information Section */}
          <div className="text-gray-600 dark:text-gray-400 space-y-2 lg:space-y-4">
            <h2 className="text-lg lg:text-xl font-semibold">Technologies Used</h2>
            <ul className="list-disc pl-5 text-sm lg:text-base">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Call to Action / Button */}
          <div className="mt-4 lg:mt-6">
            <Link to={project.githubLink} target='_blank'>
              <button className="w-full lg:w-auto px-6 py-2 lg:px-8 lg:py-3 text-sm lg:text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                CHECK OUT ON GITHUB
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;