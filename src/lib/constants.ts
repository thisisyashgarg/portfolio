export const BOOTSTRAP_FOR_SKILL_ICON = "w-12 text-4xl mx-auto inline-block";
export const RESUME_LINK =
  "https://thisisyashgarg.github.io/resume.pdf";
export const PROFILE_PIC =
  "https://res.cloudinary.com/dwwtffefs/image/upload/v1677576649/my-profile-pic/profile_ozrf3u.png";

const data = {
  name: "Yash Garg",
  title: "Full Stack Developer",
  social: {
    github: "https://github.com/thisisyashgarg",
    linkedin: "https://linkedin.com/in/thisisyashgarg",
    twitter: "https://twitter.com/thisisyashgargg",
    email: "thisisyashgarg@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "I'm a B.Tech (Information Technology) graduate who loves building things. My passion for creating projects from scratch drives me to stay current with the latest technologies and to tackle projects of any size or complexity.",
  },
  experience: {
    title: "My Experience",
    companies: [
      {
        name: "Youe",
        description: [
          "Revamped the React Native app, driving Youe's first revenue, and migrated its backend to reduce load times by 50%, using React Native and Next.js.",
          "Migrated the mobile app to a new backend decreasing load times by half."
        ],
        tenure: "Nov 2024 - Sept 2025",
        websiteLink: "https://youe.co/",
      },
      {
        name: "Patent Ninja",
        description: [
          "Patent Ninja is a tool I built from scratch to make the patent filing process fast and simple.",
          "It guides users through the entire process, enabling them to create a fully detailed patent in just around 10 minutes.",
          "I also integrated features like Patent Search and Patent Response, which help users quickly look up and validate patents on the go.",
          "For security and convenience, I added Google and email link authentication using Firebase.",
          "The platform runs on Next.js for the front end and AWS Amplify to manage the backend, making it a reliable and efficient solution for patent filing."
        ],
        tenure: "Mar 2024 - Oct 2024",
        websiteLink: "https://app.dev.patent.ninja/",
      },
      // {
      //   name: "Ventura Securities",
      //   description: [
      //     "I developed server-side mutual fund sections using React Server Components, utilizing Next.js as the primary tech stack.",
      //     "This implementation optimized the rendering process, enabling efficient data fetching and improving performance for complex financial data displays."
      //   ],
      //   tenure: "Aug 2024 - Sept 2024",
      //   websiteLink: "https://www.venturasecurities.com/",
      // },
      {
        name: "Hiretal",
        description: [
          "Developed a robust TypeScript and Express backend architecture, significantly optimizing Elasticsearch queries to achieve a 100-fold increase in speed.",
          "Additionally, I streamlined the deployment process on Digital Ocean by utilizing Docker, complemented with efficient build scripts.",
          "To further enhance system performance, I implemented caching mechanisms on both the frontend and backend, resulting in a remarkable 10 times faster response time.",
          "The working tech stack for this project included Next.js, Node.js, and Elasticsearch."
        ],
        tenure: "Aug 2023 - May 2024",
        websiteLink: "https://hiretal.ai/",
      },
      {
        name: "Bluelearn",
        description: [
          "Developed an Application Review System (ARS) and an Application Tracking System (ATS) designed for tracking and managing job applications on the web, which successfully supported over 250,000 users.",
          "Additionally, I built Boldd from scratch, which successfully generated multiple leads in India and the US, subsequently generating revenue.",
          "I also undertook the revamping of the Admin Panel to version 3, enhancing the ability to manage and monitor content on the app.",
          "Throughout these projects, I worked with a tech stack that included Next.js, React Query, and Node.js."
        ],
        tenure: "June 2023 - June 2024",
        websiteLink: "https://www.bluelearn.in/",
      },
      // {
      //   name: "Matrimonials",
      //   description: [
      //     "Improved application robustness by solving multiple bugs, added DOM to PDF generation, and integrated search filters, utilizing React.js, Node.js, EC2, and MongoDB"
      //   ],
      //   tenure: "June 2023 - July 2023 (Freelance - Full Stack Developer)",
      //   websiteLink: "https://www.matrimonials.ai/",
      // },
      // {
      //   name: "Intelligent Labs",
      //   description: [
      //     "Developed a company collaboration platform from scratch, working closely with the founders to brainstorm the app flow.",
      //     "Took responsibility for the entire user journey, including user onboarding, authentication, search, feed, and profile.",
      //     "Implemented a Node.js backend using the MVC architecture, incorporating JWT authentication.",
      //     "Successfully built a dynamic feed page and search functionality that updates in real-time with new posts."
      //   ],
      //   tenure: "April 2023 (Full Stack Developer Intern)",
      //   websiteLink: "https://reacti.ai/",
      // },
      {
        name: "Slingshot",
        description: [
          "Part of the new ventures and collaborated with founders, teaching Node.js, achieving 10,000+ hits on EaseIt, creating Node.js bots, building data crawlers, and deploying apps using Docker and AWS EC2"
        ],
        tenure: "Nov 2022 - Feb 2023 (4 months) (SDE Intern)",
        websiteLink: "https://slingshotahead.com/",
      },
    ],
  },
  skills: [
    // {
    //   skillName: "React Native",
    // },
    {
      skillName: "PostgreSQL"
    },
    {
      skillName: "RDS"
    },
    {
      skillName: "NextJS",
      skillIcon: "https://res.cloudinary.com/dwwtffefs/image/upload/v1689799688/next-js_wcrebp.svg",
    },
    {
      skillName: "ReactJS",
      skillIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      skillName: "NodeJS",
      skillIcon: "https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg",
    },
    {
      skillName: "MongoDB",
      skillIcon: "https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg",
    },
    {
      skillName: "EC2 (AWS)",
      skillIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      skillName: "Docker",
      skillIcon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    },
    {
      skillName: "Typescript",
      skillIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    },
    {
      skillName: "TailwindCSS",
      skillIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    }
  ],
  projects: [
    {
      title: "Typu",
      description:
        "A simple tool to generate TypeScript types from cURL commands.",
      tags: ["react", "tailwindcss", "typescript"],
      codeLink: "https://github.com/thisisyashgarg/typu",
      websiteLink: "https://typu.vercel.app/",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1728134691/Screenshot_2024-10-05_at_6.51.44_PM_iek2ah.png",
      ],
    },
    // {
    //   title: "UnQueue",
    //   description:
    //     "UnQueue eliminates physical queues by joining virtual queues from your device, receive turn notifications, making it convenient and efficient.",
    //   tags: ["react", "tailwindcss", "react-router-dom", "firebase"],
    //   codeLink: "https://github.com/thisisyashgarg/unqueue",
    //   websiteLink: "https://unqueue.netlify.app/",
    //   androidAppLink:
    //     "https://drive.google.com/file/d/1jlq_eQv7EnLtAJlUlP_37OnmFaApuuPT/view?usp=drivesdk",
    //   screenshots: [
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677179980/unqueue-ss/homepage_bej3xk.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677179980/unqueue-ss/domains_d11nth.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677179979/unqueue-ss/dashboard_gepykw.png",
    //   ],
    // },
    // {
    //   title: "Foodify",
    //   description: "Foodify is a food exploration app",
    //   tags: ["react", "tailwindcss", "redux-toolkit", "typescript"],
    //   codeLink: "https://github.com/thisisyashgarg/namaste-react",
    //   websiteLink: "https://foodifyme.netlify.app/",
    //   screenshots: [
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677495619/foodify/home_rdikc3.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677495618/foodify/menu_ibpjha.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677495618/foodify/cart_lio0de.png",
    //   ],
    // },
    // {
    //   title: "Ain't Youtube",
    //   description: "Ain't Youtube is a video streaming app",
    //   tags: [
    //     "react",
    //     "tailwindcss",
    //     "redux-toolkit",
    //     "typescript",
    //     "youtube-api",
    //   ],
    //   codeLink: "https://github.com/thisisyashgarg/youtube-clone",
    //   websiteLink: "https://aintyoutube.netlify.app/",
    //   screenshots: [
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1680374548/youtube-clone/Screenshot_Capture_-_2023-03-17_-_23-14-12_qf9qqa.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1680374550/youtube-clone/Screenshot_Capture_-_2023-03-17_-_23-14-41_jqa6fd.png",
    //   ],
    // },
    {
      title: "Cryptologer",
      description:
        "This is a tweeter bot that automatically fetches crypto news from an API and then generates commentary tweet about it and tweets that commentary through your twitter account",
      tags: ["xml-js", "twit", "openai", "newsdata-api"],
      codeLink: "https://github.com/thisisyashgarg/news-tweeter-bot",
      websiteLink:
        "https://twitter.com/IAmCryptologer?t=Rv_xgKBcUDbNc1lbUrBjhw&s=09",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677303411/news-bot/Screenshot_Capture_-_2023-02-25_-_11-06-38_kvcpnu.png",
      ],
    },
    // {
    //   title: "Book Management API ( with Swagger Docs)",
    //   description: "A simple API for book management",
    //   tags: ["nodejs", "typescript", "swagger", "docker", "mvc"],
    //   codeLink: "https://github.com/thisisyashgarg/vocally-assignment",
    //   websiteLink: "",
    //   screenshots: [
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1680375357/books-api/Screenshot_Capture_-_2023-04-02_-_00-25-09_xnsdo8.png",
    //   ],
    // },
    {
      title: "Meme Generator",
      description:
        "This is a meme generator that generates a random meme template and takes input text, dynamically adds it to a meme. You can download the meme as well. Have fun with it.",
      tags: ["react", "typescript", "html2canvas", "download-js"],
      codeLink: "https://github.com/thisisyashgarg/meme-generator",
      websiteLink: "https://creatememes.netlify.app/",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677136172/meme-generator/Screenshot_Capture_-_2023-02-23_-_12-38-21_tmrqke.png",
      ],
    },
    // {
    //   title: "FooBank - Modern Banking Website",
    //   description:
    //     "Completely responsive modern banking website made out of just two dependencies, React and Tailwiind",
    //   tags: ["react", "typescript", "tailwindcss"],
    //   codeLink: "https://github.com/thisisyashgarg/banking-app",
    //   websiteLink: "https://foobank.netlify.app/",
    //   screenshots: [
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761304/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-08_awcva1.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761304/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-32_gtfpak.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761304/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-58_mpxjpc.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-17-17_vjhpda.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-26_xytphk.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-17-21_iwnxkx.png",
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1677761303/foobank/Screenshot_Capture_-_2023-03-02_-_18-16-15_ik4d4z.png",
    //   ],
    // },
    // {
    //   title: "Tenzies Game",
    //   description:
    //     "Tenzies is a React-based dice game in which the goal is to roll until all dice are the same.",
    //   tags: ["react", "typescript", "tailwindcss"],
    //   codeLink: "https://github.com/thisisyashgarg/tenzies-game",
    //   websiteLink: "https://tenziesmatch.netlify.app/",
    //   screenshots: [
    //     "https://res.cloudinary.com/dwwtffefs/image/upload/v1679938405/tenzies/Screenshot_Capture_-_2023-03-27_-_23-03-08_putehk.png",
    //   ],
    // },
    {
      title: "Discord Tweeter Bot",
      description:
        "Discord Tweeter Bot is a discord bot that basically takes your input, a tweet of yours that you want to post, and directly posts it through your twitter profile",
      tags: ["twit", "discord-js", "nodejs", "twitter-apiV2"],
      codeLink: "https://github.com/thisisyashgarg/discord-tweeter-bot",
      websiteLink: "",
      screenshots: [
        "https://res.cloudinary.com/dwwtffefs/image/upload/v1677137451/discord-bot/Screenshot_Capture_-_2023-02-23_-_12-59-59_cci6qa.png",
      ],
    },
    {
      title: "NodeJS Crawler",
      description:
        "A Nodejs crawler that crawls a government website and takes out data of latest tenders passed along with their dates and contractor (if any)",
      tags: ["nodejs", "puppeteer", "headless-browser"],
      codeLink: "https://github.com/thisisyashgarg/nodejs-crawler",
      websiteLink: "",
      screenshots: [],
    },
  ],
};

export default data;
