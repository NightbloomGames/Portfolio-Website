export const projectData = {
soulrend: {
  file: "SOULREND_001",
  status: "IN PROGRESS",
  threat: "SEVERE",
  entity: "WRAITH",

  title: "Soulrend: The Death of Life",

  summary:
    "A dark fantasy action-adventure game following a wraith trapped between life and death and an ancient demon imprisoned within a collection of floating blades. What begins as a search for answers after a devastating betrayal slowly unfolds into a larger conflict involving corruption, ancient powers, and the fate of humanity itself. The dead do not always rest.",

  systems: [
    {
      title: "The Wraith",
      text:
        "The player assumes the role of a rare soul suspended between life and death. This supernatural identity influences movement, combat behavior, and the overall tone of the journey.",
    },

    {
      title: "The Bound Demon",
      text:
        "An ancient demon resides within a collection of enchanted floating blades. Though initially distrustful of one another, the wraith and demon are forced into an uneasy partnership that becomes central to both the narrative and gameplay.",
    },

    {
      title: "Living Blade System",
      text:
        "The floating blades dynamically orbit, separate, and reform around the player. Their configuration changes based on player actions, movement states, and combat encounters.",
    },

    {
      title: "Judgment & Rend",
      text:
        "Combat revolves around two distinct states. Judgment emphasizes restraint and control during exploration, while Rend transforms the blades into aggressive combat formations focused on offense and momentum.",
    },

    {
      title: "Themes & Narrative",
      text:
        "Soulrend explores themes of trust, betrayal, redemption, corruption, and the struggle to find purpose while existing between life and death.",
    },
  ],

  lockedFields: [
    {
      label: "WEAPON STATE",
      value: "JUDGMENT / REND",
    },

    {
      label: "CORE ENTITY",
      value: "BOUND DEMON + WRAITH",
    },

    {
      label: "PRIMARY THEMES",
      value: "TRUST • BETRAYAL • REDEMPTION",
    },
  ],
},

  odd: {
    file: "ODD_002",
    status: "PROTOTYPE",
    threat: "LOW",
    entity: "LOGIC NODE",

    title: "Odd Number Trouble",
    summary: "Puzzle prototype focused on logic manipulation.",
    systems: [],
    lockedFields: [
    { label: "CORE MECHANIC", value: "NUMBER MANIPULATION" },
    { label: "GENRE", value: "LOGIC PUZZLE" },
  ],
  },

  clockwork: {
    file: "CLOCK_003",
    status: "EXPERIMENT",
    threat: "UNSTABLE",
    entity: "TIME LOOP",

    title: "Clockwork Trials",
    summary: "Time-loop based gameplay experiment.",
    systems: [],
    lockedFields: [
    { label: "CORE LOOP", value: "TIME RESET SYSTEM" },
    { label: "FOCUS", value: "TRIAL-BASED PROGRESSION" },
  ],
  },
} as const;

export const projects = Object.entries(projectData).map(([id, data]) => ({id, title: data.title, img: `/images/${id}.jpg`,}));
export type ProjectID = keyof typeof projectData;

export const themeClass = {
  red: {
    hover: "hover:bg-red-500/10 hover:border-red-500/30",
    text: "text-red-300",
    glow: "bg-red-500/10",
  },

  emerald: {
    hover: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
    text: "text-emerald-300",
    glow: "bg-emerald-500/10",
  },

  amber: {
    hover: "hover:bg-amber-500/10 hover:border-amber-500/30",
    text: "text-amber-300",
    glow: "bg-amber-500/10",
  },
};

export const projectThemeMap = {
  soulrend: "red",
  odd: "emerald",
  clockwork: "amber",
} as const;

export const getProject = (id: keyof typeof projectData) =>
  projectData[id];

export const communicationLinks = [
  {
    label: "EMAIL CHANNEL",
    href: "mailto:jacob.cunningham12@outlook.com",
  },
  {
    label: "YOUTUBE CHANNEL",
    href: "https://youtube.com/@NightbloomForge",
  },
  {
    label: "DISCORD NETWORK",
    href: "https://discord.gg/ZysVSja8BE",
  },
  {
    label: "INSTAGRAM FEED",
    href: "https://www.instagram.com/nightbloomdev/",
  },
];