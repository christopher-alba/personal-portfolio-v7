export type Company = {
    name: string;
    dateString: string;
    position: string;
    type: string;
    nameShort: string;
    technologies: string[];
    website: string;
    summary: string;
  };
  export type Companies = Company[];
  
  export const data: Companies = [
    {
      summary:
        "I was promoted to software engineer due to my high performance. My responsibilities became more focused on building web applications with cloud infrastucture and touched a bit on machine learning.",
      type: "Work",
      name: "Turners Automotive Group Digital",
      nameShort: "TAG Digital",
      position: "Software Engineer",
      dateString: "July 2023 - Present",
      technologies: [
        "Typescript",
        "Cypress",
        "Angular",
        "Javascript",
        "C#",
        "Cucumber",
        "Microsoft Teams",
        "AWS",
        "Bitbucket",
        "Open API",
        ".NET Frameworks",
        "X Unit",
        "Python",
      ],
      website: "https://www.turnersautogroup.co.nz/",
    },
    {
      summary:
        "At Turners, I started as part time as a Software Engineer during my final year of university. My contract then moved to full time when I completed my studies. I began working in the QA space, and eventually transitioned into a developer role. There are multiple technologies being used at Turners, making my trait of being platform agnostic to be highly valuable.",
      type: "Work",
      name: "Turners Automotive Group Digital",
      nameShort: "TAG Digital",
      position: "Graduate Software Engineer",
      dateString: "June 2022 - July 2023",
      technologies: [
        "Typescript",
        "Cypress",
        "Vue",
        "Angular",
        "Javascript",
        "C#",
        "Java",
        "Playwright",
        "Cucumber",
        "Microsoft Teams",
        "AWS",
        "Bitbucket",
        ".NET Frameworks",
      ],
      website: "https://www.turnersautogroup.co.nz/",
    },
    {
      summary:
        "I joined Henry Schein in my penultimate year of university as an intern. Working mainly in C#, I designed and developed web applications, doing both the frontend and backend. After each piece of work, I would present what I've accomplished to a large audience online, where I would receive constructive feedback on my work.",
      type: "Internship",
      name: "Henry Schein One",
      nameShort: "HSO",
      position: "Fullstack Software Developer Intern",
      dateString: "November 2021 - February 2022 (400 hours)",
      technologies: [
        "C#",
        "Blazor",
        ".NET",
        "Figma",
        "Microsoft Teams",
        "Microsoft Azure",
      ],
      website: "https://henryscheinone.co.nz/",
    },
    {
      summary:
        "I joined Jasper as an intern in my second year of university. Here I worked primarily in Javascript, specifically in the frontend of a React application. Here they adopted GraphQL to make API calls to their server instead of REST, which was an interesting technology for me to learn. This was my first job in the IT industry.",
      type: "Internship",
      name: "Jasper",
      nameShort: "Jasper",
      position: "Frontend Software Engineer Intern",
      dateString: "November 2020 - February 2021 (416 hours)",
      technologies: [
        "Javascript",
        "React",
        "Styled Components",
        "Inhouse Design System",
        "Figma",
        "Cypress",
        "Jest",
        "React Testing Library",
        "GraphQL",
        "Apollo",
        "Notion",
        "Linear",
        "Gihub",
      ],
      website: "https://www.jasper.io/",
    },
    {
      summary:
        "This bootcamp was an intense software development course that involved 800 hours of development work. This was where I gained a large portion of my foundational skills as a software developer.",
      type: "Bootcamp",
      name: "Enspiral Dev Academy",
      nameShort: "EDA",
      position: "Fullstack Web Development Student",
      dateString: "March 2020 - June 2020 (800 hours)",
      technologies: [
        "Javascript",
        "jQuery",
        "React.js",
        "Redux",
        "REST APIs",
        "Jest",
        "Postman",
        "Supertest",
        "Superagent",
        "Passport.js",
        "HTML",
        "CSS",
        "Handlebars",
        "Node.js",
        "Express.js",
        "Knex.js",
        "Github",
        "AdobeXD",
        "Photoshop",
      ],
      website: "https://devacademy.co.nz/",
    },
  ];
  