export const ICON_STORY_IMAGE_RESOURCE = {
    1: require('./resource/images/IconStory/1.png'),
    2: require('./resource/images/IconStory/2.png'),
    3: require('./resource/images/IconStory/3.png'),
    4: require('./resource/images/IconStory/4.png'),
    5: require('./resource/images/IconStory/5.png'),
    6: require('./resource/images/IconStory/6.png'),
    7: require('./resource/images/IconStory/binoculars.png'),
    8: require('./resource/images/IconStory/hamburgers.png'),
    9: require('./resource/images/IconStory/magnifying-glass.png'),
    10: require('./resource/images/IconStory/milo.png'),
    11: require('./resource/images/IconStory/mushrooms.png'),
    12: require('./resource/images/IconStory/roy.png'),
    13: require('./resource/images/IconStory/toy-bone.png'),

}

export const ICON_STORY_AUDIO_RESOURCE = {
    1: require('./resource/audios/IconStory/binoculars.mp3'),
    2: require('./resource/audios/IconStory/danger-in-the-jungle.mp3'),
    3: require('./resource/audios/IconStory/hamburgers.mp3'),
    4: require('./resource/audios/IconStory/magnifying-glass.mp3'),
    5: require('./resource/audios/IconStory/milo-was-chasing-a-rabit.mp3'),
    6: require('./resource/audios/IconStory/milo.mp3'),
    7: require('./resource/audios/IconStory/mushrooms.mp3'),
    8: require('./resource/audios/IconStory/no-cried-roy.mp3'),
    9: require('./resource/audios/IconStory/roy-and-milo-went-to-the-jungle-to-explore.mp3'),
    10: require('./resource/audios/IconStory/roy-found-many-strangle-plant.mp3'),
    11: require('./resource/audios/IconStory/roy.mp3'),
    12: require('./resource/audios/IconStory/sure-said-roy-with-a-smile.mp3'),
    13: require('./resource/audios/IconStory/toy-bone.mp3'),
}
const DEMO_PAGE_DATA_1 = {
    ID: 0,
    type: 0, //static page
    background: 1,
    title: ["DANGER IN THE JUNGLE"],
    titleAudio: [2],
    titleAudioDuration: [1515],
    sync_data: [
        [
            {
                "e": 590,
                "s": 0,
                "te": 5,
                "ts": 0,
                "w": "DANGER"
            },
            {
                "e": 780,
                "s": 590,
                "te": 8,
                "ts": 7,
                "w": "IN"
            },
            {
                "e": 910,
                "s": 780,
                "te": 12,
                "ts": 10,
                "w": "THE"
            },
            {
                "e": 1370,
                "s": 910,
                "te": 19,
                "ts": 14,
                "w": "JUNGLE"
            }
        ]
    ],
    touchables: [
        {
            name: "Roy",
            audio: 11,
            position: {
                x: 96,
                y: 72
            },
            width: 41,
            height: 116
        },
        {
            name: "Milo",
            audio: 6,
            position: {
                x: 227,
                y: 101
            },
            width: 43,
            height: 84
        },
        {
            name: "Magnifying glass",
            audio: 4,
            position: {
                x: 348,
                y: 101
            },
            width: 70,
            height: 85
        },
        {
            name: "Toy bone",
            audio: 13,
            position: {
                x: 500,
                y: 127
            },
            width: 75,
            height: 59
        },
        {
            name: "Binoculars",
            audio: 1,
            position: {
                x: 160,
                y: 269
            },
            width: 71,
            height: 71
        },
        {
            name: "Mushrooms",
            audio: 7,
            position: {
                x: 294,
                y: 270
            },
            width: 61,
            height: 70
        },
        {
            name: "Hamburgers",
            audio: 3,
            position: {
                x: 421,
                y: 280
            },
            width: 87,
            height: 59
        },
    ]
}

