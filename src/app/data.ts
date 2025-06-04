import logo from '../../public/images/CuzethFlat.svg';
import myWork from '../../public/images/mywork.svg';
import daboiz from '../../public/images/DaBoiz.svg';
import about from '../../public/images/about.png';

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

// Home
export const homeObjOne: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'CUZETH',
    headline: 'Welcome',
    // description: 'noooo my airpods',
    // buttonLabel: 'nooo',
    img: logo,
    alt: 'Cuzeth Logo'
};

// My Work
const startWhite = false;

export const myworkObjOne: HeroData = {
    lightBg: startWhite,
    lightText: !startWhite,
    lightTextDesc: !startWhite,
    topLine: 'VIEW MY WORK',
    headline: 'My Work',
    description:
        "I'm still in the process of expanding my portfolio, but here's a look at what I've worked on so far.",
    img: myWork,
    alt: 'My Work'
};

export const passwordGen: HeroData = {
    lightBg: !startWhite,
    lightText: !startWhite,
    lightTextDesc: !startWhite,
    topLine: 'PASSWORD GENERATOR',
    headline: 'Memorable Password Generator',
    buttonLabel: 'TRY OUT',
    sendTo: 'https://pwgen.cuzeth.com',
    imgStart: true,
    img: 'key',
    alt: 'Memorable Password Generator'
};

export const shortURL: HeroData = {
    lightBg: !startWhite,
    lightText: !startWhite,
    lightTextDesc: !startWhite,
    topLine: 'URL SHORTENER',
    headline: 'Personal URL shortener',
    buttonLabel: 'CODE',
    sendTo: 'https://github.com/Cuzeth/cuzurl',
    // imgStart: true,
    img: 'link',
    alt: 'URL Shortener GitHub'
};

export const tailosiveGaming: HeroData = {
    lightBg: startWhite,
    lightText: !startWhite,
    lightTextDesc: !startWhite,
    topLine: 'TAILOSIVE GAMING (DISCONTINUED)',
    headline: 'Previous highlights I made for Tailosive Gaming',
    buttonLabel: 'PLAYLIST',
    imgStart: true,
    sendTo: 'https://youtube.com/playlist?list=PLLeQ5Dw04o_L3qjqHRhkZIaUuZwXCT-6d',
    videoURL: 'https://www.youtube-nocookie.com/embed/Mf_RdWuf6e8'
};

// Da Boiz
export const daBoizObj: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'New Update',
    headline: [
        { text: 'Multipurpose Discord Bot, ', emphasize: false },
        { text: 'completely free.', emphasize: true }
    ],
    description: 'Da Boiz Bot is a free and open source Discord bot created using TypeScript.',
    buttonLabel: 'Invite',
    sendTo: 'https://discordapp.com/api/oauth2/authorize?client_id=636595833801801748&permissions=8&scope=bot%20applications.commands',
    // imgStart: true,
    img: daboiz,
    alt: 'Da Boiz Bot',
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
    description: `I'm Cuzeth, a ${calculateAge(new Date('2004-10-27T00:00:00'))} year old developer currently majoring in Computer Science. I have a passion for tech and software development, focusing on creating modern digital experiences and efficient solutions. When I'm not coding, I enjoy exploring new technologies and working on creative projects.`,
    img: about,
    alt: 'Website',
    imgStart: true,
};

