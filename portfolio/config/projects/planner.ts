export const plannerProject = {
  id: "planner",

  titleKey: "planner",
  shortDescriptionKey: "plannerDescription",
  descriptionKey: "plannerDetails.description",

  technologies: [
    "Next.js",
    "TypeScript",
    "NestJS",
    "TypeORM",
    "PostgreSQL",
    "Chakra UI",
    "next-intl",
    "Git",
  ],

  contribution: {
    titleKey: "plannerDetails.myWork",
    descriptionKey: "plannerDetails.myWorkDescription",

    areas: [
      {
        id: "calendar",
        titleKey: "plannerDetails.areas.calendar.title",
        descriptionKey: "plannerDetails.areas.calendar.description",
        featuresKey: "plannerDetails.areas.calendar.features",
      },

      {
        id: "conflicts",
        titleKey: "plannerDetails.areas.conflicts.title",
        descriptionKey: "plannerDetails.areas.conflicts.description",
        featuresKey: "plannerDetails.areas.conflicts.features",
      },

      {
        id: "clients",
        titleKey: "plannerDetails.areas.clients.title",
        descriptionKey: "plannerDetails.areas.clients.description",
        featuresKey: "plannerDetails.areas.clients.features",
      },

      {
        id: "vacations",
        titleKey: "plannerDetails.areas.vacations.title",
        descriptionKey: "plannerDetails.areas.vacations.description",
        featuresKey: "plannerDetails.areas.vacations.features",
      },

      {
        id: "ux",
        titleKey: "plannerDetails.areas.ux.title",
        descriptionKey: "plannerDetails.areas.ux.description",
        featuresKey: "plannerDetails.areas.ux.features",
      },
    ],
  },

  highlights: [
    {
      id: "conflictSystem",
      titleKey: "plannerDetails.highlights.conflictSystem.title",
      descriptionKey: "plannerDetails.highlights.conflictSystem.description",
    },

    {
      id: "dailySummary",
      titleKey: "plannerDetails.highlights.dailySummary.title",
      descriptionKey: "plannerDetails.highlights.dailySummary.description",
    },

    {
      id: "vacationManagement",
      titleKey: "plannerDetails.highlights.vacationManagement.title",
      descriptionKey: "plannerDetails.highlights.vacationManagement.description",
    },

    {
      id: "clientManagement",
      titleKey: "plannerDetails.highlights.clientManagement.title",
      descriptionKey: "plannerDetails.highlights.clientManagement.description",
    },
  ],
} as const;