const DEMO_PAGE_DATA_2 = {
    ID: 1,
    type: 1, //icon page
    background: 2,
    backgroundConfig: {
        x: 0.5,
        y: 0.2,
        w: 0.8,
        h: 0.8
    },
    title: ['Roy and Milo went to the jungle to explore. Milo brought his toy bone. Roy brought his binoculars and a magnifying glass. They were very excited!'],
    titleAudio: [9],
    titleAudioDuration: [12826],
    sync_data: 
        [
            {
                "e": 490,
                "s": 0,
                "te": 2,
                "ts": 0,
                "i": 1,
                "w": "Roy"
            },
            {
                "e": 780,
                "s": 490,
                "te": 6,
                "ts": 4,
                "i": 0,
                "w": "and"
            },
            {
                "e": 1420,
                "s": 780,
                "te": 11,
                "ts": 8,
                "i": 1,
                "w": "Milo"
            },
            {
                "e": 1680,
                "s": 1420,
                "te": 16,
                "ts": 13,
                "i": 0,
                "w": "went"
            },
            {
                "e": 1860,
                "s": 1680,
                "te": 19,
                "ts": 18,
                "i": 0,
                "w": "to"
            },
            {
                "e": 2050,
                "s": 1860,
                "te": 23,
                "ts": 21,
                "i": 0,
                "w": "the"
            },
            {
                "e": 2480,
                "s": 2050,
                "te": 30,
                "ts": 25,
                "i": 0,
                "w": "jungle"
            },
            {
                "e": 2670,
                "s": 2480,
                "te": 33,
                "ts": 32,
                "i": 0,
                "w": "to"
            },
            {
                "e": 3590,
                "s": 2670,
                "te": 42,
                "ts": 35,
                "i": 0,
                "w": "explore."
            },
            {
                "e": 4470,
                "s": 3590,
                "te": 47,
                "ts": 44,
                "i": 1,
                "w": "Milo"
            },
            {
                "e": 4770,
                "s": 4470,
                "te": 55,
                "ts": 49,
                "i": 0,
                "w": "brought"
            },
            {
                "e": 5030,
                "s": 4770,
                "te": 59,
                "ts": 57,
                "i": 0,
                "w": "his"
            },
            {
                "e": 6160,
                "s": 5030,
                "te": 69,
                "ts": 61,
                "i": 1,
                "w": "toy bone."
            },
            {
                "e": 6890,
                "s": 6160,
                "te": 73,
                "ts": 71,
                "i": 1,
                "w": "Roy"
            },
            {
                "e": 7190,
                "s": 6890,
                "te": 81,
                "ts": 75,
                "i": 0,
                "w": "brought"
            },
            {
                "e": 7480,
                "s": 7190,
                "te": 85,
                "ts": 83,
                "i": 0,
                "w": "his"
            },
            {
                "e": 8410,
                "s": 7480,
                "te": 96,
                "ts": 87,
                "i": 1,
                "w": "binoculars"
            },
            {
                "e": 8660,
                "s": 8410,
                "te": 100,
                "ts": 98,
                "i": 0,
                "w": "and"
            },
            {
                "e": 8780,
                "s": 8660,
                "te": 102,
                "ts": 102,
                "i": 0,
                "w": "a"
            },
            {
                "e": 9690,
                "s": 8780,
                "te": 113,
                "ts": 104,
                "i": 0,
                "w": "magnifying"
            },
            {
                "e": 10480,
                "s": 9690,
                "te": 120,
                "ts": 115,
                "i": 0,
                "w": "glass."
            },
            {
                "e": 10980,
                "s": 10480,
                "te": 125,
                "ts": 122,
                "i": 0,
                "w": "They"
            },
            {
                "e": 11140,
                "s": 10980,
                "te": 130,
                "ts": 127,
                "i": 0,
                "w": "were"
            },
            {
                "e": 11650,
                "s": 11140,
                "te": 135,
                "ts": 132,
                "i": 0,
                "w": "very"
            },
            {
                "e": 12960,
                "s": 11650,
                "te": 144,
                "ts": 137,
                "i": 0,
                "w": "excited!"
            }
        ],
    icons: [
        {
            name: "Roy",
            width: 26,
            height: 65,
            imageID: 12,
            audioID: 11
        },
        {
            name: "Milo",
            width: 44,
            height: 65,
            imageID: 10,
            audioID: 6
        },
        {
            name: "Toy Bone",
            width: 98,
            height: 65,
            imageID: 13,
            audioID: 13
        },
        {
            name: "Binoculars",
            width: 98,
            height: 65,
            imageID: 7,
            audioID: 1
        }
    ]
}

