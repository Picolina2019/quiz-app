const data = [
  {
    question:
      "Which sea creature has three hearts??   ",
    answers: ["Shark", "Octopus", "Whale", "Dolphin"],
    correct: "Octopus",
    questionId: "099099"
  },
  {
    question:
      'What is the Italian word for pie? ?',
    answers: ["Pizza", "Pasta", "Pesce", "Pane"],
    correct: "Pizza",
    questionId: "183452"
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "What is one quarter of 1,000?",
    answers: [
      "220",
      "230",
      "240",
      "250"
    ],
    correct: "250",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "496293"
  },
  {
    question:
      "When did the French Revolution end?",
    answers: [
      "1971",
      "1620",
      "1799",
      "1700"
    ],
    correct: "1799",
    questionId: "588909"
  },
  {
    question:
      "I have a cake and a table named after me, and I'm used all round the world. What am I?",
    answers: ["Tea", "Juice", "Cola", "Coffee"],
    correct: "Coffee",
    questionId: "648452"
  },
  {
    question: "What is the first book of the Old Testament?",
    answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correct: "Genesis",
    questionId: "786649"
  },
  {
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    answers: ["Key", "Sword", "Pen", "Cellphone"],
    correct: "Key",
    questionId: "839754"
  },
  {
    question:
      "Name this stringless fictional character created by Carlo Collodi over one hundred years ago?",
    answers: [
      "Pinocchio",
      "Pocollino",
      "Paganello",
      "Panfilinio"
    ],
    correct: "Pinocchio",
    questionId: "98390"
  },
  {
    question: "What does a funambulist walk on?",
    answers: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
    correct: "A Tight Rope",
    questionId: "1071006"
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: ["Watch", "Money", "Keys", "Notebook"],
    correct: "Watch",
    questionId: "1174154"
  },
  {
    question: "Who wrote the poem Paradise Lost?",
    answers: ["Charles Dickens","John Milton", "George Orwell", "Jane Austen"],
    correct: "John Milton",
    questionId: "1226535"
  },
  {
    question: "How would one say goodbye in Spanish?",
    answers: ["Adiós", " Hola", "Au Revoir", "Salir"],
    correct: "Adiós",
    questionId: "1310938"
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Skin", "Heart", "large Intestine", "Liver"],
    correct: "Skin",
    questionId: "1436873"
  },
  {
    question: "Which Russian town suffered an infamous nuclear disaster in 1986? ",
    answers: ["Moscow", "Minsk", "Grodno", "Chernobyl"],
    correct: "Chernobyl",
    questionId: "1515110"
  },
  {
    question: "On a dartboard, what number is directly opposite No. 1?",
    answers: ["19", "20", "12", "15"],
    correct: "19",
    questionId: "1642728"
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answers: ["Subscriber", "Single", "Secure", "Solid"],
    correct: "Subscriber",
    questionId: "1747256"
  },
  {
    question:
      "Which word can be placed before bottle, bell and bird?",
    answers: ["Blue", "Black", "Box", "Back"],
    correct: "Blue",
    questionId: "1822532"
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ],
    correct: "George Washington",
    questionId: "195075"
  },
  {
    question: 'What is "dabbing"?',
    answers: ["A dance", "A medical procedure", "A sport", "A language"],
    correct: "A dance",
    questionId: "2019778"
  },
  {
    question: "Which ocean surrounds the Maldives?",
    answers: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic ocean"],
    correct: "Indian Ocean",
    questionId: "2134343"
  },
  {
    question: "Which one of the following rhythm games was made by Harmonix?",
    answers: [
      "Rock Band",
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ],
    correct: "Rock Band",
    questionId: "2210799"
  },
  {
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    answers: ["Gorilla", "Tiger", "Panda", "Crocodile"],
    correct: "Gorilla",
    questionId: "2379831"
  },
  {
    question: "Red Vines is a brand of what type of candy?",
    answers: ["Licorice", "Lollipop", "Chocolate", "Bubblegum"],
    correct: "Licorice",
    questionId: "2426418"
  },
  {
    question: "What is manzanilla?",
    answers: ["Green banana", "A light cherry", "Cold coffee", "Fresh juice"],
    correct: "A light cherry",
    questionId: "2510086"
  },
  {
    question: "What is on display in the Madame Tussaud's museum in London?",
    answers: [
      "Wax sculptures",
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ],
    correct: "Wax sculptures",
    questionId: "2685745"
  },
  {
    question:
      "How many sides, in total, would three triangles and three rectangles have?",
    answers: ["21", "31", "13", "41"],
    correct: "21",
    questionId: "2796884"
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answers: ["Pink", "Yellow", "Blue", "Green"],
    correct: "Pink",
    questionId: "2838900"
  },
  {
    question: 'What is the French word for "hat"?',
    answers: ["Chapeau", "Bonnet", " Écharpe", " Casque"],
    correct: "Chapeau",
    questionId: "298060"
  },
  {
    question: "Five dollars is worth how many nickles?",
    answers: ["100", "50", "25", "69"],
    correct: "100",
    questionId: "3096579"
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answers: [
      "Benjamin Franklin",
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "Benjamin Franklin",
    questionId: "3182461"
  },
  {
    question: "Which country does the sport of pelato come from?",
    answers: [
      "Germany",
      "Sweden",
      "The US",
      "Spain"
    ],
    correct: "Spain",
    questionId: "3239112"
  },
  {
    question: "What was Louis Armstrong's chosen form of music? ",
    answers: ["Jazz", "Hip-Hop", "Rap", "Opera"],
    correct: "Jazz",
    questionId: "3318503"
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: ["Truth", "Answer", "Cause", "Source"],
    correct: "Truth",
    questionId: "3410327"
  },
  {
    question: "What is the name of Poland in Polish?",
    answers: ["Polska", "Pupcia", "Polszka", "Póland"],
    correct: "Polska",
    questionId: "3542596"
  },
  {
    question: "The New York Times slogan is, “All the News That’s Fit to…”",
    answers: ["Print", "Digest", "Look", "Read"],
    correct: "Print",
    questionId: "3667517"
  },
  {
    question: "Alfred, an ancient King of Wessex, is famous for burning what?",
    answers: [
      "Houses",
      "Clothes",
      "Cars",
      "Cakes"
    ],
    correct: "Cakes",
    questionId: "3791672"
  },
  {
    question: "Which restaurant's mascot is a clown?",
    answers: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
    correct: "McDonald's",
    questionId: "3893585"
  },
  {
    question: 'What color is the "Ex" in FedEx Ground?',
    answers: ["Green", "Red", "Light Blue", "Orange"],
    correct: "Green",
    questionId: "3913430"
  },
  {
    question: "How tall is the Burj Khalifa?",
    answers: ["2,722 ft", "2,717 ft", "2,546 ft", "3,024 ft"],
    correct: "2,722 ft",
    questionId: "4049121"
  },
  {
    question:
      "Which of the following card games revolves around numbers and basic math?",
    answers: ["Uno", "Go Fish", "Twister", "Munchkin"],
    correct: "Uno",
    questionId: "4150746"
  },
  {
    question:
      "Which Australian marsupial enjoy eating eucalyptus leaves? ",
    answers: ["Horse", "Panda", "Koala", "Kangaroo"],
    correct: "Koala",
    questionId: "4235063"
  },
  {
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    answers: ["Libra", "Gemini", "Taurus", "Capricorn"],
    correct: "Libra",
    questionId: "4321002"
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answers: [
      "John F. Kennedy",
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "John F. Kennedy",
    questionId: "4442286"
  },
  {
    question: "What is Tasmania?",
    answers: [
      "An Australian State",
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ],
    correct: "An Australian State",
    questionId: "4564430"
  },
  {
    question: "If you rode a Chopper, what was this?",
    answers: ["Bicycle", "Car", "Skate", "Horse"],
    correct: "Bicycle",
    questionId: "4630606"
  },
  {
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    answers: ["Brazil", "China", "South Korea", "United States of America"],
    correct: "Brazil",
    questionId: "4795960"
  }
  
];

export default (n = 5) =>
  Promise.resolve(data.sort(() => 0.5 - Math.random()).slice(0, n));
