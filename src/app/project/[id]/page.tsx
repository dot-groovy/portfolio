import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectMediaCarousel from "@/components/ProjectMediaCarousel";
import { getProjectById, getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";

// Necessário para build estático (GitHub Pages).
export function generateStaticParams() {
  return getProjects().map((project) => ({ id: project.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const date = new Date(project.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const hasCarousel =
    (project.images?.length ?? 0) > 0 ||
    (project.videos?.length ?? 0) > 0 ||
    Boolean(project.video);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content project-detail fade-in">
        <Link href="/" className="project-detail-back">
          &larr; back
        </Link>

        <h1>{project.title}</h1>

        <div className="project-detail-meta">
          <span>{date}</span>
          <span>{project.tags.join(" / ")}</span>
        </div>

        {!hasCarousel && project.image && (
          <div className="project-detail-image">
            <Image
              src={project.image}
              alt={project.title}
              width={720}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}

        <p className="project-detail-description">{project.description}</p>

        <div className="project-detail-links">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Source code
            </a>
          )}
        </div>

        {hasCarousel && (
          <ProjectMediaCarousel
            basePath={basePath}
            title={project.title}
            images={project.images}
            video={project.video}
            videos={project.videos}
            mediaZoom={project.mediaZoom}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