const DEMO_PAGE_DATA_3 = {
    ID: 2,
    type: 1, //icon page
    background: 3,
    backgroundConfig: {
        x: 0.15,
        y: 0.75,
        w: 0.3,
        h: 0.25
    },
    title: ['Roy found many strange plants, flowers, and trees in the jungle. With his magnifying glass, he found mushrooms. One was brown, one red with spots, and one was tall and white.'],
    titleAudio: [10],
    titleAudioDuration: [16848],
    sync_data: [
        {
            "e": 440,
            "s": 0,
            "te": 2,
            "ts": 0,
            "i": 1,
            "w": "Roy"
        },
        {
            "e": 830,
            "s": 440,
            "te": 8,
            "ts": 4,
            "i": 0,
            "w": "found"
        },
        {
            "e": 1230,
            "s": 830,
            "te": 13,
            "ts": 10,
            "i": 0,
            "w": "many"
        },
        {
            "e": 1940,
            "s": 1230,
            "te": 21,
            "ts": 15,
            "i": 0,
            "w": "strange"
        },
        {
            "e": 2790,
            "s": 1940,
            "te": 29,
            "ts": 23,
            "i": 0,
            "w": "plants,"
        },
        {
            "e": 3640,
            "s": 2790,
            "te": 38,
            "ts": 31,
            "i": 0,
            "w": "flowers,"
        },
        {
            "e": 3960,
            "s": 3640,
            "te": 42,
            "ts": 40,
            "i": 0,
            "w": "and"
        },
        {
            "e": 4500,
            "s": 3960,
            "te": 48,
            "ts": 44,
            "i": 0,
            "w": "trees"
        },
        {
            "e": 4630,
            "s": 4500,
            "te": 51,
            "ts": 50,
            "i": 0,
            "w": "in"
        },
        {
            "e": 4790,
            "s": 4630,
            "te": 55,
            "ts": 53,
            "i": 0,
            "w": "the"
        },
        {
            "e": 5550,
            "s": 4790,
            "te": 63,
            "ts": 57,
            "i": 0,
            "w": "jungle."
        },
        {
            "e": 6070,
            "s": 5550,
            "te": 68,
            "ts": 65,
            "i": 0,
            "w": "With"
        },
        {
            "e": 6380,
            "s": 6070,
            "te": 72,
            "ts": 70,
            "i": 0,
            "w": "his"
        },
        {
            "e": 7900,
            "s": 6380,
            "te": 90,
            "ts": 74,
            "i": 1,
            "w": "magnifying glass,"
        },
        {
            "e": 8270,
            "s": 7900,
            "te": 93,
            "ts": 92,
            "i": 0,
            "w": "he"
        },
        {
            "e": 8610,
            "s": 8270,
            "te": 99,
            "ts": 95,
            "i": 0,
            "w": "found"
        },
        {
            "e": 9810,
            "s": 8610,
            "te": 110,
            "ts": 101,
            "i": 1,
            "w": "mushrooms."
        },
        {
            "e": 10490,
            "s": 9810,
            "te": 114,
            "ts": 112,
            "i": 0,
            "w": "One"
        },
        {
            "e": 10890,
            "s": 10490,
            "te": 118,
            "ts": 116,
            "i": 0,
            "w": "was"
        },
        {
            "e": 11530,
            "s": 10890,
            "te": 125,
            "ts": 120,
            "i": 0,
            "w": "brown,"
        },
        {
            "e": 12170,
            "s": 11530,
            "te": 129,
            "ts": 127,
            "i": 0,
            "w": "one"
        },
        {
            "e": 12620,
            "s": 12170,
            "te": 133,
            "ts": 131,
            "i": 0,
            "w": "red"
        },
        {
            "e": 12820,
            "s": 12620,
            "te": 138,
            "ts": 135,
            "i": 0,
            "w": "with"
        },
        {
            "e": 13850,
            "s": 12820,
            "te": 145,
            "ts": 140,
            "i": 0,
            "w": "spots,"
        },
        {
            "e": 14390,
            "s": 13850,
            "te": 149,
            "ts": 147,
            "i": 0,
            "w": "and"
        },
        {
            "e": 14700,
            "s": 14390,
            "te": 153,
            "ts": 151,
            "i": 0,
            "w": "one"
        },
        {
            "e": 15090,
            "s": 14700,
            "te": 157,
            "ts": 155,
            "i": 0,
            "w": "was"
        },
        {
            "e": 15580,
            "s": 15090,
            "te": 162,
            "ts": 159,
            "i": 0,
            "w": "tall"
        },
        {
            "e": 15900,
            "s": 15580,
            "te": 166,
            "ts": 164,
            "i": 0,
            "w": "and"
        },
        {
            "e": 17280,
            "s": 15900,
            "te": 173,
            "ts": 168,
            "i": 0,
            "w": "white."
        }
    ],
    icons: [
        {
            name: "Roy",
            width: 26,
            height: 65,
            imageID: 12,
            audioID: 11
        },
        {
            name: "Magnifying glass",
            width: 50,
            height: 60,
            imageID: 9,
            audioID: 4
        },
        {
            name: "Mushrooms",
            width: 69,
            height: 46,
            imageID: 11,
            audioID: 7
        },
    ]
}

