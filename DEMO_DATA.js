export const AUDIO_RESOURCE = {
    1: require('./resource/audios/apple.mp3'),
    2: require('./resource/audios/boiling-water.mp3'),
    3: require('./resource/audios/bowl.mp3'),
    4: require('./resource/audios/boy.mp3'),
    5: require('./resource/audios/carrot.mp3'),
    6: require('./resource/audios/cheese-grater.mp3'),
    7: require('./resource/audios/cheese.mp3'),
    8: require('./resource/audios/chopping-board.mp3'),
    9: require('./resource/audios/cooking-pot.mp3'),
    10: require('./resource/audios/cucumber.mp3'),
    11: require('./resource/audios/Don-t-forget-to-add-some-cheese!.mp3'),
    12: require('./resource/audios/dressing.mp3'),
    13: require('./resource/audios/egg.mp3'),
    14: require('./resource/audios/Finally-I-will-add-the-dressing..mp3'),
    15: require('./resource/audios/fork.mp3'),
    16: require('./resource/audios/frying-pan.mp3'),
    17: require('./resource/audios/gas-stove.mp3'),
    18: require('./resource/audios/Hey-do-you-want-to-eat-some-salads.mp3'),
    19: require('./resource/audios/I-will-boil-the-eggs-and-fry-the-pork.mp3'),
    20: require('./resource/audios/I-will-shred-some-lettuce.mp3'),
    21: require('./resource/audios/It-s-fun-to-make-something-together.-Now-let-s-enjoy!.mp3'),
    22: require('./resource/audios/knife.mp3'),
    23: require('./resource/audios/Let-s-make-a-salad-bowl.mp3'),
    24: require('./resource/audios/lettuce.mp3'),
    25: require('./resource/audios/Now-we-need-to-mix-them-together.mp3'),
    26: require('./resource/audios/Of-course-we-need-some-fruits-and-vegetables..mp3'),
    27: require('./resource/audios/pineapple.mp3'),
    28: require('./resource/audios/pork.mp3'),
    29: require('./resource/audios/salad-bowl.mp3'),
    30: require('./resource/audios/sink.mp3'),
    31: require('./resource/audios/Sounds-great.mp3'),
    32: require('./resource/audios/spatula.mp3'),
    33: require('./resource/audios/spoon.mp3'),
    34: require('./resource/audios/tap.mp3'),
    35: require('./resource/audios/The-salad-bowl-looks-so-delicious!.mp3')
}

export const IMAGE_RESOURCE = {
    1: require('./resource/images/Lg4oU6Aq4DxsWdwLByyCax1672904703767_trong.png'),
    2: require('./resource/images/uQx8vLnhByvU8BGfJnpxur1672904703648_trong.png'),
    3: require('./resource/images/j2FtITkWXWvEA2eeiolqNH1672904703836_trong.png'),
    4: require('./resource/images/sK2dF8gy6Ou6nAWXbfmQgL1672904703791_trong.png'),
    5: require('./resource/images/vcxJRLt9ebNd5KPtHWw1Gl1672904703709_trong.png'),
    6: require('./resource/images/mTslr1cBESgjHOKfuCbXVL1672904703734_trong.png'),
    7: require('./resource/images/m7ONzmMXmQkaJ8mj3jrSdI1672904703799_trong.png'),
    8: require('./resource/images/ZWSAJtLuPueiEa9JpFPyqy1672904703749_trong.png'),
    9: require('./resource/images/tyBrNbK7J3RQNyp5iFyOgk1672904703758_trong.png'),
    10: require('./resource/images/ONwVWDqBvuLzO9JRN2rmTH1672904703776_trong.png')
}


