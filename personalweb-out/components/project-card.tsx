import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  githubUrl: string
  isEven?: boolean
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  githubUrl,
  isEven = false,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border border-white/40`}
    >
      <div className={`flex-1 ${isEven ? "md:pl-8 text-right" : "md:pr-8 text-left"} mb-6 md:mb-0`}>
        <h3 className="text-2xl font-bold mt-0 mb-4 text-cyan-800">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className={`${isEven ? "text-right" : "text-left"}`}>
          <Link
            href={githubUrl}
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-md hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View on GitHub
          </Link>
        </div>
      </div>
      <div className="md:w-[300px] order-last md:order-last">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-contain transition-all duration-300 hover:scale-105 hover:brightness-90"
          />
        </div>
      </div>
    </div>
  )
}

