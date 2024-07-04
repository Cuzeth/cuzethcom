import logo from '../../public/images/Logo.svg';
import myWork from '../../public/images/mywork.svg';
import password from '../../public/images/password.svg';
import daboiz from '../../public/images/DaBoiz.svg';
import about from '../../public/images/about.png';
import shorturl from '../../public/images/shorturl.svg';

// Template
export interface HeroData {
    lightBg: boolean,
    lightText: boolean,
    lightTextDesc: boolean,
    topLine: string,
    headline: string,
    description?: string,
    buttonLabel?: string,
    img?: any,
    alt?: string | any,
    imgStart?: string,
    linkTo?: string | any,
    sendTo?: string,
    videoURL?: string,
};

// Home
export const homeObjOne: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'CUZETH',
    headline: 'Welcome',
    // description: 'noooo my airpods',
    // buttonLabel: 'nooo',
    imgStart: '',
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
        "Although I don't have much to show off at the moment, I hope to expand this page as I grow and work on more projects.",
    img: myWork,
    imgStart: '',
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
    imgStart: 'start',
    img: password,
};

export const shortURL: HeroData = {
    lightBg: !startWhite,
    lightText: !startWhite,
    lightTextDesc: !startWhite,
    topLine: 'URL SHORTENER',
    headline: 'Personal URL shortener',
    buttonLabel: 'CODE',
    sendTo: 'https://github.com/Cuzeth/cuzurl',
    // imgStart: 'start',
    img: shorturl,
};

export const tailosiveGaming: HeroData = {
    lightBg: startWhite,
    lightText: !startWhite,
    lightTextDesc: !startWhite,
    topLine: 'TAILOSIVE GAMING (DISCONTINUED)',
    headline: 'Previous highlights I made for Tailosive Gaming',
    buttonLabel: 'PLAYLIST',
    imgStart: 'start',
    sendTo: 'https://youtube.com/playlist?list=PLLeQ5Dw04o_L3qjqHRhkZIaUuZwXCT-6d',
    videoURL: 'https://www.youtube-nocookie.com/embed/Mf_RdWuf6e8'
};

// Da Boiz
export const daBoizObj: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'New Update',
    headline: 'Multipurpose Discord Bot, completely free.',
    description: 'Da Boiz Bot is a Discord bot that I created using TypeScript. It is free and open source.',
    buttonLabel: 'Invite',
    sendTo: 'https://discordapp.com/api/oauth2/authorize?client_id=636595833801801748&permissions=8&scope=bot%20applications.commands',
    imgStart: '',
    img: daboiz,
    alt: 'Da Boiz Bot',
};

// About Me
export const aboutObj: HeroData = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'ABOUT ME',
    headline: 'Hey!',
    description: `I'm Cuzeth, a ${calculateAge(new Date('2004-10-27T00:00:00'))} year old developer looking to major in Computer Science.\nI have a passion for technology, programming, and self teaching. I am actively expanding my expertise with these coding languages and frameworks with the projects I continue to pursue: JavaScript/TypeScript, MongoDB, React, Swift/SwiftUI, and C++.`,
    imgStart: '',
    img: about,
    alt: 'Website',
};

function calculateAge(birthday: Date) { // birthday is a date
    // @ts-ignore
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Da Boiz TOS
export const daBoizTOS = `
# Da Boiz Bot Terms of Use

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
# Privacy Policy for Da Boiz Bot

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