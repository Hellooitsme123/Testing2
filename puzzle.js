/* COMMON

↖ 
↗
↘
↙
←
→
↑
↓

*/
puzzles = {
    "The Novice": {
        problem1: "box[class='box-white',given='hello',answer='hi',pos='1:2']||box[class='box-navy',given='What is a synonym of hello?',pos='0:1]",
        problem2: "box[class='box-white',given='sphere',answer='ball',pos='1:2']||box[class='box-navy',given='What is a synonym of sphere?',pos='0:1']",
        problem3: "box[class='box-white',given='high',answer='hi',pos='1:0']||box[class='box-navy',given='What sounds exactly like high?',pos='0:0']",
        problem4: "box[class='box-white',given='bawl',answer='ball',pos='1:0']||box[class='box-navy',given='Do you see whites pattern?',pos='0:0']",
        problem5: "box[class='box-white',given='hi',answer='hi',pos='1:1']||box[class='box-navy',given='Each color has its own rule.',pos='0:1']",
        problem6: "box[class='box-white',given='altitude',pos='1:2']||box[class='box-white',given='height',answer='height',pos='1:1']||box[class='box-navy',given='Height has its own rule too.',pos='0:1']",
        problem7: "box[class='box-white',given='tow',answer='toe',pos='1:0']||box[class='box-navy',given='White is similarity.',pos='0:0']",
        problem8: "box[class='box-white',given='okay',answer='okay',pos='1:1']||box[class='box-navy',given='Maybe try being on your own.',pos='0:1']",
        problem9: "box[class='box-white',given='duplicate',answer='clone',pos='1:2']",
        problem10: "box[class='box-white',given='wealthy',answer='rich',pos='1:2']",
        problem11: "box[class='box-white',given='the novice',answer='the novice',pos='1:1']"
    },
    "The Colossal": {
        problem1: "box[class='box-blue',given='h',answer='hi',pos='1:1']||box[class='box-navy',given='All color tutorials will start the same.',pos='0:1']",
        problem2: "box[class='box-blue',given='all',answer='ball',pos='1:1']||box[class='box-navy',given='Find the rule based on the answers.',pos='0:1']",
        problem3: "box[class='box-blue',given='may',answer='maybe',pos='1:1']||box[class='box-navy',given='Do you see the pattern?',pos='0:1']",
        problem4: "box[class='box-blue',given='pull',answer='opal',pos='1:0']||box[class='box-navy',given='The answer is opal.',pos='0:0']",
        problem5: "box[class='box-blue',given='kit',answer='bucket',pos='1:0']||box[class='box-navy',given='Add sounds.',pos='0:0']||box[class='box-navy',given='What word has the sound kit in it?',pos='2:0']",
        problem6: "box[class='box-blue',given='raid',answer='radar',pos='1:0']||box[class='box-navy',given='The answer is similar to sonar.',pos='0:0']",
        problem7: "box[class='box-blue,given='rad',answer='radar',pos='1:1']||box[class='box-navy',given='Now add letters.',pos='0:1']",
        problem8: "box[class='box-blue',given='wheel',answer='car',pos='1:2']||box[class='box-navy',given='A wheel is in what?',pos='0:2']",
        problem9: "box[class='box-blue',given='man',answer='human',pos='1:1']||box[class='box-blue',given='hue',pos='1:0']||box[class='box-blue',given='brain',pos='1:2']||box[class='box-navy',given='More blocks can provide hints.',pos='0:1']",
        problem10: "box[class='box-blue',given='ight',answer='right',pos='1:1']||box[class='box-white',given='rite',pos='1:0']||box[class='box-navy',given='Enjoy it while you can.',pos='0:1']",
        problem11: "box[class='box-blue',given='the loss',answer='the colossal',pos='1:1']||box[class='box-white',given='the ginormous',pos='1:2']||box[class='box-navy',given='Remember the rules.',pos='0:1']",

    },
    "The Firebrand": {
        problem1: "box[class='box-red',given='high',answer='hi',pos='1:1']||box[class='box-navy',given='One more time.',pos='0:1']",
        problem2: "box[class='box-red',given='football',answer='ball',pos='1:1']||box[class='box-navy',given='Do you remember?.',pos='0:1']",
        problem3: "box[class='box-red',given='contemplation',answer='pain',pos='1:1']||box[class='box-navy',given='What does this question make you feel?.',pos='0:1']",
        problem4: "box[class='box-red',given='car',answer='wheel',pos='1:2']||box[class='box-navy',given='Red is the opposite of blue.',pos='0:2']",
        problem5: "box[class='box-red',given='room',answer='walls',pos='1:2']||box[class='box-navy',given='What is in a room?.',pos='0:2']",
        problem6: "box[class='box-red',given='opal',answer='pull',pos='1:0']||box[class='box-navy',given='Remember this one?',pos='0:0']",
        problem7: "box[class='box-red',given='finalize',answer='fine',pos='1:0']||box[class='box-navy',given='Remove sounds.',pos='0:0']",
        problem8: "box[class='box-blue',given='par',answer='part',pos='1:0']||box[class='box-red',given='apartment',pos='1:1']||box[class='box-red',given='whole',pos='1:2']||box[class='box-navy',given='Red is subtraction. Blue is addition.',pos='0:1']",
        problem9: "box[class='box-red',given='these finer red brands',answer='the firebrand',pos='0:1']||box[class='box-white',given='the mischievous',pos='1:1']||box[class='box-blue',given='he fir ran',pos='2:1']||box[class='box-navy',given='There is no happiness without suffering.',pos='1:2']",
    },
    "The Primary": {
        problem1: "box[class='box-red',given='summary',answer='sum',pos='1:1']",
        problem2: "box[class='box-white',given='natural',answer='organic',pos='1:2']",
        problem3: "box[class='box-blue',given='candid',answer='candidate',pos='1:1']||box[class='box-white',given='contender',pos='1:2']",
        problem4: "box[class='box-red',given='pseudonym',answer='dough',pos='1:0']||box[class='box-red',given='yeast',pos='1:2']",
        problem5: "box[class='box-blue',given='house ↗',pos='0:2']||box[class='box-red',given='',answer='neighbor',pos='1:1']||box[class='box-navy',given='Blocks can combine to make sequences.',pos='2:0']||box[class='box-navy',given='Lots of houses makes a what?',pos='2:1']",problem6: "box[class='box-mint',given='previous ↗',pos='0:2']||box[class='box-blue',given='nay',answer='neighbor',pos='1:0']||box[class='box-navy',given='Sequences are denoted by arrows.',pos='2:2']",
        problem6: "box[class='box-red',given='reddit',answer='red',pos='1:1']",
        problem7: "box[class='box-red',given='coprime +→',pos='0:1']||box[class='box-red',given='airy',answer='primary',pos='1:1']",
        problem8: "box[class='box-white',given='observe +→',pos='1:1']||box[class='box-red',given='spout',answer='watch out',pos='2:1']||box[class='box-navy',given='+ means merge two answers.',pos='0:1']",
        problem9: "box[class='box-blue',given='clam',pos='1:1']||box[class='box-white',given='dilemma',answer='calamity',pos='1:2']",
        problem10: "box[class='box-red',given='bayou',pos='1:1']||box[class='box-cyan',given='Who did it?',answer='you',pos='0:1']",
        problem11: "box[class='box-white',given='the main',pos='1:2']||box[class='box-blue',given='he mary',answer='the primary',pos='1:1']||box[class='box-mint',given='4 problems ago',pos='0:1']"
    },
    "The Incremental": {
        problem1: "box[class='box-navy',given='1',pos='0:1']||box[class='box-white',given='eye',answer='i',pos='1:0']",
        problem2: "box[class='box-navy',given='2',pos='0:1']||box[class='box-black',given='out',answer='in',pos='1:2']||box[class='box-red',given='hint',pos='2:1']",
        problem3: "box[class='box-navy',given='3',pos='0:1']||box[class='box-white',given='ink',answer='inc',pos='1:0']||box[class='box-black',given='cni',pos='1:1']",
        problem4: "box[class='box-navy',given='4',pos='0:1']||box[class='box-white',given='kind',answer='nice',pos='1:2']",
        problem5: "box[class='box-navy',given='5',pos='0:1']||box[class='box-blue',given='nice',answer='nicer',pos='1:1']||box[class='box-vermillion',given='nice',pos='2:1']",
        problem6: "box[class='box-navy',given='6',pos='0:1']||box[class='box-red',given='sway',pos='1:1']||box[class='box-white',given='ay',answer='a',pos='1:0']",
        problem7: "box[class='box-navy',given='7',pos='0:1']||box[class='box-red',given='cat',answer='at',pos='1:1']",
        problem8: "box[class='box-navy',given='8',pos='0:1']||box[class='box-black',given='tam',answer='mat',pos='1:1']",
        problem9: "box[class='box-navy',given='9',pos='0:1']||box[class='box-blue',given='mat',answer='mant',pos='1:1']||box[class='box-white',given='stutter',pos='1:2']",
        problem10: "box[class='box-navy',given='10',pos='0:1']||box[class='box-black',given='unintended',answer='meant',pos='1:2']||box[class='box-red',given='median tall',pos='1:1']",
        problem11: "box[class='box-navy',given='11',pos='0:1']||box[class='box-white',given='cognitive',answer='mental',pos='1:2']||box[class='box-black',given='physical',pos='0:2']",
        problem12: "box[class='box-white',given='the +→',pos='0:1']||box[class='box-mint',given='problem 5 + 11',answer='the incremental',pos='1:1']",
        // slowly spell out incremental
    },
    "The Radiant": {
        problem1: "box[class='box-vermillion',given='better',answer='best',pos='1:1']||box[class='box-black',given='worst',pos='1:2']",
        problem2: "box[class='box-periwinkle',given='unctuous',pos='1:1']||box[class='box-black',given='rude',answer='polite',pos='1:2']",
        problem3: "box[class='box-black',given='stupid',answer='smart',pos='1:2']",
        problem4: "box[class='box-black',given='mundane',answer='creative',pos='1:2']",
        problem5: "box[class='box-periwinkle',given='stubborn',answer='determined',pos='1:1']||box[class='box-white',given='committed',pos='0:2']",
        problem6: "box[class='box-black',given='wretched',answer='pleasant',pos='1:2']",
        problem7: "box[class='box-white',given='skilled',answer='adept',pos='1:2']||box[class='box-blue',given='ade',pos='1:1']",
        problem8: "box[class='box-blue',given='under',answer='understanding',pos='1:1']||box[class='box-white',given='considerate',pos='1:2']",
        problem9: "box[class='box-black',given='diviv',answer='vivid',pos='1:1']||box[class='box-white',given='lively',pos='1:2']",
        problem10: "box[class='box-periwinkle',given='nosey',answer='curious',pos='1:1']||box[class='box-white',given='inquisitive',pos='1:2']",
        problem11: "box[class='box-white',given='the shining',answer='the radiant',pos='1:2']||box[class='box-gray',given='YOU ARE',pos='1:1']",
    },
    "The Illusive": {
        problem1: "box[class='box-yellow',given='ih',answer='hi',pos='1:1']",
        problem2: "box[class='box-yellow',given='lalb',answer='ball',pos='1:1']",
        problem3: "box[class='box-yellow',given='water',answer='whirlpool',pos='1:2']||box[class='box-navy',given='whirlpool.',pos='1:1']",
        problem4: "box[class='box-yellow',given='beef',answer='ground beef',pos='1:2']||box[class='box-navy',given='Mix it up!',pos='1:1']",
        problem5: "box[class='box-yellow',given='isle',answer='lies',pos='1:1']",
        problem6: "box[class='box-yellow',given='sieve duh',answer='deceive',pos='1:0']||box[class='box-navy',given='Mix the sounds..',pos='0:0']",
        problem7: "box[class='box-yellow',given='unfurled at',answer='fraudulent',pos='1:1']||box[class='box-navy',given='Do you see the pattern?',pos='0:1']",
        problem8: "box[class='box-yellow',given='snarled',answer='slander',pos='1:1']",
        problem9: "box[class='box-yellow',given='e wick',answer='wiki',pos='1:1']",
        problem10: "box[class='box-yellow',given='uh liveliest',answer='the illusive',pos='1:1']",
    },
    "The Blooming": {
        problem1: "box[class='box-white',given='goblin +↗',answer='orchid',pos='0:2']||box[class='box-red',given='hide',pos='1:1']",
        problem2: "box[class='box-purple',given='hose',pos='1:1']||box[class='box-yellow',given='sero',answer='rose',pos='0:1']",
        problem3: "box[class='box-purple',given='silly',pos='0:0']||box[class='box-black',given='ylil',answer='lily',pos='1:1']",
        problem4: "box[class='box-purple',given='hazy',answer='daisy',pos='0:0']",
        problem5: "box[class='box-gray',given='purple + white',answer='lavender',pos='0:2']||box[class='box-navy',given='You will actually see this later on!',pos='1:1']",
        problem6: "box[class='box-white',given='sun +→',answer='sunflower',pos='0:1']||box[class='box-gray',given='theme',pos='1:1']",
        problem7: "box[class='box-gray',given='roald',pos='0:1']||box[class='box-red',given='ida',answer='dahlia',pos='1:1']",
        problem8: "box[class='box-purple',given='sloppy',answer='poppy',pos='1:1']",
        problem9: "box[class='box-yellow',given='loon pie',answer='lupine',pos='1:0']",
        problem10: "box[class='box-gray',given='minecraft',answer='azalea',pos='1:1']",
        problem11: "box[class='box-purple',given='the glooming',answer='the blooming',pos='1:1']",
    },
    "The Educated": {
        problem1: "box[class='box-large',class='box-half-black-gray',given='mental theme',answer='physical education',pos='0:1']",
        problem2: "box[class='box-purple',given='curled mystery',answer='world history',pos='0:0']",
        problem3: ""
    },
    "The Analytical": {
        problem1: "box[class='box-purple',given='audition',answer='addition',pos='1:1']||box[class='box-blue',given='add',pos='0:1']",
        problem2: "box[class='box-yellow',given='shun track +↘',answer='subtraction',pos='1:0']||box[class='box-black',given='bus',pos='2:1']",
        problem3: "box[class='box-purple',given='complication',answer='multiplication',pos='1:1']",
        problem4: "box[class='box-purple',given='visionary',answer='division',pos='1:2']",
        problem5: "box[class='box-red',given='module +↘',answer='modulus',pos='1:1']||box[class='box-black',given='they',pos='2:2']",
        problem6: "box[class='box-white',given='algae +↘',answer='algebra',pos='1:0']||box[class='box-red',given='bracket',pos='2:1']",
        problem7: "box[class='box-large',class='box-half-yellow-red',given='cambion prehistorics',answer='combinatorics',pos='0:1']",
        problem8: "box[class='box-red',given='calcium lustful',answer='calculus',pos='1:1']",
        problem9: "box[class='box-blue',given='at +→',answer='statistics',pos='0:1']||box[class='box-yellow',given='i cists',pos='1:1']", //istics
        problem10: "box[class='box-purple',given='slumber +↘',answer='number theory',pos='0:1']||box[class='box-white',given='thesis',pos='1:2']",
        problem11: "box[class='box-large',class='box-half-purple-blue',given='beware rot',answer='square root',pos='0:0']",
        problem12: "box[class='box-purple',given='laugh',answer='graph',pos='0:0']",
        problem13: "box[class='box-red',given='integrity allocations',answer='integrals',pos='1:1']",
        problem14: "box[class='box-purple',given='potents →',answer='exponents',pos='0:1']||box[class='box-blue',pos='1:1']",
        problem15: "box[class='box-red',given='baracks ketamines',answer='brackets',pos='0:1']",
        problem16: "box[class='box-white',given='the systematic',answer='the analytical',pos='0:2']||box[class='box-blue','canal ethyl it',pos='1:1']",
    },
    "The Geometric": {

    },
    "The Esoteric": {

    },
    "The Omniscient": {

    },
    "The Null": {
        problem1: "box[class='box-black',given='goodbye',answer='hi',pos='1:1']",
    },
    "The Antique": {

    },
    "The Wanderer": {

    },
    "The Acolyte": {

    },
    "The Surreal": {

    },
    "The Transparent": {
        problem1: "box[class='box-white',given='c',answer='se e',pos='0:1']",
        problem2: "box[class='box-white',given='crew',pos='0:0']||box[class='box-red',given='walkthrough',answer='through',pos='0:1']",
        problem3: "box[class='box-magenta',given='article',pos='0:1']||box[class='box-red',given='theory',answer='the',pos='1:1]",
        problem4: "box[class='box-purple',given='halls',answer='walls',pos='0:1']",
        problem5: "box[class='box-mint',given='previous 4',pos='0:1']||box[class='box-cyan',given='what do you see',answer='nothing',pos='1:1]",
    }
}