import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <div className="timeline-intro fade-in">
          <h1>
            Projects i've built and explored.
          </h1>
          <p>{projects.length} projects</p>
        </div>
        <Timeline projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
