import { meta, shopify, starbucks, tesla, acc, headstarter, dell } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
    /*
        {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
        {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
        {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },

    */
];

export const experiences = [
    
    {
        title: "ACC GROW Associate I: HyFlex Navigator Assistant I",
        company_name: "Austin Community College",
        icon: acc,
        iconBg: "#ac3ec9",
        date: "September 2024 - Present",
        points: [
            /*
            'Supported HyFlex Teaching Sessions: Assisted faculty with in-class technology setup and management for seamless in-person and online learning via Zoom and Google Meet',
            'Developed Tailored Support Plans: Collaborated with faculty to create customized technology support strategies for each class session',
            'Resolved Technical Issues: Provided real-time troubleshooting and problem-solving for classroom technology during live sessions',
        */
            ],
    },
    
    {
        title: "Software Engineering Fellow",
        company_name: "Headstarter",
        icon: headstarter,
        iconBg: "#3bdab2",
        date: "July 2024 - September 2024",
        points: [
            'Built and deployed 7 web projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment',
            'Worked in a team of 4 to develop an interactive customer support agent using Next.js, integrated a custom RAG pipeline using OpenAI and Pinecone that responds based on a company\'s knowledge base',
            'Developed a personal website using HTML, CSS, enhancing user engagement with over 60 unique visitors within the first month',
        ],
    },
    {
        title: "Develop with Dell",
        company_name: "Dell",
        icon: dell,
        iconBg: "#4b8ad6",
        date: "May 2024 - July 2024",
        points: [
            'Enhanced communication skills by engaging in over 60 Rainmakers tech support roleplay sessions',
            'Participated in 8 hours of professional development focusing on brand building and corporate culture',
            'Completed 30 hours of on-demand learning in networking and technical support',
        ],
    },
    {
        title: "Excel with Dell",
        company_name: "Dell",
        icon: dell,
        iconBg: "#4b8ad6",
        date: "January 2024 - April 2024",
        points: [
            'Collaborated with a group of six peers to establish and pursue personal career goals',
            'Expanded professional network by engaging with 24 Dell experts, enriching knowledge on effective teamwork and time management',
            'Acquired foundational knowledge in AI and software engineering to strategically align career objectives',
        ],
    },

    /*
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    */
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Wardrobe Assistant AI',
        description: 'Developed the Wardrobe Assistant AI, a web application that streamlines your morning routine by recommending daily clothing combinations using OpenAI for outfit suggestions, Supabase for managing user-uploaded items, and Stripe API for subscription management',
        link: 'https://github.com/MohammedNabil99/Wardrobe-Assistant',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: '3D Animated Portfolio',
        description: 'Developed a modern web portfolio with a 3D animated scene featuring interactive elements like a fox\'s island and plane, and integrated EmailJS for collaboration requests',
        link: 'https://github.com/chang4oh/portfolio24a',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'AI Complaint Categorizer',
        description: 'Developed the AI Complaint Categorizer for a hackathon, utilizing a RAG pipeline to categorize customer complaints. Integrated vector embeddings with Pinecone, employed OpenAI for AI-driven analysis, and used Hugging Face for image text recognition, securing 4th place among over 100 entries',
        link: 'https://github.com/Anvesh8712/complaint-categoriser',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Cognitive Cards',
        description: 'Developed an advanced flashcard application, Cognitive Cards, utilizing OpenAI for AI-driven virtual assistance and prompt engineering to personalize learning. Integrated Supabase to manage and store flashcards efficiently and employed Stripe API for seamless subscription management and billing',
        link: 'https://github.com/Farbubby/cognitive-cards',
    },
    /*
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
        */
];