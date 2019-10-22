const compliments = [
    "You're beatiful 😊",
    "You're gorgeous",
    "I love your butt 😉",
    "You mean the world to me 🌎",
    "I love you more than computers 💻",
    "You're so smart!",
    "I'm so lucky to have met you ❤",
    "I love your dorky humor",
    "Your eyes are so beautiful",
    "You always smell nice",
    "Your smile lights up the room",
    "You're beautiful inside and out!",
    "Your fashion sense is 👌",
    "Your eyebrows are always on point",
    "You always know how to help people out",
    "You're always there for me when I need you",
    "You make a great friend",
    "I can never stay mad at you for long",
    "It's adorable when you make funny faces",
    "I love when you talk about things you're passionate about",
    "You're special to so many people",
    "You're so sexy 😍",
    "You have an amazing body 😉",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

export default function RandomCompliment() {
    return compliments[Math.round(Math.random() * compliments.length)];
}

export function Compliment(i) {
    return compliments[i];
}