export const DEMO_PAGE_DATA_1 = {
    ID: 0,
    background: 1,
    title: ["Hey, do you want to eat some salads?"],
    titleAudio: [18],
    titleAudioDuration: [3672],
    type: 0,
    sync_data: [
       [ {
            "e": 900,
            "s": 0,
            "te": 3,
            "ts": 0,
            "w": "Hey,"
        },
        {
            "e": 1090,
            "s": 900,
            "te": 6,
            "ts": 5,
            "w": "do"
        },
        {
            "e": 1300,
            "s": 1090,
            "te": 10,
            "ts": 8,
            "w": "you"
        },
        {
            "e": 1660,
            "s": 1300,
            "te": 15,
            "ts": 12,
            "w": "want"
        },
        {
            "e": 1850,
            "s": 1660,
            "te": 18,
            "ts": 17,
            "w": "to"
        },
        {
            "e": 2100,
            "s": 1850,
            "te": 22,
            "ts": 20,
            "w": "eat"
        },
        {
            "e": 2450,
            "s": 2100,
            "te": 27,
            "ts": 24,
            "w": "some"
        },
        {
            "e": 3530,
            "s": 2450,
            "te": 35,
            "ts": 29,
            "w": "salads?"
        }]
    ],
    touchables: [
        {
            name: "Salad bowl",
            audio: 29,
            position: {
                x: 266,
                y: 96
            },
            width: 120,
            height: 67
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 174,
                y: 244
            },
            width: 92,
            height: 163
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 398,
                y: 243
            },
            width: 139,
            height: 160
        },
        {
            name: "Fork",
            audio: 15,
            position: {
                x: 348,
                y: 169
            },
            width: 55,
            height: 26
        },
        {
            name: "Spoon",
            audio: 33,
            position: {
                x: 247,
                y: 160
            },
            width: 53,
            height: 28
        }
    ]
}

export const DEMO_PAGE_DATA_2 = {
    ID: 1,
    background:2,
    type: 0,
    title: ["Let's make a salad bowl!", "Sounds great!"],
    titleAudio: [23, 31],
    titleAudioDuration: [2376, 1776],
    sync_data: [[
        {
            "e": 640,
            "s": 0,
            "te": 4,
            "ts": 0,
            "w": "Let's"
        },
        {
            "e": 930,
            "s": 640,
            "te": 9,
            "ts": 6,
            "w": "make"
        },
        {
            "e": 1060,
            "s": 930,
            "te": 11,
            "ts": 11,
            "w": "a"
        },
        {
            "e": 1780,
            "s": 1060,
            "te": 17,
            "ts": 13,
            "w": "salad"
        },
        {
            "e": 2300,
            "s": 1780,
            "te": 23,
            "ts": 19,
            "w": "bowl!"
        }
    ], 
    [
        {
            "e": 790,
            "s": 0,
            "te": 5,
            "ts": 0,
            "w": "Sounds"
        },
        {
            "e": 1690,
            "s": 790,
            "te": 12,
            "ts": 7,
            "w": "great!"
        }
    ]],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 176,
                y: 242
            },
            width: 116,
            height: 167
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 389,
                y: 221
            },
            width: 121,
            height: 188
        },
    ]
}

