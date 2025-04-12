/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import VideoModal from "./VideoModal";

const ModalCtrl = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Render your content that opens the modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleClose}
        project={selectedProject}
      />
      {/* Assuming you have a component that opens the modal */}
    </>
  );
};

export default ModalCtrl;
