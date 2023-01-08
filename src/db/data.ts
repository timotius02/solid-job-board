export interface Job {
  title: string;
  description: string;
  tags: string[];
}

export const jobsData: Job[] = [
  {
    title: "UI / UX Designer",
    description:
      "The User Experience Designer position exists to create compelling and digital user experience through excellent design...",
    tags: ["Full Time", "Min. 1 Year", "Senior Level"],
  },
];

for (let i = 0; jobsData.length < 9; i++) {
  jobsData.push({ ...jobsData[0] });
}

export const filters = [
  {
    title: "Type of Employment",
    choices: [
      {
        name: "Full Time Job",
        count: 56,
      },
      {
        name: "Part Time Job",
        count: 43,
      },
      {
        name: "Remote Jobs",
        count: 24,
      },
      {
        name: "Internship Jobs",
        count: 27,
      },
      {
        name: "Contract",
        count: 76,
      },
      {
        name: "Training Jobs",
        count: 28,
      },
    ],
  },
  {
    title: "Seniority Level",
    choices: [
      {
        name: "Student Level",
        count: 98,
      },
      {
        name: "Entry Level",
        count: 44,
      },
      {
        name: "Mid Level",
        count: 35,
      },
      {
        name: "Senior Level",
        count: 29,
      },
      {
        name: "Directors",
        count: 26,
      },
      {
        name: "VP or Above",
        count: 56,
      },
    ],
  },
  {
    title: "Salary Range",
    choices: [
      {
        name: "$700 - 1000",
        count: 49,
      },
      {
        name: "$1000 - 1200",
        count: 49,
      },
      {
        name: "$1200 - 1400",
        count: 49,
      },
      {
        name: "$1500 - 1800",
        count: 49,
      },
      {
        name: "$2000 - 3000",
        count: 49,
      },
      {
        name: "$3000 - 40000",
        count: 49,
      },
      {
        name: "$4000 - 50000",
        count: 49,
      },
    ],
  },
];
