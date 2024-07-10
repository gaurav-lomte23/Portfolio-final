import React from "react";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/vibber.png";
import styles from "./Projects.module.css";
import yoga_int from "../../assets/yoga_int.png";
import fridge from "../../assets/fridge.jpeg";

function Projects() {
    return(
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
             <div>  
                   <ProjectCard 
                src={viberr}
                link="https://viberr.herokuapp.com/"
                h3="viberr"
                p="social media platform"
                /></div>
                 <div>
                <ProjectCard
                src={yoga_int}
                link="https://gaurav-lomte23.github.io/Yoga_website_internship/"
                h3="Yoga website"
                p="yoga program"
                /></div>
                  <div><ProjectCard
                src={fridge}
                link="https://gaurav-lomte23.github.io/refregerator_shop/"
                h3="Refregerator shop"
                p="Referagerator basic page"
                /></div>
            </div>

        </section>
    );
}

export default Projects;