export const DEMO_PAGE_DATA_3 = {
    ID: 2,
    type: 0,
    background: 3,
    title: ["I will shred some lettuce."],
    titleAudio: [20],
    titleAudioDuration: [4200],
    sync_data: [[
        {
            "e": 350,
            "s": 0,
            "te": 0,
            "ts": 0,
            "w": "I"
        },
        {
            "e": 580,
            "s": 350,
            "te": 5,
            "ts": 2,
            "w": "will"
        },
        {
            "e": 980,
            "s": 580,
            "te": 11,
            "ts": 7,
            "w": "shred"
        },
        {
            "e": 1370,
            "s": 980,
            "te": 16,
            "ts": 13,
            "w": "some"
        },
        {
            "e": 2330,
            "s": 1370,
            "te": 25,
            "ts": 18,
            "w": "lettuce."
        }
    ]],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 364,
                y: 80
            },
            width: 116,
            height: 202
        },
        {
            name: "Lettuce",
            audio: 24,
            position: {
                x: 300,
                y: 246
            },
            width: 91,
            height: 30
        },
        {
            name: "Bowl",
            audio: 3,
            position: {
                x: 489,
                y: 263
            },
            width: 83,
            height: 52
        },
        {
            name: "Lettuce",
            audio: 24,
            position: {
                x: 506,
                y: 270
            },
            width: 50,
            height: 8
        },
        {
            name: "Chopping board",
            audio: 8,
            position: {
                x: 393,
                y: 299
            },
            width: 123,
            height: 59
        },
        {
            name: "Lettuce",
            audio: 24,
            position: {
                x: 408,
                y: 308
            },
            width: 63,
            height: 37
        },
        {
            name: "Knife",
            audio: 22,
            position: {
                x: 431,
                y: 299
            },
            width: 25,
            height: 20
        },
        {
            name: "Bowl",
            audio: 3,
            position: {
                x: 304,
                y: 275
            },
            width: 79,
            height: 55
        },
        {
            name: "Sink",
            audio: 30,
            position: {
                x: 82,
                y: 302
            },
            width: 224,
            height: 104
        },
        {
            name: "Tap",
            audio: 34,
            position: {
                x: 150,
                y: 331
            },
            width: 40,
            height: 78
        }   
    ]
}

export const DEMO_PAGE_DATA_4 = {
    ID: 3,
    background: 4,
    type: 0,
    title: ["I will boil the eggs and fry the pork."],
    titleAudio: [19],
    titleAudioDuration: [3768],
    sync_data: [[
        {
            "e": 370,
            "s": 0,
            "te": 0,
            "ts": 0,
            "w": "I"
        },
        {
            "e": 660,
            "s": 370,
            "te": 5,
            "ts": 2,
            "w": "will"
        },
        {
            "e": 1150,
            "s": 660,
            "te": 10,
            "ts": 7,
            "w": "boil"
        },
        {
            "e": 1330,
            "s": 1150,
            "te": 14,
            "ts": 12,
            "w": "the"
        },
        {
            "e": 2010,
            "s": 1330,
            "te": 19,
            "ts": 16,
            "w": "eggs"
        },
        {
            "e": 2390,
            "s": 2010,
            "te": 23,
            "ts": 21,
            "w": "and"
        },
        {
            "e": 2770,
            "s": 2390,
            "te": 27,
            "ts": 25,
            "w": "fry"
        },
        {
            "e": 2980,
            "s": 2770,
            "te": 31,
            "ts": 29,
            "w": "the"
        },
        {
            "e": 3640,
            "s": 2980,
            "te": 37,
            "ts": 33,
            "w": "pork."
        }
    ]],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 282,
                y: 92
            },
            width: 134,
            height: 152
        },
        {
            name: "Spatula",
            audio: 32,
            position: {
                x: 262,
                y: 102
            },
            width: 29,
            height: 61
        },
        {
            name: "Gas stove",
            audio: 17,
            position: {
                x: 159,
                y: 254
            },
            width: 376,
            height: 149
        },
        {
            name: "Frying pan",
            audio: 16,
            position: {
                x: 161,
                y: 292
            },
            width: 149,
            height: 37
        },
        {
            name: "Cooking pot",
            audio: 9,
            position: {
                x: 349,
                y: 274
            },
            width: 103,
            height: 54,
        },
        {
            name: "Pork",
            audio: 28,
            position: {
                x: 239,
                y: 310
            },
            width: 41,
            height: 14
        },
        {
            name: "Eggs",
            audio: 13,
            position: {
                x: 384,
                y: 286
            },
            width: 54,
            height: 4
        }
    ]
}

