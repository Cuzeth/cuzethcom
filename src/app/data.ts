import daboiz from '../../public/images/DaBoiz.svg';
import about from '../../public/images/about.png';
import otscLogo from '../../public/images/OTSC_Logo_Stamp_FullColor.png';

// Template
export interface HeroData {
    lightBg: boolean;
    lightText: boolean;
    lightTextDesc: boolean;
    topLine: string;
    headline: string | Array<{ text: string; emphasize: boolean }>;
    description?: string;
    buttonLabel?: string;
    img?: any;
    alt?: string | any;
    imgStart?: boolean;
    linkTo?: string | any;
    sendTo?: string;
    videoURL?: string;
}

// Da Boiz
export const daBoizObj: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'ARCHIVED',
    headline: [
        { text: 'Multipurpose Discord Bot, ', emphasize: false },
        { text: 'completely free.', emphasize: true }
    ],
    description: 'Da Boiz Bot was a comprehensive, open-source Discord bot built with TypeScript. While no longer active, its legacy lives on in the codebase.',
    // buttonLabel: 'Invite',
    // sendTo: 'https://discordapp.com/api/oauth2/authorize?client_id=636595833801801748&permissions=8&scope=bot%20applications.commands',
    // imgStart: true,
    img: daboiz,
    alt: 'Da Boiz Bot',
};

// Out There Social Club
export const otscObj: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'NONPROFIT PLATFORM',
    headline: [
        { text: 'Out There Social Club ', emphasize: false },
        { text: 'Portal & App', emphasize: true }
    ],
    description: 'A comprehensive digital ecosystem for a 501(c)(3) nonprofit, integrating a dynamic web portal with a feature-rich iOS application. Powered by Next.js, Firebase, and SwiftUI to connect the community.',
    buttonLabel: 'Visit Website',
    sendTo: 'https://outtheresocialclub.org',
    img: otscLogo,
    alt: 'Out There Social Club Logo',
    imgStart: false,
};

// About Me
export const aboutObj: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'ABOUT ME',
    headline: [
        { text: 'Developer, ', emphasize: false },
        { text: 'Creator, ', emphasize: true },
        { text: 'Student', emphasize: false }
    ],
    description: `I architect modern digital solutions with a focus on performance and privacy. As a ${calculateAge(new Date('2004-10-27T00:00:00'))}-year-old Computer Science major, I blend academic rigor with practical application. Whether building full-stack applications or exploring new frameworks, I am driven by a passion for efficient code and exceptional user experiences.`,
    img: about,
    alt: 'Website',
    imgStart: true,
};

