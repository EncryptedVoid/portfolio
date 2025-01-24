import React from 'react';
import { motion } from 'framer-motion';
import MobileExperienceCard from './components/MobileExperienceCard';
import MobileCaseStudyModal from './components/MobileCaseStudyModal';
import { ExperienceData } from '../../../data/ExperienceData';

const MobileExperience = () => {
  const [activeId, setActiveId] = React.useState(null);
  const [caseStudyData, setCaseStudyData] = React.useState(null);

  const handleCaseStudyOpen = (experience) => {
    setCaseStudyData(experience);
    // Close expanded card when opening case study
    setActiveId(null);
  };

  const handleCaseStudyClose = () => {
    setCaseStudyData(null);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Fixed Header */}
      <div className="sticky top-0 z-20 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="px-4 py-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent text-center"
          >
            Professional Experience
          </motion.h1>
        </div>
      </div>

      {/* Cards Container */}
      <div className="px-4 py-6 space-y-4">
        {ExperienceData.map((experience, index) => (
          <MobileExperienceCard
            key={experience.id}
            experience={experience}
            isActive={activeId === experience.id}
            onClick={() => setActiveId(activeId === experience.id ? null : experience.id)}
            onCaseStudyClick={() => handleCaseStudyOpen(experience)}
            index={index}
          />
        ))}
      </div>

      {/* Modal */}
      <MobileCaseStudyModal
        isOpen={!!caseStudyData}
        onClose={handleCaseStudyClose}
        experience={caseStudyData}
      />
    </div>
  );
};

export default MobileExperience;