export const DEMO_PAGE_DATA_5 = {
    ID: 4,
    background: 5,
    type: 0,
    title: ["Don't forget to add some cheese!"],
    titleAudio: [11],
    titleAudioDuration: [5208],
    sync_data: [[
        {
            "e": 670,
            "s": 0,
            "te": 4,
            "ts": 0,
            "w": "Don't"
        },
        {
            "e": 1270,
            "s": 670,
            "te": 11,
            "ts": 6,
            "w": "forget"
        },
        {
            "e": 1510,
            "s": 1270,
            "te": 14,
            "ts": 13,
            "w": "to"
        },
        {
            "e": 1840,
            "s": 1510,
            "te": 18,
            "ts": 16,
            "w": "add"
        },
        {
            "e": 2200,
            "s": 1840,
            "te": 23,
            "ts": 20,
            "w": "some"
        },
        {
            "e": 3110,
            "s": 2200,
            "te": 31,
            "ts": 25,
            "w": "cheese!"
        }
    ]],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 343,
                y: 91
            },
            width: 124,
            height: 188
        },
        {
            name: "Sink",
            audio: 30,
            position: {
                x: 62,
                y: 300
            },
            width: 223,
            height: 105
        },
        {
            name: "Tap",
            audio: 34,
            position: {
                x: 138,
                y: 330
            },
            width: 23,
            height: 76
        },
        {
            name: "Bowl",
            audio: 3,
            position: {
                x: 383,
                y: 299
            },
            width: 66,
            height: 36
        },
        {
            name: "Cheese grater",
            audio: 6,
            position: {
                x: 387,
                y: 246
            },
            width: 47,
            height: 46
        },
        {
            name: "Cheese",
            audio: 7,
            position: {
                x: 409,
                y: 248
            },
            width: 22,
            height: 23
        }
    ]
}

export const DEMO_PAGE_DATA_6 = {
    ID: 5,
    background: 6,
    type: 0,
    title: ["Of course we need some fruits and vegetables."],
    titleAudio: [26],
    titleAudioDuration: [3360],
    sync_data: [
        [
            {
                "e": 350,
                "s": 0,
                "te": 1,
                "ts": 0,
                "w": "Of"
            },
            {
                "e": 820,
                "s": 350,
                "te": 8,
                "ts": 3,
                "w": "course"
            },
            {
                "e": 1040,
                "s": 820,
                "te": 11,
                "ts": 10,
                "w": "we"
            },
            {
                "e": 1220,
                "s": 1040,
                "te": 16,
                "ts": 13,
                "w": "need"
            },
            {
                "e": 1610,
                "s": 1220,
                "te": 21,
                "ts": 18,
                "w": "some"
            },
            {
                "e": 1880,
                "s": 1610,
                "te": 28,
                "ts": 23,
                "w": "fruits"
            },
            {
                "e": 2160,
                "s": 1880,
                "te": 32,
                "ts": 30,
                "w": "and"
            },
            {
                "e": 3280,
                "s": 2160,
                "te": 44,
                "ts": 34,
                "w": "vegetables."
            }
        ]
    ],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 284,
                y: 88
            },
            width: 105,
            height: 210
        },
        {
            name: "Bowl",
            audio: 3,
            position: {
                x: 216,
                y: 274
            },
            width: 75,
            height: 54
        },
        {
            name: "Apple",
            audio: 1,
            position: {
                x: 226,
                y: 268
            },
            width: 23,
            height: 12
        },
        {
            name: "Pineapple",
            audio: 27,
            position: {
                x: 247,
                y: 228
            },
            width: 25,
            height: 50
        },
        {
            name: "Carrot",
            audio: 5,
            position: {
                x: 278,
                y: 252
            },
            width: 12,
            height: 21
        },
        {
            name: "Chopping board",
            audio: 8,
            position: {
                x: 300,
                y: 297
            },
            width: 129,
            height: 65
        },
        {
            name: "Cucumber",
            audio: 10,
            position: {
                x: 326,
                y: 326
            },
            width: 30,
            height: 14
        },
        {
            name: "Cucumber",
            audio: 10,
            position: {
                x: 366,
                y: 305
            },
            width: 30,
            height: 9
        },
        {
            name: "Knife",
            audio: 22,
            position: {
                x: 339,
                y: 296
            },
            width: 27,
            height: 26
        }
    ]
}