function calculateAge(birthday: Date) { // birthday is a date
    // @ts-ignore
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const skillsAndInterests: string = `
## Technical Expertise

- **Programming Languages:** Python, TypeScript, Java, C, C++, C#
- **Frontend Engineering:** React, Next.js, Svelte, TypeScript, Tailwind CSS
- **Backend Architecture:** Node.js, Express, MongoDB, PostgreSQL
- **DevOps & Tools:** Git, GitHub Actions, Cloudflare, Vercel, Firebase, Anaconda, NVM
- **Data Science & Machine Learning:** PyTorch, TensorFlow
- **Creative & Design:** UI/UX Design, Motion Graphics, Adobe Suite

## Passion & Pursuit

Beyond the terminal, I am dedicated to the intersection of technology and design. I actively follow industry developments, constantly refining my toolkit to build software that is not just functional, but delightful to use.

## Academic Focus

Currently pursuing a Bachelor of Science in Computer Science. My studies emphasize software engineering principles, system architecture, and algorithmic efficiency, complemented by continuous self-directed learning.
`;

// Da Boiz TOS
export const daBoizTOS = `
# Da Boiz Terms of Use

**1. Acceptance**
* By accessing or using Da Boiz Bot, you agree to be bound by these Terms of Use.

**2. Service Description**
* Da Boiz Bot is a utility for Discord server moderation and management.

**3. User Obligations**
* You agree to:
* - Adhere to Discord's Terms of Service and Community Guidelines.
* - Use the bot solely for lawful purposes.
* - Refrain from disrupting the bot's operations.
* - Assume responsibility for all activity under your account.

**4. Intellectual Property**
* The bot's code, design, and assets are the exclusive property of the owner. Unauthorized reproduction or distribution is prohibited.

**5. Disclaimer & Liability**
* Da Boiz Bot is provided "as is". We disclaim all warranties and liability for any damages or losses arising from its use.

**6. Service Modifications**
* We reserve the right to modify or discontinue the service at any time without notice.

**7. Termination**
* Access may be suspended or terminated immediately for violations of these terms.

**8. Updates**
* Terms may be updated periodically. Continued use constitutes acceptance of changes.

**9. Indemnity**
* You agree to indemnify the operators against any claims arising from your use of the bot.

**10. Contact**
* Inquiries: [cuz@cuzeth.com](mailto://cuz@cuzeth.com).

##### Use of Da Boiz Bot constitutes agreement to these terms.
`;

// Da Boiz Privacy Policy
export const daBoizPrivacyPolicy = `
# Da Boiz Privacy Policy

**1. Overview**
* This policy outlines our data handling practices. By using Da Boiz Bot, you consent to this policy.

**2. Data Collection**
* We collect minimal data required for operation:
* - **IDs:** User, Server, Channel, and Role IDs for configuration and management.
* - **Moderation Logs:** Reasons and metadata for moderation actions.

**3. Usage**
* Data is used to:
* - Deliver and maintain bot features.
* - Facilitate server administration.
* - Ensure system security and stability.

**4. Third-Party Sharing**
* Data is not shared with third parties, except as compelled by law.

**5. Security**
* We employ standard security measures but cannot guarantee absolute security of data transmitted over the internet.

**6. Retention**
* Data is retained only as long as necessary for operational or legal purposes.

**7. User Rights**
* You retain rights to access, correct, or request deletion of your data, subject to applicable laws.

**8. Limitation**
* We are not liable for security breaches beyond our reasonable control.

**9. Policy Updates**
* Changes will be posted here.

**10. Contact**
* Inquiries: [cuz@cuzeth.com](mailto://cuz@cuzeth.com).
`

// Project Data
export const projectsData = [
    {
        id: 10,
        title: "Strobe",
        description: "A local-first Rapid Serial Visual Presentation reader for iOS. Read PDFs and EPUBs at 100–1000 WPM with a focus-first design and no cloud dependency.",
        image: "/images/strobe.svg",
        technologies: ["SwiftUI", "iOS"],
        liveLink: "https://strobefast.app",
        repoLink: "https://github.com/Cuzeth/Rapid-Serial-Visual-Presentation"
    },
    {
        id: 1,
        title: "Out There Social Club",
        description: "Comprehensive digital platform for a 501(c)(3) nonprofit, featuring a web portal and iOS application.",
        image: "/images/OTSC_Logo_Stamp_FullColor.png",
        technologies: ["Next.js", "Firebase", "SwiftUI"],
        liveLink: "https://outtheresocialclub.org"
    },
    {
        id: 2,
        title: "Workouts",
        description: "A privacy-centric, offline-first workout tracking application for iOS.",
        image: "/images/getworkoutsappicon.png",
        technologies: ["SwiftUI", "iOS"],
        liveLink: "https://getworkouts.app"
    },
    {
        id: 3,
        title: "QR Code Generator",
        description: "A progressive web app (PWA) for generating customizable, high-resolution QR codes.",
        image: "/images/qrlogo.png",
        technologies: ["Astro", "TypeScript", "PWA"],
        liveLink: "https://qr.cuzeth.com",
        repoLink: 'https://github.com/Cuzeth/qr-generator-pwa'
    },
    {
        id: 4,
        title: "Memorable Password Generator",
        description: "Secure password generator focused on high entropy and memorability.",
        image: "/images/password.svg",
        technologies: ["Flask", "Python", "CSS", "Vercel"],
        liveLink: "https://pwgen.cuzeth.com",
        repoLink: "https://github.com/Cuzeth/memorable-password-generator"
    },
    {
        id: 5,
        title: "URL Shortener",
        description: "High-performance URL shortening service with integrated analytics.",
        image: "/images/shorturl.svg",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        repoLink: "https://github.com/Cuzeth/cuzurl"
    },
    {
        id: 6,
        title: "Tetris Solver",
        description: "Algorithmic solver for Tetris utilizing heuristic scoring for optimal piece placement.",
        image: "puzzle",
        technologies: ["Python", "Numpy", "AI"],
        repoLink: "https://github.com/Cuzeth/tetris-solver"
    },
    {
        id: 8,
        title: "Da Boiz Bot",
        description: "Legacy open-source Discord bot, previously serving thousands of users.",
        image: "/images/DaBoiz.svg",
        technologies: ["Discord.js", "TypeScript", "SQL"],
        repoLink: "https://github.com/Cuzeth/da-boiz-bot"
    },
    {
        id: 9,
        title: "Tailosive Gaming",
        description: "Previous highlights I made for Tailosive Gaming.",
        image: "video",
        technologies: ["Adobe After Effects", "Motion Graphics", "Video Editing"],
        liveLink: "https://youtube.com/playlist?list=PLLeQ5Dw04o_L3qjqHRhkZIaUuZwXCT-6d"
    }
];