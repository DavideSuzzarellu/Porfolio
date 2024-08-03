import { z, defineCollection } from 'astro:content';

//*PROJECTS
export const technologySchema = z.object({
    name: z.string(),
    icon: z.string().optional(),
});

const projectSchema = z.object({
    projectName: z.string(),
    img: z.string(),
    description: z.string(),
    technologies: z.array(technologySchema),
    url: z.string()
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
    technologies: z.array(certificationTechnologies),
    pdf: z.string()
})

const certificationsCollection = defineCollection({
    type: 'data',
    schema: z.array(certificationSchema),
});

export type Certification = z.infer<typeof certificationSchema>;


// EXPERIENCES
const experiencesSchema = z.object({
    role: z.string(),
    company: z.string(),
    year: z.string(),
    description: z.string()
})

const experiencesCollection = defineCollection({
    type: "data",
    schema: z.array(experiencesSchema)
})

export type Experience = z.infer<typeof experiencesSchema>;


// EXPORT COLLECTIONS
export const collections = {
    projects: projectsCollection,
    certifications: certificationsCollection,
    experiences: experiencesCollection
};