export const DEMO_PAGE_DATA_7 = {
    ID: 6,
    type: 0,
    background: 7,
    title: ["Finally, I will add the dressing."],
    titleAudio: [14],
    titleAudioDuration: [6408],
    sync_data: [
        [
            {
                "e": 1200,
                "s": 0,
                "te": 7,
                "ts": 0,
                "w": "Finally,"
            },
            {
                "e": 1490,
                "s": 1200,
                "te": 9,
                "ts": 9,
                "w": "I"
            },
            {
                "e": 1700,
                "s": 1490,
                "te": 14,
                "ts": 11,
                "w": "will"
            },
            {
                "e": 2100,
                "s": 1700,
                "te": 18,
                "ts": 16,
                "w": "add"
            },
            {
                "e": 2260,
                "s": 2100,
                "te": 22,
                "ts": 20,
                "w": "the"
            },
            {
                "e": 3580,
                "s": 2260,
                "te": 32,
                "ts": 24,
                "w": "dressing."
            }
        ]
    ],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 174,
                y: 101
            },
            width: 111,
            height: 182
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 374,
                y: 105
            },
            width: 119,
            height: 183
        },
        {
            name: "Salad Bowl",
            audio: 29,
            position: {
                x: 237,
                y: 260
            },
            width: 101,
            height: 58
        },
        {
            name: "Spoon",
            audio: 33,
            position: {
                x: 312,
                y: 186
            },
            width: 10,
            height: 38
        },
        {
            name: "Fork",
            audio: 15,
            position: {
                x: 326,
                y: 337
            },
            width: 45,
            height: 8
        },
        {
            name: "Dressing",
            audio: 12,
            position: {
                x: 226,
                y: 215
            },
            width: 21,
            height: 16
        }
    ]
}

export const DEMO_PAGE_DATA_8 = {
    ID: 7,
    background: 8,
    type: 0,
    title: ["Now we need to mix them together."],
    titleAudio: [25],
    titleAudioDuration: [5064],
    sync_data: [
        [
            {
                "e": 570,
                "s": 0,
                "te": 2,
                "ts": 0,
                "w": "Now"
            },
            {
                "e": 730,
                "s": 570,
                "te": 5,
                "ts": 4,
                "w": "we"
            },
            {
                "e": 1010,
                "s": 730,
                "te": 10,
                "ts": 7,
                "w": "need"
            },
            {
                "e": 1260,
                "s": 1010,
                "te": 13,
                "ts": 12,
                "w": "to"
            },
            {
                "e": 1680,
                "s": 1260,
                "te": 17,
                "ts": 15,
                "w": "mix"
            },
            {
                "e": 1920,
                "s": 1680,
                "te": 22,
                "ts": 19,
                "w": "them"
            },
            {
                "e": 2770,
                "s": 1920,
                "te": 32,
                "ts": 24,
                "w": "together."
            }
        ]
    ],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 174,
                y: 88
            },
            width: 100,
            height: 191
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 381,
                y: 100
            },
            width: 110,
            height: 183
        },
        {
            name: "Salad bowl",
            audio: 29,
            position: {
                x: 341,
                y: 257
            },
            width: 115,
            height: 66
        },
        {
            name: "Spoon",
            audio: 33,
            position: {
                x: 347,
                y: 212
            },
            width: 25,
            height: 35
        },
        {
            name: "Fork",
            audio: 15,
            position: {
                x: 419,
                y: 234
            },
            width: 7,
            height: 35
        }
    ]
}

