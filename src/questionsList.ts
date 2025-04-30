interface Question {
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
