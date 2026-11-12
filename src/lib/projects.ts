import fs from "fs";
import path from "path";
import { Project } from "@/types";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

// Devolve projetos na ordem definida em projects.json.
export function getProjects(): Project[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find((p) => p.id === id);
}

export function groupByYear(projects: Project[]): Record<string, Project[]> {
  return projects.reduce(
    (acc, project) => {
      const year = new Date(project.date).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    },
    {} as Record<string, Project[]>
  );
}
