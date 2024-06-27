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
    topLine: 'Beta Access',
    headline: 'Multipurpose Discord Bot, completely free.',
    description: 'Da Boiz Bot is a Discord bot that I created using TypeScript. It is currently closed source in beta.',
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
