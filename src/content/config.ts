import { defineCollection, z } from "astro:content";

const habitaciones = defineCollection({
  schema: z.object({
    title: z.string(),         // Título de la habitación (obligatorio)
    description: z.string(),   // Descripción corta
    amenities: z.array(z.string()),   // Servicios (ej: ["WiFi", "TV"])
    images: z.string(),
  }),
});

export const collections = { habitaciones };