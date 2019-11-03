const compliments = [
    "You're gorgeous",
    "I love your butt 😉",
    "You mean the world to me 🌎",
    "I love you more than computers 💻",
    "Your fashion sense is 👌",
    "You're so smart!",
    "Your eyebrows are always on point",
    "I'm so lucky to have met you ❤",
    "You always know how to help people out",
    "You always smell nice",
    "I love your dorky humor",
    "You're always there for me when I need you",
    "Your eyes are so beautiful",
    "You make a great friend",
    "I can never stay mad at you for long",
    "You're beautiful inside and out!",
    "Your smile lights up the room",
    "You're beatiful 😊",
    "Happy anniversary! 🎉🎈🎊",
    "You're usually right 🤐",
    "You're so sexy 😍",
    "You always make time for me",
    "I love when you talk about things you're passionate about",
    "You're special to so many people",
    "It's adorable when you make funny faces",
    "You give amazing hugs ❤",
    "You put others first",
    "When you want something you don't give up",
    "You have an amazing body 😉",
    "You can always cheer me up",
    "You're such a loving person",
    "You're the most beautiful girl I've ever seen ❤"
];

export function RandomCompliment() {
    return compliments[Math.round(Math.random() * compliments.length)];
}

export function Compliment(i) {
    return compliments[i];
}
