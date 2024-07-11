import React, { useState } from "react";
import styles from "./ProjectsSection.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.categories}>
        {categories.map(category => (
          <button 
            key={category}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};