export const DEMO_PAGE_DATA_9 = {
    ID: 8,
    background: 9,
    type: 0,
    title: ["The salad bowl looks so delicious!"],
    titleAudio: [35],
    titleAudioDuration: [4752],
    sync_data: [
        [
            {
                "e": 400,
                "s": 0,
                "te": 2,
                "ts": 0,
                "w": "The"
            },
            {
                "e": 1080,
                "s": 400,
                "te": 8,
                "ts": 4,
                "w": "salad"
            },
            {
                "e": 1300,
                "s": 1080,
                "te": 13,
                "ts": 10,
                "w": "bowl"
            },
            {
                "e": 1670,
                "s": 1300,
                "te": 19,
                "ts": 15,
                "w": "looks"
            },
            {
                "e": 2220,
                "s": 1670,
                "te": 22,
                "ts": 21,
                "w": "so"
            },
            {
                "e": 3400,
                "s": 2220,
                "te": 33,
                "ts": 24,
                "w": "delicious!"
            }
        ]
    ],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 135,
                y: 108
            },
            width: 112,
            height: 241
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 389,
                y: 146
            },
            width: 109,
            height: 204
        },
        {
            name: "Salad bowl",
            audio: 29,
            position: {
                x: 376,
                y: 90
            },
            width: 109,
            height: 59
        }
    ]
}

export const DEMO_PAGE_DATA_10 = {
    ID: 9,
    background: 10,
    type: 0,
    title: ["It's fun to make something together. Now let's enjoy!"],
    titleAudio: [21],
    titleAudioDuration: [4632],
    sync_data: [
        [
            {
                "e": 520,
                "s": 0,
                "te": 3,
                "ts": 0,
                "w": "It's"
            },
            {
                "e": 800,
                "s": 520,
                "te": 7,
                "ts": 5,
                "w": "fun"
            },
            {
                "e": 1010,
                "s": 800,
                "te": 10,
                "ts": 9,
                "w": "to"
            },
            {
                "e": 1230,
                "s": 1010,
                "te": 15,
                "ts": 12,
                "w": "make"
            },
            {
                "e": 1900,
                "s": 1230,
                "te": 25,
                "ts": 17,
                "w": "something"
            },
            {
                "e": 2910,
                "s": 1900,
                "te": 35,
                "ts": 27,
                "w": "together."
            },
            {
                "e": 3330,
                "s": 2910,
                "te": 39,
                "ts": 37,
                "w": "Now"
            },
            {
                "e": 3660,
                "s": 3330,
                "te": 45,
                "ts": 41,
                "w": "let's"
            },
            {
                "e": 4500,
                "s": 3660,
                "te": 52,
                "ts": 47,
                "w": "enjoy!"
            }
        ]
    ],
    touchables: [
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 173,
                y: 96
            },
            width: 114,
            height: 186
        },
        {
            name: "Boy",
            audio: 4,
            position: {
                x: 391,
                y: 106
            },
            width: 105,
            height: 177
        },
        {
            name: "Salad bowl",
            audio: 29,
            position: {
                x: 280,
                y: 247
            },
            width: 114,
            height: 69
        },
        {
            name: "Fork",
            audio: 15,
            position: {
                x: 268,
                y: 179
            },
            width: 33,
            height: 14
        },
        {
            name: "Spoon",
            audio: 33,
            position: {
                x: 340,
                y: 198
            },
            width: 21,
            height: 36
        }
    ]
}
export const DEMO_STORY_DATA = {
    id: 420,
    storyName: "Let's Make A Salad Bowl!",
    level: "A",
    author: "Hilary Tran",
    illustrator: "Nathan Pham",
    type: 0,
    pages:
        [
            DEMO_PAGE_DATA_1,
            DEMO_PAGE_DATA_2,
            DEMO_PAGE_DATA_3,
            DEMO_PAGE_DATA_4,
            DEMO_PAGE_DATA_5,
            DEMO_PAGE_DATA_6,
            DEMO_PAGE_DATA_7,
            DEMO_PAGE_DATA_8,
            DEMO_PAGE_DATA_9,
            DEMO_PAGE_DATA_10
        ]
}
