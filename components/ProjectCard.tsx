import Link from 'next/link';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
    icon: IconDefinition;
    link: string;
    name: string;
    pitch: string;
}

const ProjectCard = (props) => {
    const { icon, link, name, pitch } = props;
    return (
        <div className="bg-gray-10 w-96 max-w-full shadow-lg rounded-md m-auto p-4">
            <Link href={link}>
            <a className="font-bold text-blue-500"><h2><FontAwesomeIcon icon={icon} className="mr-2"/>{name}</h2></a>
            </Link>
            <p>{pitch}</p>
        </div>
    )
};

export default ProjectCard;