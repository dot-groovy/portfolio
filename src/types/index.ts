// Campos de media: videos[] (ordem do carrossel), depois images[].
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  url?: string;
  github?: string;
  image?: string;
  images?: string[];
  video?: string;
  videos?: string[];
  mediaZoom?: "mobile";
}
