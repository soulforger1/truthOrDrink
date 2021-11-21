const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: 'AIzaSyB1pI7UKasLVVMflTm23QX545d3IIVVM3M',
    authDomain: 'truthordrink-8a9c0.firebaseapp.com',
    projectId: 'truthordrink-8a9c0',
    storageBucket: 'truthordrink-8a9c0.appspot.com',
    messagingSenderId: '162948926146',
    appId: '1:162948926146:web:009b3a1dbbb084a478c95b',
    measurementId: 'G-LF8PG063EQ',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

const { doc, setDoc } = require('firebase/firestore');

const data = {
    questions: [
        {
            question:
                'How often do you do yourself?',
        },
        {
            question: 'What is your most favorite s#x position?',
        },
        {
            question: 'What is the strangest thing you have ever done with your special one?',
        },
        {
            question: 'When last did you do yourself while thinking of someone? Who was the person?',
        },
        {
            question: 'Did you like it with lights on or off?',
        },
        {
            question: 'Do you wish to have double penetration?',
        },
        {
            question: 'Have you ever done it with more than one person at different times within 24 hours?',
        },
        {
            question: 'Are second rounds exciting or exhausting?',
        },
        {
            question: 'Do you have an “I’m getting laid tonight” outfit? What it is?',
        },
        {
            question: 'Do you have any spicy pictures or videos saved on your phone?',
        },
        {
            question: 'Have you ever done it in a car?',
        },
        {
            question: 'How many people have you slept with?',
        },
        {
            question: ' If you got to have a threesome with people in this room, who would you do it with and why?',
        },
        {
            question: 'What panties are you wearing?',
        },
        {
            question: 'What was the most embarrassing time you got turned on?',
        },
        {
            question: 'What’s your favorite body part on a girl?',
        },
        {
            question: 'When did you lose your virginity?',
        },
        {
            question: 'Who do you most want to sleep with, out of everyone here?',
        },
        {
            question: 'Change your Facebook status to “Feeling horny...',
        },
        {
            question: 'Take a picture of your ‘O’ face. You have to use that as your lock screen for 48 hours.',
        },
        {
            question: 'You have to leave an R-rated voicemail for an ex.',
        },
        {
            question: 'Whats something I do that isnt sexual but turns you on?',
        },
        {
            question: 'Where is the strangest place you’ve ever masturbated?',
        },
        {
            question: 'What’s #1 on your sexual bucket list right now?',
        },
        {
            question: 'Do you ever watch porn? Tell me what type you usually gravitate toward.',
        },
        {
            question: 'What do you think the sexiest part of your body is?',
        },
        {
            question: 'Who in this room would you most want to kiss?',
        },
        {
            question: 'Who in this room would you most want to see naked?',
        },
        {
            question: 'Do you own any sex toys?',
        },
        {
            question: 'Have you ever had sex in public?',
        },
        {
            question: 'Have you ever been caught having sex?',
        },
        {
            question: 'Have you ever taken nudes?',
        },
        {
        question: 'Have you ever faked an orgasm?',
        },
        {
            question: 'Play “fuck, marry, kill” with three people in the room.',
        },
        {
            question: 'What is your weirdest habit?',
        },
        {
            question: 'Who would you choose as your life partner if you had to switch lives with someone in this room, and why?',
        },
        {
            question: 'Kiss the person to your right.',
        },
    ],
};

const writeData = async () => {
    await setDoc(doc(firestore, 'modes', 'adult'), data);
    return;
};

writeData();
