import { useRef } from "react";

import { type SectionTypes } from "../types/types";

const NUM_SECTIONS = 5;

const sections: SectionTypes[] = [
  {
    id: 0,
    className: "page-section even-section",
    title: "main",
    component: null,
  },
  {
    id: 0,
    className: "page-section even-section",
    title: "main",
    component: null,
  },
  {
    id: 0,
    className: "page-section even-section",
    title: "main",
    component: null,
  },
];

const Sections = () => {
  const sectionRefs = useRef<HTMLElement[]>([]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {[...Array(NUM_SECTIONS)].map((_, i) => (
        <section
          key={i}
          ref={el => {
            if (el) sectionRefs.current[i] = el;
          }}
          className={`page-section ${
            i % 2 === 0 ? "even-section" : "odd-section"
          }`}
        >
          {i === 0 ? (
            <div className="page-container">
              <div className="main-body">
                <header className="main-header">
                  {[...Array(NUM_SECTIONS)].map((_, j) => (
                    <button
                      key={j}
                      onClick={() => scrollToSection(j)}
                      className="header-btn"
                    >
                      Go to Section {j + 1}
                    </button>
                  ))}
                </header>
                <div className="main-front">
                  <div className="hero text"></div>
                  <div className="hero portrait"></div>
                </div>
              </div>
            </div>
          ) : (
            <p>Section {i + 1}</p>
          )}
        </section>
      ))}
    </>
  );
};

export default Sections;
