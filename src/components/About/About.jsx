import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faBrain, faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const icons = {
    fullStack: getImageUrl("about/serverIcon.png"),
    cloud: faCloud,
    ai: faBrain,
    data: faDatabase
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + " ..." : text;
  };

  const items = [
    {
      title: "Full-Stack Developer",
      icon: icons.fullStack,
      description: "As an ambitious computer science master’s student, I have honed my skills in both frontend and backend development. My expertise includes building scalable and efficient web applications using technologies like React, Node.js, Python, and Java. I am adept at creating seamless user experiences and integrating robust backend systems."
    },
    {
      title: "Cloud Computing Enthusiast",
      icon: icons.cloud,
      description: "With a strong proficiency in cloud platforms such as AWS, I excel in deploying and managing cloud infrastructure. My coursework in Cloud Computing and Big Data has equipped me with the knowledge to handle large-scale data processing and storage solutions, ensuring high availability and scalability."
    },
    {
      title: "AI and Machine Learning Specialist",
      icon: icons.ai,
      description: "I have a deep understanding of machine learning and AI principles, demonstrated through projects such as developing variational autoencoders and driver drowsiness detection systems. My experience includes implementing complex algorithms and leveraging tools like TensorFlow and PyTorch to build intelligent systems."
    },
    {
      title: "Data Science Expert",
      icon: icons.data,
      description: "My background in data science is complemented by extensive experience in Python, NumPy, Pandas, and Scikit-learn. I have successfully developed data-driven solutions, focusing on data mining, bioinformatics, and predictive analytics to derive actionable insights and support decision-making processes."
    }
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {items.map((item, index) => (
            <li
              key={index}
              className={styles.aboutItem}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {index === 0 ? (
                <img src={item.icon} alt="Full Stack Development icon" className={styles.iconImage} />
              ) : (
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
              )}
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p className={hoveredItem === index ? styles.expanded : styles.collapsed}>
                  {hoveredItem === index ? item.description : truncateText(item.description, 10)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
