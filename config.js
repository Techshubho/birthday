// BaDuAoTian October 10, 2019 - https://github.com/AJLoveChina/birthday
var config = {
    // The length of each sentence can be arbitrary. You can write ten or twenty sentences if you like.
    // Try to keep each sentence within 15 words for better display effects.
    texts: [
        "To my dearest",           // Remember, the last character of each sentence must be an English comma. It's essential!
        "Firend, Aarohii",                // Same here...
        "Today is your birthday!",
        "It's already so late that",
        "I am making something for you!",
        "I want to make your birthday little more special",
        "So Be Happy, Keep Smiling",
        "Wish you Happyyyy Birthday :),",
        "Janamdin Ki Hardik Shubhkamnaye, Aarohii",
        "Shubho Jonmo Din, Aarohii",

    ],
    /**
     * You can omit the 'imgs' section, but if you want to use images, they must follow the format below:
     * "Corresponding sentence, must be exactly the same": "Image URL, you can place the image in the 'imgs' folder"
     * For example:
     * "To my dearest": "./imgs/xiaokeai.jpg"
     *
     * If you don't want to use images, you can simply put two slashes at the beginning of each line like this:
     * "// Today is your birthday": "./imgs/birthday.jpg"
     * The image for "Today is your birthday" will not be displayed:)
     * Tip: Images are best in a square or near-square shape for better visual effects.
     */
    imgs: {
        "To my dearest": "./imgs/a.jpg",
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    // Button text descriptions. The following are the default button texts in English; you can change them to your liking.
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Colors",
        balloons_flying: "Something's missing",
        cake_fadein: "Cake?",
        light_candle: "Candle?",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
    }
};