const DEMO_PAGE_DATA_4 = {
    ID: 3,
    type: 1,
    background: 4,
    backgroundConfig: {
        x: 0.25,
        y: 0.6,
        w: 0.5,
        h: 0.5
    },
    title: ['Milo was chasing a rabbit, but he stopped to sniff the mushrooms with his nose. He wagged his tail because he was hungry and thought the mushrooms would be a good snack.'],
    titleAudioDuration: [13714],
    titleAudio: [5],
    sync_data: [
        {
            "e": 650,
            "s": 0,
            "te": 3,
            "ts": 0,
            "i": 1,
            "w": "Milo"
        },
        {
            "e": 900,
            "s": 650,
            "te": 7,
            "ts": 5,
            "i": 0,
            "w": "was"
        },
        {
            "e": 1500,
            "s": 900,
            "te": 15,
            "ts": 9,
            "i": 0,
            "w": "chasing"
        },
        {
            "e": 1750,
            "s": 1500,
            "te": 17,
            "ts": 17,
            "i": 0,
            "w": "a"
        },
        {
            "e": 2550,
            "s": 1750,
            "te": 25,
            "ts": 19,
            "i": 0,
            "w": "rabbit,"
        },
        {
            "e": 3020,
            "s": 2550,
            "te": 29,
            "ts": 27,
            "i": 0,
            "w": "but"
        },
        {
            "e": 3200,
            "s": 3020,
            "te": 32,
            "ts": 31,
            "i": 0,
            "w": "he"
        },
        {
            "e": 3780,
            "s": 3200,
            "te": 40,
            "ts": 34,
            "i": 0,
            "w": "stopped"
        },
        {
            "e": 4010,
            "s": 3780,
            "te": 43,
            "ts": 42,
            "i": 0,
            "w": "to"
        },
        {
            "e": 4440,
            "s": 4010,
            "te": 49,
            "ts": 45,
            "i": 0,
            "w": "sniff"
        },
        {
            "e": 4650,
            "s": 4440,
            "te": 53,
            "ts": 51,
            "i": 0,
            "w": "the"
        },
        {
            "e": 5270,
            "s": 4650,
            "te": 63,
            "ts": 55,
            "i": 1,
            "w": "mushrooms"
        },
        {
            "e": 5460,
            "s": 5270,
            "te": 68,
            "ts": 65,
            "i": 0,
            "w": "with"
        },
        {
            "e": 5690,
            "s": 5460,
            "te": 72,
            "ts": 70,
            "i": 0,
            "w": "his"
        },
        {
            "e": 6590,
            "s": 5690,
            "te": 78,
            "ts": 74,
            "i": 0,
            "w": "nose."
        },
        {
            "e": 7190,
            "s": 6590,
            "te": 81,
            "ts": 80,
            "i": 0,
            "w": "He"
        },
        {
            "e": 7600,
            "s": 7190,
            "te": 88,
            "ts": 83,
            "i": 0,
            "w": "wagged"
        },
        {
            "e": 7890,
            "s": 7600,
            "te": 92,
            "ts": 90,
            "i": 0,
            "w": "his"
        },
        {
            "e": 8260,
            "s": 7890,
            "te": 97,
            "ts": 94,
            "i": 0,
            "w": "tail"
        },
        {
            "e": 8690,
            "s": 8260,
            "te": 105,
            "ts": 99,
            "i": 0,
            "w": "because"
        },
        {
            "e": 8810,
            "s": 8690,
            "te": 108,
            "ts": 107,
            "i": 0,
            "w": "he"
        },
        {
            "e": 9010,
            "s": 8810,
            "te": 112,
            "ts": 110,
            "i": 0,
            "w": "was"
        },
        {
            "e": 9860,
            "s": 9010,
            "te": 119,
            "ts": 114,
            "i": 0,
            "w": "hungry"
        },
        {
            "e": 10360,
            "s": 9860,
            "te": 123,
            "ts": 121,
            "i": 0,
            "w": "and"
        },
        {
            "e": 10680,
            "s": 10360,
            "te": 131,
            "ts": 125,
            "i": 0,
            "w": "thought"
        },
        {
            "e": 10850,
            "s": 10680,
            "te": 135,
            "ts": 133,
            "i": 0,
            "w": "the"
        },
        {
            "e": 11540,
            "s": 10850,
            "te": 145,
            "ts": 137,
            "i": 1,
            "w": "mushrooms"
        },
        {
            "e": 11800,
            "s": 11540,
            "te": 151,
            "ts": 147,
            "i": 0,
            "w": "would"
        },
        {
            "e": 12100,
            "s": 11800,
            "te": 154,
            "ts": 153,
            "i": 0,
            "w": "be"
        },
        {
            "e": 12440,
            "s": 12100,
            "te": 156,
            "ts": 156,
            "i": 0,
            "w": "a"
        },
        {
            "e": 12720,
            "s": 12440,
            "te": 161,
            "ts": 158,
            "i": 0,
            "w": "good"
        },
        {
            "e": 14200,
            "s": 12720,
            "te": 168,
            "ts": 163,
            "i": 0,
            "w": "snack."
        }
    ],
    icons: [
        {
            name: "Mushrooms",
            width: 69,
            height: 46,
            imageID: 11,
            audioID: 7
        },
        {
            name: "Milo",
            width: 44,
            height: 65,
            imageID: 10,
            audioID: 6
        },
    ]

}

