import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  azure,
  unity,
  aws,
  reactjs,
  bash,
  python,
  java,
  linux,
  git,
  k8s,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  globant,
  ts4,
  izzi,
  MFM,
  muguerza,
  sky,
  axtel,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Application Manager",
    icon: backend,
  },
  {
    title: "Release Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "K8s",
    icon: k8s,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Engineer",
    company_name: "Globant",
    icon: globant,
    iconBg: "#383E56",
    date: "Mar 2022 - Sep 2022",
    points: [
      "Utilized Cloud Watch to monitor resources such as EC2, to set alarms for notification or automated actions; and to monitor logs for a better understanding and operation of the system.",
      "Experienced in deploying AWS solutions using EC2, VPC, S3, EBS, ELB, Auto Scaling groups",
      "Using Terraform as IaC for deploying infrastructure as code in AWS",
      "Performed research on AWS resources or tools to recommend to clients",
      "Utilized the AWS calculator to produce a budget for a project on AWS",
    ],
  },
  {
    title: "Release Manager/Devops Engineer",
    company_name: "TS4 Strategy",
    icon: ts4,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Worked as a Release Management and DevOps Engineer to help with the implementing Azure Devops (Boards, Repo)",
      "Worked in implementing Jenkins on containers and deployed into a VM",
      "Perfomed research on Salesforce to implement containers for salesforce sandboxes",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Izzi",
    icon: izzi,
    iconBg: "#383E56",
    date: "Sep 2020 - Agu 2021",
    points: [
      "Developed scripts with PLSQL for loading data into the database as fixes",
      "Developed environments for automated pipelines CI/CD using Travis CI/Jenkins with Docker containers and deploying to AWS ElastickBeanstalk.",
      "Developed Python scripts to edit configuration files for help to automate activities of import data",
      "Helped to Release management area to deploying changes into Siebel CRM",
    ],
  },
  {
    title: "Application Manager",
    company_name: "Izzi",
    icon: izzi,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - May 2020",
    points: [
      "User support to Siebel and legacy applications, monitoring and troubleshooting",
      "Developed environments for CI/CD automated pipelines using Travis CI whit Docker containers and Kubernetes for orchestration",
      "Developed script fixes using escript(javascript) for Siebel components using Siebel Tools",
      "System health monitoring (servers windows, linux, unix), bash scripting to free up storage for legacy applications",
    ],
  },
  {
    title: "Lead Software Developer",
    company_name: "MFM",
    icon: MFM,
    iconBg: "#E6DEDD",
    date: "Mar 2016 - Sep 2017",
    points: [
      "Developed new funcionallity for Siebel CRM",
      "Activities such as Release manager (creation of environments, changes delivery, implementing changes into production)",
      "Developed Salesforce applications (Lighting App builder) for proof of concept and using Anypoint Studio (Mulesoft Anypoint Platform) to develop apis.",
    ],
  },
  {
    title: "Siebel Consultant",
    company_name: "Christus Muguerza Hospital",
    icon: muguerza,
    iconBg: "#E6DEDD",
    date: "Sep 2014 - Mar 2016",
    points: [
      "Developed new funcionallity for Siebel CRM (components, views, applets, business components)",
      "Activities like Release manager (creation of dev, test and preproduction environments, delivery changes to production with release notes)",
      "System health monitoring (servers windows, linux, unix), free up space to file system with own automated scripts (bash scripting).",
    ],
  },
  {
    title: "Siebel Consultant / Release Manager",
    company_name: "Sky",
    icon: sky,
    iconBg: "#E6DEDD",
    date: "Oct 2012 - Sep 2014",
    points: [
      "Implementing Release Management activities, like environments creation (Siebel application setup and data base), and delivery changes to production with a release notes.",
      "Developed monitoring scripts with pyhton to obtain logs from legacy applications",
      "Implementing repository strategy and deployment strategy in new projects",
      "Implementing load balancing in Siebel CRM"
    ],
  },
  {
    title: "Application Manager / Release Manager",
    company_name: "Axtel",
    icon: axtel,
    iconBg: "#E6DEDD",
    date: "Mar 2004 - Oct 2012",
    points: [
      "Built environments for developing and testing (setup and configure applications, servers, virtual machines and data bases)",
      "Activities such as Release manager (setup environments, code version control, delivery changes and implementing changes to production environment)",
      "Updating environments (dev, test, preproduction) with changes or new funcionallity comes from development team.",
      "Creation of tools for obtain data from databases or logs using java",
      "Cloning servers with VMWare for automatized tasks in the development life cycle.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };