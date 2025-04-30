export interface Question {
  question: string;
  options: Array<string>;
  correctAns: number;
}

export const questionList: Question[] = [
  {
    question:
      "In which film does Aamir Khan play an alien who lands on Earth and befriends a journalist?",
    options: ["Dhoom 3", "Laggan", "P.K", "Secret Superstar"],
    correctAns: 2,
  },
  {
    question:
      "Which film features Rancho, Farhan, and Raju as university friends navigating through life’s ups and downs?",
    options: [" Taare Zameen Par", "3 Idiots", "Golmaal", "Lagaan"],
    correctAns: 1,
  },
  {
    question:
      "Which film revolves around a wrestler’s journey, starring Salman Khan?",
    options: [
      "Sultan",
      "Bajrangi Bhaijaan",
      "Chak De! India",
      "Tiger Zinda Hai",
    ],
    correctAns: 0,
  },
  {
    question: "In which film does Hrithik Roshan play a superhero?",
    options: ["War", "Dangal", "Zindagi Na Milegi Dobara", "Krrish"],
    correctAns: 3,
  },
  {
    question:
      "Which film is about a father training his daughters to become wrestling champions?",
    options: ["Chak De! India", "Dangal", "Mary Kom", "Lagaan"],
    correctAns: 1,
  },
  {
    question: "Bhai ka birthday hai, kuch special karte hain!",
    options: ["Chhichhore", "Koi Mil Gaya", "Baahubali", "Tamasha"],
    correctAns: 0,
  },
  {
    question: "“Agar tum saath ho, toh sab kuch possible hai.”",
    options: ["Pyaar Ka Punchnama", "Tanu Weds Manu", "3 Idiots", "Tamasha"],
    correctAns: 1,
  },
  {
    question: "Tera yaar hoon mai!",
    options: [
      "Dangal",
      "Sonu Ke Titu Ki Sweety",
      "Student of the Year",
      "Koi Mil Gaya",
    ],
    correctAns: 1,
  },
  {
    question: "Aaj kuch toh special karte hain!",
    options: [
      "Student of the Year",
      "Zindagi Na Milegi Dobara",
      "Dilwale",
      "3 Idiots",
    ],
    correctAns: 2,
  },
  {
    question:
      "Life mein sab kuch perfect hona chahiye, tabhi life ka mazaa hai.",
    options: [
      "Kal Ho Naa Ho",
      "Tanu Weds Manu",
      "Zindagi Na Milegi Dobara",
      "Gully Boy",
    ],
    correctAns: 3,
  },
];

export const questionsListMedium: Question[] = [
  {
    question:
      "Which movie is based on real-life events of a mission to Mars by Indian scientists?",
    options: ["Rocketry", "Mission Mangal", "Parmanu", "Swades"],
    correctAns: 1,
  },
  {
    question:
      "Which film stars Shah Rukh Khan as a coach of the Indian women’s hockey team?",
    options: ["Chak De! India", "Swades", "Dil Se", "My Name is Khan"],
    correctAns: 0,
  },
  {
    question:
      "Which film is inspired by the life of mathematician Anand Kumar?",
    options: ["Chhichhore", "Super 30", "Black", "Taare Zameen Par"],
    correctAns: 1,
  },
  {
    question: "Who played the role of Sanjay Dutt in the biopic 'Sanju'?",
    options: [
      "Ranveer Singh",
      "Varun Dhawan",
      "Ranbir Kapoor",
      "Sidharth Malhotra",
    ],
    correctAns: 2,
  },
  {
    question:
      "Which Bollywood movie features a mute Pakistani girl stranded in India?",
    options: ["Sultan", "Raazi", "Bajrangi Bhaijaan", "Tubelight"],
    correctAns: 2,
  },
  {
    question: "Which movie is centered around a blind couple's revenge story?",
    options: ["Kaabil", "Barfi", "Badla", "Black"],
    correctAns: 0,
  },
  {
    question:
      "In which film does Alia Bhatt play a spy married into a Pakistani military family?",
    options: ["Raazi", "Udta Punjab", "Dear Zindagi", "Highway"],
    correctAns: 0,
  },
  {
    question:
      "Which movie features the story of Murugan, a man who revolutionized sanitary pad manufacturing?",
    options: ["Toilet: Ek Prem Katha", "Pad Man", "Pink", "Article 15"],
    correctAns: 1,
  },
  {
    question:
      "Which film directed by Zoya Akhtar explores friendship and self-discovery during a road trip?",
    options: [
      "Dil Chahta Hai",
      "Zindagi Na Milegi Dobara",
      "Tamasha",
      "Rock On!!",
    ],
    correctAns: 1,
  },
  {
    question:
      "Which 2022 film features a Bollywood star playing a double role in a mass-action film?",
    options: ["Pathaan", "War", "Jawan", "Ek Tha Tiger"],
    correctAns: 2,
  },
];

export const questionListHard: Question[] = [
  {
    question:
      "In which film does Nawazuddin Siddiqui play the role of a contract killer named Shiv Gajra?",
    options: ["Raman Raghav 2.0", "Badlapur", "Kick", "Babumoshai Bandookbaaz"],
    correctAns: 2,
  },
  {
    question:
      "Which Anurag Kashyap film is inspired by the real-life mafia wars of Dhanbad, Jharkhand?",
    options: ["Ugly", "Black Friday", "Gangs of Wasseypur", "Paanch"],
    correctAns: 2,
  },
  {
    question:
      "In 'Swades', what is the profession of Shah Rukh Khan's character, Mohan Bhargava?",
    options: ["Teacher", "Scientist at NASA", "IAS Officer", "NGO Worker"],
    correctAns: 1,
  },
  {
    question:
      "Which film features a complex narrative told through the eyes of a man suffering from anterograde amnesia?",
    options: ["Barfi!", "Ghajini", "Talaash", "Kaabil"],
    correctAns: 1,
  },
  {
    question:
      "Which Bollywood film was inspired by the Japanese film 'Ikiru' by Akira Kurosawa?",
    options: ["Anand", "Udaan", "October", "The Lunchbox"],
    correctAns: 0,
  },
  {
    question:
      "Which 2019 film is based on the life of mathematician Anand Kumar and his educational program?",
    options: [
      "Super 30",
      "Chalk n Duster",
      "Taare Zameen Par",
      "Mission Mangal",
    ],
    correctAns: 0,
  },
  {
    question:
      "Which Bollywood film featured a narrative structure with chapters titled 'Lust', 'Anger', 'Greed', and so on?",
    options: ["Omkara", "7 Khoon Maaf", "Tumbbad", "Dev.D"],
    correctAns: 1,
  },
  {
    question:
      "In 'Black', what is the name of the girl who is deaf and blind and inspired by Helen Keller’s story?",
    options: ["Rani", "Michelle", "Durga", "Sara"],
    correctAns: 1,
  },
  {
    question:
      "Which film’s plot revolves around a father using a chessboard to train his son’s strategic thinking?",
    options: ["Taare Zameen Par", "Wazir", "Mardaani 2", "Chhichhore"],
    correctAns: 1,
  },
  {
    question:
      "Which film features the line, 'Itni shiddat se maine tumhe paane ki koshish ki hai…'?",
    options: [
      "Veer-Zaara",
      "Rab Ne Bana Di Jodi",
      "Om Shanti Om",
      "Kal Ho Naa Ho",
    ],
    correctAns: 2,
  },
];
