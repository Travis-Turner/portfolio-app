import React from 'react';


const text = {
    intro: [
        'Hello, my name is Richard Turner.',
        'I am a self-taught full-stack developer.  This is a small portfolio demonstrating what I consider to be my most interesting projects.  I have experience with a number of technologies, including HTML, CSS, JavaScript, PHP, jQuery, VueJS, React, React-Native, Redux, WordPress, Sketch, C#, MySQL, MongoDB, Firebase, and more.',
        'I love programming and making things, and I have strived to obtain a well-rounded grasp of the entire development process.  In particular, I hope to develop, design and create helpful things that people can use, especially in the fields of education and language.  I wish to improve my knowledge in the realms of UX and UI, and apply more advanced HCI principles in my further endeavours.',
        'Sincerely, thank you taking the time to look at my things.  I really do appreciate every second.',
        <div className="TextContainer">You may also visit my github <a href="https://github.com/Travis-Turner">here</a>.</div>,
        'Please scroll down to continue.'
    ],
    simplyEnglish: [
        "I created this app for the company Simply English in Moscow Russia.  The userbase consists of English-speaking teachers adjusting to life in Moscow. As part of their duties, teachers need to travel to multiple schools around Moscow - a city which occupies a massive amount of real estate. The app consolidates several functions into one place.  Teachers are able to access contacts for emergencies, receive their schedule, and order office supplies. The app also allows teachers to easily route to their apartment and clients, with Yandex - the Russian equivilent of Google. Teachers may also check school calendars, and the app also includes an interactive guidebook to help adjust to life in Russia.  The app is reguarly used by around 50 users at any given time.",
        'The Simply English application is available for iPhone and Android and was developed with React-Native, the backend portal was developed with React and Firebase.',
        'Happily, based upon the success of the first application, I am expected to develop a second iteraction at the conclusion of the 2020 school year.',
        <div className="TextContainer">You can see the app on the Google Play Store, here <a href="https://play.google.com/store/apps/details?id=com.SimplyEnglish.SimplyEnglish&hl=en">here</a>.</div>,
        <div className="TextContainer">You can see the app on the Apple App Store, here <a href="https://apps.apple.com/us/app/simply-english/id1475056793">here</a>.</div>,
        'To log in, use the password, "RichardTurnerTest!".'



    ],
    hiraganaDriller: [
        'This is the first app I created.  It is a simple flashcard app, designed to help learners memorize the Japanese hiragana.  I hand drew each character in Sketch, composed the sound effects with GarageBand and commissioned a native speaker to record audio for each character.  It was important for me to be able to integrate sound into this application, as well as audio and visual cues that made the experience gratifying and pleasant.',
        'The Hiragana Driller application is available for iPhone and was developed with React-Native.',
        <div className="TextContainer">You can see the app on the Apple App Store, here <a href="https://apps.apple.com/us/app/hiragana-driller/id1345285438">here</a>.</div>,

    ],
    simon2: [
        'There is an online community for self-taught developers called FreeCodeCamp.  There are several educational programs available through this site  One of the final projects in the Front-End Developer track is to recreate the popular game "Simon".  I decided to go a different way with the project, incorporating more game modes and integrating music and sound, as well as a title sequence which I created.',
        'This project was created with React.',
        <div className="TextContainer">You may play the game <a href="http://simon.travisturner.io/">here</a>.</div>,
    ], 
    infantSchool: [
        'I am currently developing this iPhone/Android app for a private kintergarten in Moscow.  It is being built with React-Native.  This project will eventually feature a chat and media section, as well as interactive menus and calenders for parents, as well as many other features.  Also, this app was a chance for me to do some translation work as I translate the text into Russian.',
        'The backend portal for administrators is being developed with React and Firebase.',
        'The photo gallery below has several photos from different stages of the development process thus far, demonstrating the interactions the project has gone through in response to client feedback.'
    ],
    designs: ['Although graphic design has thus far not been a focus, I have tried my best to aquire some basic illustration skills.',
            'The following graphics were created using Sketch:'],
    thanks: ['Again, thanks for visiting my portfolio.', '- Richard Turner',
    <div className="TextContainer"><a href="mailto:richardturnerdeveloper@gmail.com">richardturnerdeveloper@gmail.com</a></div>],
    headers: [
        'Introduction', 'Simply English', 'Hiragana Driller', 'Simon II', 'Infant School App', 'Designs', 'Thanks'
    ],
    images: {
        simplyEnglish: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
        hiraganaDriller: ['18', '19', '20', '21', '22', '23'],
        infantSchool: ['36', '37', '03', '04', '38', '39', '1', '02'],
        design: [ 'order2', 'order3', 'order4', 'sky', 'tree', 'order1',]
    }
}


export default text;


