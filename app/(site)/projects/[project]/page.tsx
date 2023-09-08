import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'

type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {

    const slug = params.project;

    const project = await getProject(slug);

    return (
    <div>
        <header className="flex items-center justify-between">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-green-700 to-slate-500 bg-clip-text text-transparent">
                {project.name}
            </h1>
            <a
                href={project.url}
                title="View Project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 rounded-lg text-gray-700 py-3 px-4 font-bold whitespace-nowrap hover:bg-blue-200 hover:text-blue-900 transition-all"
            >
                View Project
            </a>
        </header>
        {/* Content */}
        <div className="text-lg text-gray-700 mt-5">
            <PortableText value={project.content} />
        </div>

        <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
    </div>
    );
}