import { faAtlas, faBolt, faComment, faTerminal, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "components/ProjectCard";

interface Project {
    icon: IconDefinition;
    link: string;
    name: string;
    pitch: string;
}

const projects: Project[] = [
    {
        icon: faAtlas,
        link: "https://github.com/CNITV/VianuEdu",
        name: "VianuEdu",
        pitch: "An educational software designed to conduct tests and lessons using Java and Go as programming languages for my school. This is the project that taught me code collaboration with fellow coders, as well as following strict coding practices.",
    },
    {
        icon: faTerminal,
        link: "https://github.com/StormFireFox1/Probleme-Info-11G",
        name: "Probleme-Info-11G",
        pitch: "This ongoing collaboration with fellow colleagues in my class is a repository of all of the computer science exercises that my class has solved over the past two years on various Romanian coding websites, along with comments and explanations. Currently actively maintained by 2 people."
    },
    {
        icon: faComment,
        link: "https://github.com/StormFireFox1/BubbleChat",
        name: "BubbleChat",
        pitch: "A website designed to use a match-making algorithm to pair people anonymously in a single chat room and allow for them to \"grow\" or \"stay\", much like project Robin of Reddit. Made during the Stanford Pre-Collegiate Summer Institutes of 2018, it won best backend and second best overall."
    },
    {
        icon: faBolt,
        link: "/SignalEnvelopeDetectorSoundLatchSwitch.svg",
        name: "The Clapper",
        pitch: "An electronic circuit designed to act as a latch switch and to switch state whenever it hears a clap near its microphone. Uses simple 3-transistor latch switch and alternative currents.",
    },
];

const ProjectCardGallery = () => (
    <div className="flex flex-row flex-wrap gap-y-8">
        {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} icon={project.icon} link={project.link} name={project.name} pitch={project.pitch} />
        ))}
    </div>
);

export default ProjectCardGallery;