function calculateAge(birthday: Date) { // birthday is a date
    // @ts-ignore
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const skillsAndInterests: string = `
## Skills & Technologies

- **Frontend Development:** React, Next.js, TypeScript, Tailwind CSS
- **Backend Development:** Node.js, Express, MongoDB
- **Tools & Platforms:** Git, GitHub, Vercel, Firebase
- **Other:** UI/UX Design, Motion Graphics, Video Editing

## Interests & Hobbies

Beyond coding, I'm passionate about technology, design, and creating meaningful digital experiences. I enjoy exploring new frameworks and tools to expand my skill set and stay current with industry trends.

## Education

Currently pursuing a Bachelor's degree in Computer Science, with a focus on software development and system architecture. Continuously expanding my knowledge through online courses and hands-on projects.
`;

// Da Boiz TOS
export const daBoizTOS = `
# Da Boiz Terms of Use

**1. Acceptance of Terms**
* By using Da Boiz Bot, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, you may not use our bot.

**2. Description of Service**
* Da Boiz Bot is a Discord bot designed to provide moderation and utility functions for Discord servers.

**3. User Responsibilities**
* As a user of Da Boiz Bot, you agree to:
* - Use the bot in compliance with Discord's Terms of Service and Community Guidelines.
* - Not use the bot for any illegal or unauthorized purpose.
* - Not attempt to interfere with or disrupt the bot's functionality.
* - Be responsible for all activities that occur under your Discord account in relation to the bot.

**4. Intellectual Property**
* The bot, including its code, design, and functionality, is the property of the bot owner. You may not copy, modify, distribute, sell, or lease any part of our bot without explicit permission.

**5. Limitation of Liability**
* Da Boiz Bot is provided "as is" without any warranties, expressed or implied.
* We are not responsible for any damages or losses resulting from your use of the bot.
* We are not liable for any content moderated or managed through the use of our bot.

**6. Modifications to the Bot**
* We reserve the right to modify or discontinue, temporarily or permanently, the bot or any features within the bot without notice.

**7. Termination**
* We may terminate or suspend your access to the bot immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.

**8. Changes to Terms**
* We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Use on this page.

**9. Indemnification**
* You agree to indemnify and hold harmless the bot owner and operators from any claims, damages, or expenses arising from your use of the bot.

**10. Contact Information**
* If you have any questions about these Terms, please contact us at [cuz@cuzeth.com](mailto://cuz@cuzeth.com).

##### By using Da Boiz Bot, you acknowledge that you have read and understood these Terms of Use and agree to be bound by them.
`;

// Da Boiz Privacy Policy
export const daBoizPrivacyPolicy = `
# Da Boiz Privacy Policy

**1. Introduction**
* Welcome to Da Boiz Bot! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Discord bot. By using Da Boiz Bot, you agree to the collection and use of information in accordance with this policy.

**2. Information Collection**
* Da Boiz Bot collects the following types of information:

* - **User Data:** This includes your Discord user ID.
* - **Server Data:** This includes server IDs.
* - **Channel Data:** This includes channel IDs when using moderation/logging features.
* - **Role Data:** This includes role IDs when using moderation/logging features.
* - **Mod Action Data:** This includes reasons provided for moderation actions taken via the bot.

**3. Use of Information**
* We use the collected information to:

* - Provide and maintain the bot's functionality.
* - Improve and personalize the bot experience.
* - Facilitate moderation actions and record-keeping.
* - Monitor usage and detect, prevent, and address technical issues.

Specifically:

* User and Server IDs are used to identify and manage bot interactions within Discord servers.
* Moderation action reasons are stored for record-keeping and accountability purposes.

**4. Data Sharing and Disclosure**
* We do not share or disclose your personal information with third parties except in the following circumstance:

* - **Legal Requirements:** If required by law or in response to valid requests by public authorities (e.g., a court or government agency).

**5. Data Security**
* We prioritize the security of your data. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.

**6. Data Retention**
* We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy and to comply with legal obligations. After that, we will delete or anonymize your information.

**7. Your Data Protection Rights**
* Depending on your location, you may have the following rights regarding your personal data:

* - **Right to Access:** You have the right to request copies of your personal data.
* - **Right to Rectification:** You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
* - **Right to Erasure:** You have the right to request that we erase your personal data, under certain conditions.

**8. Liability Limitation**
* While we do our best to protect your information and ensure the security of our systems, we cannot be held responsible for any security breaches or damages resulting from such incidents. Users acknowledge and accept this limitation of liability when using Da Boiz Bot.

**9. Changes to This Privacy Policy**
* We may update our Privacy Policy from time to time. We will notify users of any changes by posting the new Privacy Policy on this page.

**10. Contact Us**
* If you have any questions about this Privacy Policy, please contact us at [cuz@cuzeth.com](mailto://cuz@cuzeth.com).
`

// Project Data
export const projectsData = [
    {
        id: 1,
        title: "QR Code Generator",
        description: "A modern QR code generator with customization options and download functionality.",
        image: "qrcode",
        technologies: ["Astro", "TypeScript", "PWA"],
        liveLink: "https://qr.cuzeth.com",
        repoLink: 'https://github.com/Cuzeth/qr-generator-pwa'
    },
    {
        id: 2,
        title: "Memorable Password Generator",
        description: "A web app that generates memorable and secure passwords. Built with Flask and styled-components for a modern UI.",
        image: "key",
        technologies: ["Flask", "Python", "CSS", "Vercel"],
        liveLink: "https://pwgen.cuzeth.com",
        repoLink: "https://github.com/Cuzeth/memorable-password-generator"
    },
    {
        id: 3,
        title: "URL Shortener",
        description: "A personal URL shortener service built with Next.js and PostgreSQL.",
        image: "link",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        repoLink: "https://github.com/Cuzeth/cuzurl"
    },
    {
        id: 4,
        title: "Tetris Solver",
        description: "An AI-powered decision-making system that evaluates the best placement for each piece based on a scoring system.",
        image: "puzzle",
        technologies: ["Python", "Numpy", "AI"],
        repoLink: "https://github.com/Cuzeth/tetris-solver"
    },
    {
        id: 5,
        title: "This Site",
        description: "A personal portfolio site built with Next.JS, TypeScript, and TailwindCSS to showcase all projects and achievements by Cuzeth.",
        image: "site",
        technologies: ["Next.JS", "TypeScript", "TailwindCSS"],
        repoLink: "https://github.com/Cuzeth/cuzethcom"
    },
    {
        id: 6,
        title: "Da Boiz Bot",
        description: "A free and open-source Discord bot developed with Discord.js, TypeScript, and SQL, offering a wide range of features including moderation tools, helpful utilities, and engaging fun commands for community enhancement.",
        image: "discord",
        technologies: ["Discord.js", "TypeScript", "SQL"],
        repoLink: "https://github.com/Cuzeth/da-boiz-bot"
    },
    {
        id: 7,
        title: "Tailosive Gaming (DISCONTINUED)",
        description: "Previous highlights I made for Tailosive Gaming.",
        image: "video",
        technologies: ["Adobe After Effects", "Motion Graphics", "Video Editing"],
        liveLink: "https://youtube.com/playlist?list=PLLeQ5Dw04o_L3qjqHRhkZIaUuZwXCT-6d"
    }
];