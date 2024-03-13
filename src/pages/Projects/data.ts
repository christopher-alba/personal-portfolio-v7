export const data: PersonalSite[] = [
  {
    name: "V1",
    url: "https://christopher-alba-v1.netlify.app/",
    imageUrl: "./images/personal-websites/v1.png",
  },
  {
    name: "V2",
    url: "https://christopher-alba-v2.netlify.app/",
    imageUrl: "./images/personal-websites/v2.png",
  },
  {
    name: "V3",
    url: "https://christopher-alba-v3.netlify.app/",
    imageUrl: "./images/personal-websites/v3.png",
  },
  {
    name: "V4",
    url: "https://christopher-alba-v4.netlify.app/",
    imageUrl: "./images/personal-websites/v4.png",
  },
  {
    name: "V5",
    url: "https://christopher-alba-v5.netlify.app/",
    imageUrl: "./images/personal-websites/v5.png",
  },
  {
    name: "V6",
    url: "https://christopher-alba-v6.netlify.app/",
    imageUrl: "./images/personal-websites/v6.png",
  },
];

export type PersonalSite = {
  name: string;
  url: string;
  imageUrl: string;
};

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