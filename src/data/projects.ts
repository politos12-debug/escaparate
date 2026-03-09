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
  // Añade más proyectos aquí:
  // {
  //   name: "Mi Siguiente Proyecto",
  //   description: "Descripción del proyecto",
  //   url: "https://example.com",
  //   image: "/images/mi-proyecto.webp",
  // },
];
