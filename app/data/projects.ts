import fitImg1 from "@/public/images/fitrquest/fitrquest_screenshot1.png";
import fitImg2 from "@/public/images/fitrquest/fitrquest_screenshot2.png";
import offImg1 from "@/public/images/rolequiz/role_screenshot1.png";
import offImg2 from "@/public/images/rolequiz/role_screenshot2.png";
import offSnip from "@/public/images/rolequiz/role_snippet.png";
import socImg1 from "@/public/images/socquiz/soc_screenshot1.png";
import socImg2 from "@/public/images/socquiz/soc_screenshot2.png";
import socSnip from "@/public/images/socquiz/soc_snippet.png";
import marvImg1 from "@/public/images/marvel/marvel_screenshot1.png";
import marvImg2 from "@/public/images/marvel/marvel_screenshot2.png";

export const projects = {
  fitrquest: {
    title: "FitrQuest",
    description:
      "This project helps users discover which sport best suits their fitness goals. It provides a personalized path with estimated calorie requirements, automatically curated meal plans, and training tips to keep users informed and motivated.",
    demoLink: "https://fitrquest-frontend.onrender.com/",
    gitLink: "https://github.com/Nathan-47/fitrquest",
    challenge: [
      "Using Postman to test URL routes was a first for me and made testing login and signup endpoints easy to see if they’re working and if any errors occur that affect user experience.",
      "JWT Tokens was a first for me also and I was intrigued on how it is used in applications. As I wanted to create a page for only signed up users this was perfect as JWT verifies identities and protect routes.",
      "Using AuthContext I learnt that it tracks authentication state across the app. Letting components check whether a user is logged in without passing props, making it an easier experience for me development wise.",
      "Building a MERN app MongoDB is imperative and I learned how to use schemas to define structured fields like name, email, and password for login/signup.",
    ],
    improvements: [
      "Regarding the schema I will look to apply rules such as required and unique to enforce data integrity and simplify management.",
      "Provide more questions to get a more refined/accurate end result",
      "Allow user to create a new password",
    ],
    image1: fitImg1,
    image2: fitImg2,
    alt1: "FitrQuest dynamic quest page for user to begin fitness journey",
    alt2: "Journey path complete page with information on the fitness quest they are given.",
    snippet: "",
    alt3: "",
  },
  officerquiz: {
    title: "Officer Role Quiz",
    description:
      "We wanted to engage students more interactively, so we created a quiz that uses their choices to determine which officer role best suits them. This way, they can confidently run for that role in the next officer election. The quiz helps remove the guesswork and provides students with a much more clearer idea of what role they fit best.",
    demoLink: "https://nathan-47.github.io/officer-role-quiz/",
    challenge: [
      "I first used if statements to help determine the role that should be given to user once the quiz is completed but this was bad practice as code was repeated. Therefore I used the find() method to efficiently determine the user’s final result. This approach is much simpler than relying on multiple if statements, which was less efficient.",
      "I used a point system to help with user results. To ensure that users received the correct role based on their answers and accumulated points, I researched methods for accurate scoring. I then implemented a threshold system, each role has a predefined threshold, and find() returns the first role whose threshold is met or exceeded by the user’s total points. This ensures that each result is unique and tailored to the individual user.",
    ],
    gitLink: "https://github.com/Nathan-47/officer-role-quiz",
    improvements: [
      "Provide more questions to extract a more truly tested officer role result as 7 does not fell like enough. To counter this, we do need to keep in mind that user engagement as users may start to get bored and see more questions as tedious.",
      "Improve the UI on mobile so that all questions fit on one screen and reduce scrolling.",
    ],
    image1: offImg1,
    image2: offImg2,
    alt1: "Shows the start screen of the quiz displaying the question and anser blocks complimented by an image.",
    alt2: "Quiz completed page that displays to the user what role they have been given.",
    snippet: offSnip,
    alt3: "shows code snippet of the .find syntax",
  },
  socquiz: {
    title: "Society Finder Tool",
    description:
      "Developed a quiz to help students discover which society best matches their interests. The tool enables students to identify suitable societies with confidence and reduces hesitation when deciding which to join during their university life.",
    demoLink: "https://nathan-47.github.io/Societyquiz/",
    challenge: [
      "Using URLSearchParams allows me to avoid hardcoding the category in the URL. This makes it simple to dynamically update both the heading and the grid cards on the results page, providing a smoother and flexible user experience when displaying the societies category displayed to the user.",
    ],
    gitLink: "https://github.com/Nathan-47/Societyquiz",
    improvements: [
      "Once the user has completed their quiz and is given their suited societies category such as Sport, general interest etc, the tool could then calculate the users answers and give the percentage of how likely it matches to the users personality.",
    ],
    image1: socImg1,
    image2: socImg2,
    alt1: "Start page for users that displays a question and two answers",
    alt2: "Result page to show what societies user should join after answering all questions given.",
    snippet: socSnip,
    alt3: "code snippet showing the usage of the URLSearchParams for the society categories.",
  },
  marvelapi: {
    title: "Marvel Search",
    description:
      "Search for any Marvel character within a database powered by Marvel.com. The selected character is displayed with their name, bio, and image retrieved through the API, complemented by minimal styling.",
    demoLink: "",
    challenge: [
      "I can see why react is very popular, showing me hooks and how it makes working with components easier and help change the value of a state condition. Got a great insight on how useEffect works I had to read upon on what it can do and through this knew it was imperative especially working with an api.",
      "It is my first time using sass and it has made me realise how efficient it is to style an app. It’s also much tidier and more organised thus being a big help when re-visiting for any future modifications.",
      "I found it easier to use git to add content to my repository. I did run into a few origin master issues but I managed to research the problem and resolve it.",
      "To prevent all the characters being displayed at one time I had to visit a developer web doc to know how to solve this and so I found map() and slice() methods. Both allowed me to display and pick out one character from the index of items from the array returned.",
    ],
    gitLink: "https://github.com/Nathan-47/marvelalias-search",
    improvements: [
      "While using the search, I noticed that users have to manually delete text using the backspace key, which can negatively impact user experience. This issue can be amended by implementing a clear button within the input box.",
    ],
    image1: marvImg1,
    image2: marvImg2,
    alt1: "User has typed in Venom and is given all data on the character Venom",
    alt2: "User has typed in Thor and is given all data on the character Thor",
    snippet: "",
    alt3: "",
  },
};
