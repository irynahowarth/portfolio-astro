import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object(
    {
      title: z.string(), 
      description: z.string().optional(),
      pubDate:  z.coerce.date(),
      shortDesc: z.string().optional(),
      img:z.object({
          src: z.string(),
          alt: z.string()
        }).optional(),
    }
  )
});


export const collections = {
  projects: projectsCollection,
};