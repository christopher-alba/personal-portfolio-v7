export enum ProjectStatus {
  FEATURED = "featured",
  ARCHIVED = "archived",
  UNDERCONSTRUCTION = "underConstruction",
  SERVERNOLONGERDEPLOYED = "serverNoLongerDeployed",
}
export enum Type {
  UNIVERSITY = "UNIVERSITY",
  WORK = "WORK",
}
enum ProjectType {
  MONOREPO = "Monorepo",
  FRONTENDBACKEND = "Frontend | Backend",
  FRONTENDONLY = "Frontend",
  BACKENDONLY = "Backend",
}

enum Devices {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  TABLET = "tablet",
}

export type Project = {
  name: string;
  short: string;
  description: string;
  status: ProjectStatus[];
  type: Type;
  website?: string;
  download?: string;
  tags: string[];
  imgSrc: string;
  devices: Devices[];
  year: 2020 | 2021 | 2022 | 2023;
  github: {
    url: string;
    type: ProjectType;
  }[];
};

type Projects = Project[];

export const projects: Projects = [
  {
    name: "Valkyrion",
    short: "Top down shooter build in Unity C#.",
    description:
      "This is a top-down 3D shooter with WASD controls and left click to shoot. Very easy to play once you get use to it. I had plenty of features planned for this game and even planned a full release on steam mid 2023. However, I found myself not enoying it anymore and figured that it was no longer worth putting hours of work into each day. Hence, it's now available freely for the public!",
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    type: Type.UNIVERSITY,
    tags: ["C#", "Unity", "Blender"],
    imgSrc: "/images/valkyrion.png",
    devices: [Devices.DESKTOP],
    year: 2022,
    download:
      "https://drive.google.com/file/d/1J3sGEVvUePL1iojAf0bDioAhTXOHsmcy/view?usp=sharing",
    github: [
      {
        url: "https://github.com/christopher-alba/Valkyrion",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "2D Space Shooter",
    short: "Top down shooter built in raw Javascript, HTML, and CSS.",
    description:
      "Fight your way through infinite rounds and enemies in this classic style shooter.",
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    type: Type.UNIVERSITY,
    website: "https://christopher-alba.github.io/galaga-clone/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/galaga.png",
    devices: [Devices.DESKTOP],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/galaga-clone",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "Scientific Calculator",
    short: "Calculator built in raw Javascript, HTML, and CSS.",
    description:
      "Has the basic functionalities of a calculator as well as some extra features!",
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    type: Type.UNIVERSITY,
    website: "https://christopher-alba.github.io/calculator/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/calculator.png",
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/calculator",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "PVP Chess",
    short: "A working chess game with computer assists.",
    description: "",
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    type: Type.UNIVERSITY,
    website: "https://christopher-alba.github.io/chess/",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/chess.png",
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/chess",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "Whack-a-mole",
    short: "Click on the moles as they appear to earn points!",
    description: "",
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    type: Type.UNIVERSITY,
    website:
      "https://christopher-alba.github.io/javascript-carnival/whack-a-mole/whack-a-mole.html",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    imgSrc: "/images/mole.png",
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    year: 2020,
    github: [
      {
        url: "https://github.com/christopher-alba/javascript-carnival",
        type: ProjectType.FRONTENDONLY,
      },
    ],
  },
  {
    name: "E-CommerceV5",
    short: "A simple ecommerce website.",
    description:
      "This is a small scale ecommerce site that allows users to browse products and add them to a shopping cart. Admins can create, update, and delete products in the shop route. To access an admin account, login using username: admin, and password: admin. This site also features a light mode theme and dark mode theme, controlled by a switch.",
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    type: Type.UNIVERSITY,
    website: "https://ecommercev5.netlify.app/",
    tags: [
      "HTML",
      "Styled Components",
      "Javascript",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Semantic-UI-React",
      "Other React Libraries",
    ],
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    imgSrc: "/images/ecommercev5.png",
    year: 2021,
    github: [
      {
        url: "https://github.com/christopher-alba/ecommerceV5-client",
        type: ProjectType.FRONTENDONLY,
      },
      {
        url: "https://github.com/christopher-alba/ecommerceV5-server",
        type: ProjectType.BACKENDONLY,
      },
    ],
  },
  {
    name: "Financial Manager",
    short: "A software tool to help you manage your finances.",
    description:
      "Manage your finances by tracking expenses, incomes, and goals. Login using username: username | password: password",
    website: "https://betterfinance.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Express.js",
      "Graphql",
      "Apollo Server",
      "Apollo Client",
      "MongoDB",
      "Mongoose",
    ],
    status: [ProjectStatus.FEATURED, ProjectStatus.ARCHIVED],
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    type: Type.UNIVERSITY,
    imgSrc: "/images/finance.png",
    year: 2022,
    github: [
      {
        url: "https://github.com/christopher-alba/betterfinance-client",
        type: ProjectType.FRONTENDONLY,
      },
      {
        url: "https://github.com/christopher-alba/betterfinance-server",
        type: ProjectType.BACKENDONLY,
      },
    ],
  },
  {
    name: "Unirant",
    short: "A simple blog like website.",
    description:
      "A website for university students to rant about their life. Register an account with Unirant or log in with your google account to interact with the website's basic features.",
    website: "https://unirant.netlify.app/",
    tags: [
      "HTML",
      "CSS",
      "Typescript",
      "React",
      "Styled Components",
      "Node.js",
      "Express.js",
      "Axios",
      "REST API",
      "MongoDB Atlas",
      "Mongoose",
    ],
    imgSrc: "/images/unirant.png",
    status: [ProjectStatus.UNDERCONSTRUCTION, ProjectStatus.FEATURED],
    devices: [Devices.DESKTOP, Devices.TABLET, Devices.MOBILE],
    type: Type.UNIVERSITY,
    year: 2022,
    github: [
      {
        url: "https://github.com/christopher-alba/unirant-client",
        type: ProjectType.FRONTENDONLY,
      },
      {
        url: "https://github.com/christopher-alba/unirant-server",
        type: ProjectType.BACKENDONLY,
      },
    ],
  },
];
