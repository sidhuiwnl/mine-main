import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";
import testimonial from "../../public/testimonial.png"


export const DATA = {
  name: "Sidharth Babu",
  initials: "B",
  url: "https://mine-main.vercel.app",
  location: "Coimabatore, TN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I’m Sidharth a Full stack web developer. I am currently building small products that interest me.",
  summary:
    "I'm currently pursuing B.Tech Artificial Intelligence and Data Science and working to achieve the goal of becoming a developer.",
  avatarUrl: "/s.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Zod",
    "Prisma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sidharthinfernal@gmail.com",
    tel: "7010604488",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sidhuiwnl",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sidharth-babu-3351a7223/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sidharth_b26649",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CodersCave",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Web developer Intern",
      logoUrl: "./codercave.jpg",
      start: "June 2023",
      end: "July 2022",
      description:
      "Designed and developed a basic EduTech website using HTML, CSS, and JavaScript.Focused on creating an intuitive and engaging user interface to facilitate online learning.Created a URL shortener website utilizing an API to deliver fast and reliable responses.Enhanced user experience by ensuring quick and efficient URL shortening and redirection.Applied best practices in code optimization and regular maintenance to ensure consistent performance"
  },
   
  ],
  education: [
    
    {
      school: "Kgisl Institute of Technology",
      href: "https://www.kgkite.ac.in/",
      degree: "Bachelors of Technology",
      logoUrl: "/logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Endorsement",
      href: "https://endorsement-nine.vercel.app",
      dates: "Sep 2024 - Jan 2025",
      active: true,
      description:
      "Empowered brands with full control over their reputation through static, pre-optimized review components, easilyembedded to showcase social proof on websites.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "React Tweet"
      ],
      links: [
        {
          type: "Website",
          href: "https://endorsement-nine.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sidhuiwnl/Endorsement",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://us7xgl2xx9.ufs.sh/f/NLwJvYRc8DXf3vGwW0isbXmI3YHQN04kTMVZd6ocBzphKPuy",
      video : ""
    },
    {
      title: "Surge",
      href: "",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
          "Surge is a meeting bot that records meetings and generates AI-powered summaries of the recordings.",
      technologies: [
        "Reactjs",
        "clerk auth",
        "Puppeteer",
        "Typescript",
        "Websocket",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sidhuiwnl/Surge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video : "https://us7xgl2xx9.ufs.sh/f/NLwJvYRc8DXful67cE36uPjeydlQ1VcfNSsXmpHwDFZAxrE4"
    },
    {
      title: "Mesamous",
      href: "https://mesamous.vercel.app",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "Created a platform for users to generate unique, sharable links and receive anonymous messages",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Acternity UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://mesamous.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sidhuiwnl/mesamous",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://us7xgl2xx9.ufs.sh/f/NLwJvYRc8DXf7awOCvbBjpsdIe8iWE4XqvM5AkwH2TGgabDP",
      video: "",
    },
    {
      title: "Component Render",
      href: "https://component-renderer-five.vercel.app",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Crafted a Next.js and TypeScript app for previewing and rendering shadcn components, enhancing developer workflows.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://component-renderer-five.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sidhuiwnl/component-renderer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://us7xgl2xx9.ufs.sh/f/NLwJvYRc8DXfKo6x8bvFpzLiORJkqxAeXo9PGB71Y3HlrwhC",
      video: "",
    },
    {
      title: "Tofu",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a streamlined code editor with WebSocket communication for real-time collaboration",
      technologies: [
        "Next.js",
        "Typescript",
        "Monoco Editor",
        "TailwindCSS",
        "Shadcn UI",
        "Websocket"
      ],
      links: [
        {
          type: "Website",
          href: "https://tofu-samp.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sidhuiwnl/tofu-samp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://us7xgl2xx9.ufs.sh/f/NLwJvYRc8DXfxejX6zWm4ksrP56YLq2leFJcIjgK3CZnbUTf",
      video:
        "",
    },

  ],
  Milestone: [
    {
      title: "Surge",
      dates: "Jan 10 - 27th, 2025",
      description:
          "Developed a Meeting Bot that records the meeting and able to generate contents related to the recordings",
      icon: "public",
      links: [
        {
          title : "Github",
          icon : <Icons.github className="h-4 w-4" />,
          href : "https://github.com/sidhuiwnl/Surge"

        }
      ],
    }
      ,
    {
      title: "Commit-ai(Nodejs)",
      dates: "Nov 27 - 27th, 2024",
      description:
        "Developed a nodejs application generate commit message based on the git changes",
      icon: "public",
      links: [
        {
          title : "Github",
          icon : <Icons.github className="h-4 w-4" />,
          href : "https://github.com/sidhuiwnl/cli-ai"

        }
      ],
    },
    {
      title: "Commit-ai(Rust)",
      dates: "Nov 29 - 29th, 2024",
      description:
        "Developed a Rust application to generate commit message(My first project)",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sidhuiwnl/commitai",
        },
      ],
    },
    {
      title: "Mesamous",
      dates: "January 10th - 12th, 2024",
      description:
        "An anonymous app where people can share their thoughts of someone without needing of any process",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://mesamous.vercel.app",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sidhuiwnl/mesamous",
        },
      ],
    },
    {
      title: "YT Audio Downloader",
      dates: "October 10th - 11th, 2024",
      description:
        "A Nodejs application for extract audio from the youtube video",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sidhuiwnl/youtube-downloader-main",
        },
      ],
    },
  ],
} as const;
