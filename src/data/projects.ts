export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "Joyería Galiana",
    description: "Tienda web e-commerce desarrollada con Astro",
    url: "https://galiana.victoriafp.online",
    image: "/images/galiana-preview.webp",
  },
  {
    name: "Report Sanlucar",
    description: "Aplicación para reportar incidencias de la ciudad",
    url: "https://reportsanlucar.vercel.app",
    image: "/images/reportsanlucar-preview.webp",
  },
];
