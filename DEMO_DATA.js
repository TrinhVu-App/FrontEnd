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
    ID: 1,
    background: 1,
    title: ["Hey, do you want to eat some salads?"],
    titleAudio: [18],
    titleAudioDuration: [3672],
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
                y: 174
            },
            width: 55,
            height: 6
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
    ID: 2,
    background:2,
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
    touchables: []
}
export const DEMO_STORY_DATA = {
    ID: 420,
    storyName: "Let's Make A Salad Bowl!",
    level: "A",
    author: "Hilary Tran",
    illustrator: "Nathan Pham",
    pages: [DEMO_PAGE_DATA_1]
}
