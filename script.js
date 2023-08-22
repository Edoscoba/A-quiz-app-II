
	  // References
	  const quizdisplay = document.getElementById("display");
	  let timeLeft = document.querySelector(".time-left");
	  let quizContainer = document.getElementById("container");
	  let nextBtn = document.getElementById("next-button");
	  let countOfQuestion = document.querySelector(".number-of-question");
	  let wrapper = document.getElementById("wrapper");
	  let displayContainer = document.getElementById("display-container");
	  let scoreContainer = document.querySelector(".score-container");
	  let restart = document.getElementById("restart");
	  let userScore = document.getElementById("user-score");
	  let startScreen = document.querySelector(".start-screen");
	  let startButton = document.getElementById("start-button");
	  let questionCount;
	  let scoreCount = 0;
	  let count = 11;
	  let countdown;
	  
	//   know your name 
	 const name = prompt("please what is your name");
alert( name +" welcome to my quiz app \n designed by obi simon \n please let me know if there are errors ")


	  //Question and Options array
	  // Add questions, options and correct option in below format
	  const quizArray = [
		{
		  id: "0",
		  question: "which of the following is NOT correct about javascript variables",
		  options: ["var Keys can be used to declare a variable ", "Variables are used to store values", "variables must be case sensitive unique ", "Variables can only store strings, numbers and booleans"],
		  correct: "Variables can only store strings, numbers and booleans",
		},
		{
			id: "1",
			question: "inside where do we put javascript",
			options: [
			  "scripter",
			  "javascript ",
			  "scripting",
			  "script",
			],
			correct: "script",
		  },
		
		{
		  id: "2",
		  question: "Where is the correct place to insert a javascript?",
		  options: [
			"both the head and the body section are correct",
			"none of the above ",
			"the  body section",
			"the  head section",
		  ],
		  correct: "both the head and the body section are correct",
		},
		{
		  id: "3",
		  question: "the external javascript must contain the script tag?",
		  options: [
			"true",
			"false",
			"",
			"",
		  ],
		  correct: "true",
		},
		{
			id: "o",
			question: "how do we create a function in javaScript",
			options: [
			  "function = myFunction()",
			  "function  myFunction()",
			  "function = myFunction()",
			  "function MyFunction()",
			 
			
			],
			correct: "function MyFunction()",
		  },
		  {
			id: "1",
			question: "which of the following will evaluate as true ",
			options: [
			  "'11' === 11",
			  "true && false",
			  "!(true || false)",
			  "'7' == 7",
			],
			correct: "'7' == 7",
		  },
		  {
			id: "2",
			question: "which componenet of for loop run afer each iteration?",
			options: [
			  "condition",
			  "none of the above ",
			  "initializer",
			  "final expression",
			],
			correct: "final expression",
		  },
		  {
			id: "3",
			question: "which character is used to make a single comment in javascrpt?",
			options: [
			  "#",
			  "// ",
			  "||",
			  "--",
			],
			correct: "//",
		  },
		  {
			id: "0",
			question: "which of the following is not a build in method of string?",
			options: [
			  ".sprit()",
			  ".fixed(n)",
			  ".indexOf()",
			  ".toLowerCase()",
			],
			correct: ".fixed(n)",
		  },
		  {
			id: "1",
			question: "which of the following is an example of explicit conversation",
			options: [
			  "'$' + 10",
			  "number('11')",
			  "Number('11')",
			  "final expression",
			],
			correct:"number('11')",
		  },
	
		  {
			id: "2",
			question: "what is javascript",
			options: [
			  " A markup language",
			  " A programming language",
			  "A styling language",
			  "A database language",
			],
			correct:"A programming language",
		  },
		  {
		  id: "3",
			question: " Which keyword is used to declare a variable in JavaScript?",
			options: [
			  "  const",
			  "  int",
			  " char",
			  "string",
			],
			correct:"const",
		  },
		  {
			id: "3",
			  question: "How do you declare a function in JavaScript?",
			  options: [
				"function myFunction()",
				"myFunction()",
				"function = myFunction()",
				"let myFunction()",
			  ],
			  correct:"function myFunction()",
			},
			{
				id: "1",
				  question: " What is the correct syntax for an if statement in JavaScript?",
				  options: [
					" if x = 5",
					"if(x === 5)",
					"   if x == 5",
					"  if x = 5 then",
				  ],
				  correct:"if(x === 5)",
				},
					{
				id: "2",
				  question: "  How do you access the length of an array in JavaScript?",
				  options: [
					"length()",
					"length",
					"size()",
					"size",
					
				  ],
				  correct:"length",
				},
				{
					id: "3",
					  question: " What is the correct way to add an element at the end of an array in JavaScript?",
					  options: [
						"arr.push(element)",
						"  arr.add(element)",
						" arr.concat(element)",
						" arr.append(element)",
						
					  ],
					  correct:"arr.push(element)",
					},
					{
					id: "0",
					  question: "Which operator is used to concatenate strings in JavaScript?",
					  options: [
						"+",
						"&",
						":",
						",",
						
					  ],
					  correct:"+",
					},
					{
						id: "1",
						  question: " What is the output of the following code? \n javascrip console.log('5' + 2);",
						  options: [
							"52",
							"7",
							"6",
							"2",
							
						  ],
						  correct:"52",
						},
						{
						id: "2",
						  question: "Which function is used to convert a string to lowercase in JavaScript?",
						  options: [
							" lowercase()",
							"toLowerCase()",
							"lowerCase()",
							" convertToLower()",
							
						  ],
						  correct:"toLowerCase()",
						},
						{
						id: "3",
						  question: "How do you comment a single line in JavaScript",
						  options: [
							" <!--This is a comment-->",
							"//This is a comment",
							"/This is a comment/",
							" %This is a comment%",
							
						  ],
						  correct:"//This is a comment",
						},
						{
							id: "0",
						
							  question: " What is the output of the following code? \n javascript \n console.log(typeof undefined",
							  options: [
								"undefined",
								" null",
								"object",
								"undefined",
								
							  ],
							  correct:"undefined",
							},

							{
							id: "1",
						
							  question: " How do you check if a variable is an array in JavaScript?",
							  options: [
								"isArray(variable)",
								"typeofArray(variable)",
								"Array.isArray(variable)",
								"undefined",
								
							  ],
							  correct:"Array.isArray(variable)",
							},
	
	
	

	
	



		  
		  
		
		
	  ];
	  // restart game
	  restart.addEventListener("click", () => {
		inital(); //call initial function
		wrapper.classList.remove("hide");
		scoreContainer.classList.add("hide");
	  });
	  // Next button
	  nextBtn.addEventListener(
		"click",
		(displayNext = () => {
		  //increment questionCount
		  questionCount += 1;
		  //if last question
		  if (questionCount == quizArray.length) {
			//hide question container and display score
			wrapper.classList.add("hide");
			scoreContainer.classList.remove("hide");
			// user score
			userScore.innerHTML =
			  "Your score is " + scoreCount + " out of " + questionCount;
		  } else {
			//display questionCount
			countOfQuestion.innerHTML =
			  questionCount + 1 + " of " + quizArray.length + " Question";
			//display Quiz
			quizDisplay(questionCount);
			//count=11 (so that it starts with 10)
			count = 11;
			//clear interval for next question
			clearInterval(countdown);
			//display timer (start countdown)
			timerDisplay();
		  }
		})
	  );
	  // Timer
	  const timerDisplay = () => {
		countdown = setInterval(() => {
		  count--;
		  timeLeft.innerHTML = `${count}s`;
		  if (count == 0) {
			//when countdown reaches 0 clearInterval and go to next question
			clearInterval(countdown);
			displayNext();
		  }
		}, 1000);
	  };
	  //display quiz
	  const quizDisplay = (questionCount) => {
		let quizCards = document.querySelectorAll(".container_mid");
		//hide other cards
		quizCards.forEach((card) => {
		  card.classList.add("hide");
		});
		//display current question card
		quizCards[questionCount].classList.remove("hide");
	  };
	  // Quiz creation
	  function quizCreator() {
		//randomly sort questions
		quizArray.sort(() => Math.random() - 0.5);
		//generate quiz
		for (let i of quizArray) {
		  //randomly sort options
		  i.options.sort(() => Math.random() - 0.5);
		  //quiz card creation
		  let div = document.createElement("div");
		  div.classList.add("container_mid", "hide");
		  //question number
		  countOfQuestion.innerHTML =
			1 + " of " + quizArray.length + " Question";
		  //question
		  let question_DIV = document.createElement("p");
		  question_DIV.classList.add("question");
		  question_DIV.innerHTML = i.question;
		  div.appendChild(question_DIV);
		  //options
		  div.innerHTML += `
<button class="option-div" onclick="checker(this)">${i.options[0]}</button>
<button class="option-div" onclick="checker(this)">${i.options[1]}</button>
<button class="option-div" onclick="checker(this)">${i.options[2]}</button>
<button class="option-div" onclick="checker(this)">${i.options[3]}</button>

`;
		  quizContainer.appendChild(div);
		}
	  }
	  // Check option is correct or not
	  function checker(userOption) {
		let userSolution = userOption.innerText;
		let question =
		  document.getElementsByClassName("container_mid")[questionCount];
		let options = question.querySelectorAll(".option-div");
		//if user's clicked anaswer==correct option stored in object
		if (userSolution === quizArray[questionCount].correct) {
		  //green background and score increment
		  userOption.classList.add("correct");
		  scoreCount++;
		} else {
		  //red background
		  userOption.classList.add("inCorrect");
		  //for marking green(correct)
		  options.forEach((element) => {
			if (element.innerText == quizArray[questionCount].correct) {
			  element.classList.add("correct");
			}
		  });
		}
		//clear interval(stop timer)
		clearInterval(countdown);
		//disabled all options
		options.forEach((element) => {
		  element.disabled = true;
		});
	  }
	  //initial setup
	  function inital() {
		quizContainer.innerHTML = "";
		questionCount = 0;
		scoreCount = 0;
		clearInterval(countdown);
		count = 11;
		timerDisplay();
		quizCreator();
		quizDisplay(questionCount);
	  }
	  // when user click on start button
	  startButton.addEventListener("click", () => {
		startScreen.classList.add("hide");
		wrapper.classList.remove("hide");
		inital();
	  });
	  //hide quiz and display start screen
	  window.onload = () => {
		startScreen.classList.remove("hide");
		wrapper.classList.add("hide");
	  };
