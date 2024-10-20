import React from 'react';

const projectManagementSteps = [
  {
    id: 1,
    title: "Step 1: Project Planning",
    content: "Define project goals, scope, deliverables, and timeline. Conduct stakeholder meetings to gather requirements.",
  },
  {
    id: 2,
    title: "Step 2: Team Setup",
    content: "Assemble the project team based on required skills and expertise. Assign roles and responsibilities.",
  },
  {
    id: 3,
    title: "Step 3: Development",
    content: "Start the development phase, following Agile methodologies for iterative progress. Regularly update stakeholders.",
  },
  {
    id: 4,
    title: "Step 4: Testing",
    content: "Conduct testing phases to identify bugs and ensure quality. Gather feedback from users to make necessary adjustments.",
  },
  {
    id: 5,
    title: "Step 5: Project Review",
    content: "Review project outcomes against goals. Gather insights and feedback from team members and stakeholders.",
  },
  {
    id: 6,
    title: "Step 6: Project Closure",
    content: "Finalize documentation, release the final product, and hold a closure meeting. Discuss lessons learned for future projects.",
  },
];

const FancyLog = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Project Management Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectManagementSteps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FancyLog;
