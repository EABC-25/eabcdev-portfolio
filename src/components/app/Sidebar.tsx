import { useState } from "react";
import clsx from "clsx";

import resume from "../../assets/resume/eabcdev_2025.pdf";
import {
  FaLinkedin,
  FaGithub,
  FaChevronRight,
  FaChevronLeft,
  FaDownload,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "eabcdev_2025.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={clsx("page-sidebar", {
        active: sidebarActive,
      })}
    >
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/emmanuel-alfonso-ciencia-1597251b1"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="sidebar-logo">
          <a target="_blank" href="https://github.com/EABC-25">
            <FaGithub />
          </a>
        </div>
        <div className="sidebar-logo">
          <button
            type="button"
            onClick={() => {
              if (confirm("Would you like to download my resume?")) {
                handleDownload();
              }
            }}
          >
            <FaDownload />
          </button>
        </div>
      </div>
      <button
        type="button"
        className="sidebar-button"
        onClick={() => {
          setSidebarActive(!sidebarActive);
        }}
      >
        {sidebarActive ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export default Sidebar;
