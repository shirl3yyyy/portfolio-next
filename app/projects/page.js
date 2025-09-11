import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Project One", description: "My first project", image: "/project1.jpg", link: "#"},
    {title: "Project Two", description: "My second project", image: "/project2.jpg", link: "#"},
  ];

export default function Projects() {
    return(
        <section className="container mx-auto p-4">
            {projects.map ((project) => <ProjectCard/>)}
        </section>
    );
}