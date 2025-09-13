import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
        </div>
        <div className="p-4 border-t">
            <Link href={project.link} className="text-blue-500 hover:underline">View Project</Link>
        </div>
    </div>
    );
}