const DEMO_PAGE_DATA_5 = {
    ID: 4,
    type: 1,
    background: 5,
    backgroundConfig: {
        x: 0.5,
        y: 0.7,
        w: 0.3,
        h: 0.3
    },
    title: ["“No!” cried Roy. “Don’t eat those mushrooms! They can make you sick!” Milo stopped just in time. “But I am hungry,” he whined. “Do you have some food in your pack?”"],
    titleAudioDuration: [16848],
    titleAudio: [8],
    sync_data: [
        {
            "e": 1130,
            "s": 0,
            "te": 4,
            "ts": 0,
            "i": 0,
            "w": "“No!”"
        },
        {
            "e": 1660,
            "s": 1130,
            "te": 10,
            "ts": 6,
            "i": 0,
            "w": "cried"
        },
        {
            "e": 2570,
            "s": 1660,
            "te": 15,
            "ts": 12,
            "i": 1,
            "w": "Roy."
        },
        {
            "e": 3330,
            "s": 2570,
            "te": 22,
            "ts": 17,
            "i": 0,
            "w": "“Don’t"
        },
        {
            "e": 3600,
            "s": 3330,
            "te": 26,
            "ts": 24,
            "i": 0,
            "w": "eat"
        },
        {
            "e": 3920,
            "s": 3600,
            "te": 32,
            "ts": 28,
            "i": 0,
            "w": "those"
        },
        {
            "e": 4960,
            "s": 3920,
            "te": 43,
            "ts": 34,
            "i": 1,
            "w": "mushrooms!"
        },
        {
            "e": 5310,
            "s": 4960,
            "te": 48,
            "ts": 45,
            "i": 0,
            "w": "They"
        },
        {
            "e": 5510,
            "s": 5310,
            "te": 52,
            "ts": 50,
            "i": 0,
            "w": "can"
        },
        {
            "e": 5770,
            "s": 5510,
            "te": 57,
            "ts": 54,
            "i": 0,
            "w": "make"
        },
        {
            "e": 6010,
            "s": 5770,
            "te": 61,
            "ts": 59,
            "i": 0,
            "w": "you"
        },
        {
            "e": 6920,
            "s": 6010,
            "te": 68,
            "ts": 63,
            "i": 0,
            "w": "sick!”"
        },
        {
            "e": 7920,
            "s": 6920,
            "te": 73,
            "ts": 70,
            "i": 1,
            "w": "Milo"
        },
        {
            "e": 8640,
            "s": 7920,
            "te": 81,
            "ts": 75,
            "i": 0,
            "w": "stopped"
        },
        {
            "e": 8980,
            "s": 8640,
            "te": 86,
            "ts": 83,
            "i": 0,
            "w": "just"
        },
        {
            "e": 9260,
            "s": 8980,
            "te": 89,
            "ts": 88,
            "i": 0,
            "w": "in"
        },
        {
            "e": 10140,
            "s": 9260,
            "te": 95,
            "ts": 91,
            "i": 0,
            "w": "time."
        },
        {
            "e": 10590,
            "s": 10140,
            "te": 100,
            "ts": 97,
            "i": 0,
            "w": "“But"
        },
        {
            "e": 10730,
            "s": 10590,
            "te": 102,
            "ts": 102,
            "i": 0,
            "w": "I"
        },
        {
            "e": 11050,
            "s": 10730,
            "te": 105,
            "i": 0,
            "ts": 104,
            "w": "am"
        },
        {
            "e": 12250,
            "s": 11050,
            "te": 114,
            "ts": 107,
            "i": 0,
            "w": "hungry,”"
        },
        {
            "e": 12740,
            "s": 12250,
            "te": 117,
            "ts": 116,
            "i": 0,
            "w": "he"
        },
        {
            "e": 13770,
            "s": 12740,
            "te": 125,
            "ts": 119,
            "i": 0,
            "w": "whined."
        },
        {
            "e": 14430,
            "s": 13770,
            "te": 129,
            "ts": 127,
            "i": 0,
            "w": "“Do"
        },
        {
            "e": 14650,
            "s": 14430,
            "te": 133,
            "i": 0,
            "ts": 131,
            "w": "you"
        },
        {
            "e": 14930,
            "s": 14650,
            "te": 138,
            "i": 0,
            "ts": 135,
            "w": "have"
        },
        {
            "e": 15310,
            "s": 14930,
            "i": 0,
            "te": 143,
            "ts": 140,
            "w": "some"
        },
        {
            "e": 15690,
            "i": 0,
            "s": 15310,
            "te": 148,
            "ts": 145,
            "w": "food"
        },
        {
            "e": 15860,
            "s": 15690,
            "te": 151,
            "i": 0,
            "ts": 150,
            "w": "in"
        },
        {
            "e": 16060,
            "s": 15860,
            "i": 0,
            "te": 156,
            "ts": 153,
            "w": "your"
        },
        {
            "e": 17680,
            "i": 0,
            "s": 16060,
            "te": 163,
            "ts": 158,
            "w": "pack?”"
        }
    ],
    icons: [
        {
            name: "Mushrooms",
            width: 69,
            height: 46,
            imageID: 11,
            audioID: 7
        },
        {
            name: "Milo",
            width: 44,
            height: 65,
            imageID: 10,
            audioID: 6
        },
        {
            name: "Roy",
            width: 26,
            height: 65,
            imageID: 12,
            audioID: 11
        },
    ]
}

