export enum Type {
  WORK = "WORK",
  HOBBY = "HOBBY",
}
export type Tech = {
  name: string;
  type: Type;
};
export default [
  {
    name: "Angular",
    type: Type.WORK,
  },
  {
    name: "C#",
    type: Type.WORK,
  },
  {
    name: ".NET",
    type: Type.WORK,
  },
  {
    name: "Postgresql",
    type: Type.WORK,
  },
  {
    name: "AWS",
    type: Type.WORK,
  },
  {
    name: "Typescript",
    type: Type.WORK,
  },
  {
    name: "Java",
    type: Type.WORK,
  },
  {
    name: "Playwright",
    type: Type.WORK,
  },
  {
    name: "Cypress",
    type: Type.WORK,
  },
  {
    name: "Datadog",
    type: Type.WORK,
  },
  {
    name: "Jira",
    type: Type.WORK,
  },
  {
    name: "Bitbucket",
    type: Type.WORK,
  },
  {
    name: "Git",
    type: Type.WORK,
  },
  {
    name: "Docker",
    type: Type.WORK,
  },
  {
    name: "Kubernetes",
    type: Type.WORK,
  },
  {
    name: "Typescript",
    type: Type.HOBBY,
  },
  {
    name: "React",
    type: Type.HOBBY,
  },
  {
    name: "Node.js",
    type: Type.HOBBY,
  },
  {
    name: "Netlify",
    type: Type.HOBBY,
  },
  {
    name: "Heroku",
    type: Type.HOBBY,
  },
  {
    name: "C#",
    type: Type.HOBBY,
  },
  {
    name: ".NET",
    type: Type.HOBBY,
  },
  {
    name: "AWS",
    type: Type.HOBBY,
  },
] as Tech[];
