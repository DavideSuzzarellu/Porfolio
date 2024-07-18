import { z, defineCollection } from 'astro:content';

//*PROJECTS
const technologySchema = z.object({
    name: z.string(),
    descriptionTec: z.string(),
});

const projectSchema = z.object({
    projectName: z.string(),
    img: z.string(),
    description: z.string(),
    technologies: z.array(technologySchema),
});

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.array(projectSchema),
});

export type Project = z.infer<typeof projectSchema>;

//*STUDIES
const certificationTechnologies = z.object({
    name: z.string(),
    icon: z.string().optional()
})

const certificationSchema = z.object({
    courseName: z.string(),
    company: z.string(),
    year: z.string(),
    description: z.string(),
    technologies: z.array(certificationTechnologies)
})

const certificationsCollection = defineCollection({
    type: 'data',
    schema: z.array(certificationSchema),
});

export type Certification = z.infer<typeof certificationSchema>;

export const collections = {
    projects: projectsCollection,
    certifications: certificationsCollection
};