const DEMO_PAGE_DATA_6 = {
    ID: 5,
    type: 1,
    background: 6,
    backgroundConfig: {
        x: 0.15,
        y: 0.75,
        w: 0.3,
        h: 0.25
    },
    title: ["“Sure!” said Roy with a smile. “Mom made us both some hamburgers!” Roy took one from his pack and gave it to Milo. “This is much better than bad mushrooms!” Milo barked"],
    titleAudio: [12],
    titleAudioDuration: [16457],
    sync_data: [
        {
            "e": 1180,
            "s": 0,
            "te": 6,
            "ts": 0,
            "i": 0,
            "w": "“Sure!”"
        },
        {
            "e": 1810,
            "s": 1180,
            "te": 11,
            "ts": 8,
            "i": 0,
            "w": "said"
        },
        {
            "e": 2500,
            "s": 1810,
            "te": 15,
            "i": 1,
            "ts": 13,
            "w": "Roy"
        },
        {
            "e": 2800,
            "s": 2500,
            "te": 20,
            "i": 0,
            "ts": 17,
            "w": "with"
        },
        {
            "e": 2970,
            "s": 2800,
            "te": 22,
            "i": 0,
            "ts": 22,
            "w": "a"
        },
        {
            "e": 3870,
            "s": 2970,
            "i": 0,
            "te": 29,
            "ts": 24,
            "w": "smile."
        },
        {
            "e": 4560,
            "s": 3870,
            "te": 34,
            "i": 0,
            "ts": 31,
            "w": "“Mom"
        },
        {
            "e": 4940,
            "s": 4560,
            "i": 0,
            "te": 39,
            "ts": 36,
            "w": "made"
        },
        {
            "e": 5210,
            "i": 0,
            "s": 4940,
            "te": 42,
            "ts": 41,
            "w": "us"
        },
        {
            "e": 5620,
            "s": 5210,
            "te": 47,
            "i": 0,
            "ts": 44,
            "w": "both"
        },
        {
            "e": 5920,
            "s": 5620,
            "te": 52,
            "i": 0,
            "ts": 49,
            "w": "some"
        },
        {
            "e": 7500,
            "s": 5920,
            "i": 1,
            "te": 65,
            "ts": 54,
            "w": "hamburgers!”"
        },
        {
            "e": 8160,
            "s": 7500,
            "te": 69,
            "ts": 67,
            "i": 1,
            "w": "Roy"
        },
        {
            "e": 8350,
            "s": 8160,
            "te": 74,
            "i": 0,
            "ts": 71,
            "w": "took"
        },
        {
            "e": 8720,
            "i": 0,
            "s": 8350,
            "te": 78,
            "ts": 76,
            "w": "one"
        },
        {
            "e": 8870,
            "s": 8720,
            "te": 83,
            "ts": 80,
            "i": 0,
            "w": "from"
        },
        {
            "e": 9190,
            "s": 8870,
            "i": 0,
            "te": 87,
            "ts": 85,
            "w": "his"
        },
        {
            "e": 9610,
            "i": 0,
            "s": 9190,
            "te": 92,
            "ts": 89,
            "w": "pack"
        },
        {
            "e": 9920,
            "s": 9610,
            "te": 96,
            "i": 0,
            "ts": 94,
            "w": "and"
        },
        {
            "e": 10120,
            "s": 9920,
            "i": 0,
            "te": 101,
            "ts": 98,
            "w": "gave"
        },
        {
            "e": 10290,
            "s": 10120,
            "i": 0,
            "te": 104,
            "ts": 103,
            "w": "it"
        },
        {
            "e": 10440,
            "s": 10290,
            "i": 0,
            "te": 107,
            "ts": 106,
            "w": "to"
        },
        {
            "e": 11580,
            "s": 10440,
            "i": 1,
            "te": 113,
            "ts": 109,
            "w": "Milo."
        },
        {
            "e": 12150,
            "s": 11580,
            "i": 0,
            "te": 119,
            "ts": 115,
            "w": "“This"
        },
        {
            "e": 12370,
            "s": 12150,
            "i": 0,
            "te": 122,
            "ts": 121,
            "w": "is"
        },
        {
            "e": 12920,
            "s": 12370,
            "te": 127,
            "ts": 124,
            "i": 0,
            "w": "much"
        },
        {
            "e": 13260,
            "s": 12920,
            "te": 134,
            "i": 0,
            "ts": 129,
            "w": "better"
        },
        {
            "e": 13560,
            "i": 0,
            "s": 13260,
            "te": 139,
            "ts": 136,
            "w": "than"
        },
        {
            "e": 13880,
            "s": 13560,
            "i": 0,
            "te": 143,
            "ts": 141,
            "w": "bad"
        },
        {
            "e": 15010,
            "s": 13880,
            "te": 155,
            "ts": 145,
            "i": 1,
            "w": "mushrooms!”"
        },
        {
            "e": 15590,
            "s": 15010,
            "te": 160,
            "ts": 157,
            "i": 1,
            "w": "Milo"
        },
        {
            "e": 16700,
            "s": 15590,
            "i": 0,
            "te": 168,
            "ts": 162,
            "w": "barked."
        }
    ],
    icons: [
        {
            name: "Mushrooms",
            width: 69,
            height: 46,
            imageID: 11,
            audioID: 7
        },
        {
            name: "Milo",
            width: 44,
            height: 65,
            imageID: 10,
            audioID: 6
        },
        {
            name: "Roy",
            width: 26,
            height: 65,
            imageID: 12,
            audioID: 11
        },
        {
            name: "Hamburgers",
            width: 60,
            height: 30,
            imageID: 8,
            audioID: 3
        },
    ]
}
export const DEMO_ICON_STORY = {
    id: 421,
    storyName: "Danger in the Jungle",
    level: "B",
    author: "Mary Blake",
    illustrator: "Lynk Ness",
    type: 1,
    pages: [
        DEMO_PAGE_DATA_1,
        DEMO_PAGE_DATA_2,
        DEMO_PAGE_DATA_3,
        DEMO_PAGE_DATA_4,
        DEMO_PAGE_DATA_5,
        DEMO_PAGE_DATA_6
    ]
}