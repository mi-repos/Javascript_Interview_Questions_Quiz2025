// Array of 50 JavaScript interview questions with options
const questions = [
    { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the current function", "Refers to the global object", "Refers to the object it is a method of", "None of the above"], correct: 2 },
    { question: "Which of the following is not a JavaScript data type?", options: ["String", "Number", "Boolean", "Character"], correct: 3 },
    { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "create function myFunction()", "function: myFunction()", "function = myFunction()"], correct: 0 },
    { question: "What does 'NaN' stand for in JavaScript?", options: ["Not a Node", "Not a Number", "Not a Nonsense", "None of the above"], correct: 1 },
    { question: "What is the correct syntax for a for loop in JavaScript?", options: ["for (i = 0; i < 5; i++)", "for i = 0 to 5", "for (i < 5; i++)", "loop i from 0 to 5"], correct: 0 },
    { question: "How can you add a comment in JavaScript?", options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "All of the above"], correct: 3 },
    { question: "Which of these methods can be used to iterate over an array in JavaScript?", options: ["for loop", "forEach() method", "map() method", "All of the above"], correct: 3 },
    { question: "What is the result of 2 + '2' in JavaScript?", options: ["22", "4", "NaN", "undefined"], correct: 0 },
    { question: "What is the difference between '==' and '===' in JavaScript?", options: ["'==' compares values, '===' compares values and types", "'==' compares types, '===' compares values", "'==' compares objects, '===' compares arrays", "None of the above"], correct: 0 },
    { question: "What is a closure in JavaScript?", options: ["A function that returns another function", "A function with access to its own scope, outer function scope, and global scope", "A function that calls itself", "A variable that cannot be accessed outside its function"], correct: 1 },
    { question: "What is the output of typeof null in JavaScript?", options: ["null", "object", "undefined", "NaN"], correct: 1 },
    { question: "Which operator is used to assign a value to a variable in JavaScript?", options: ["=", "==", "===", ":="], correct: 0 },
    { question: "Which method is used to remove the last element from an array?", options: ["pop()", "shift()", "push()", "unshift()"], correct: 0 },
    { question: "What is the correct way to write an array in JavaScript?", options: ["[]", "{}", "<>", "()"], correct: 0 },
    { question: "What does the 'continue' statement do in JavaScript?", options: ["Terminates the current loop", "Skips the current iteration of a loop", "Exits the current function", "None of the above"], correct: 1 },
    { question: "Which of the following is used to handle asynchronous code in JavaScript?", options: ["callbacks", "promises", "async/await", "All of the above"], correct: 3 },
    { question: "How can you check if an object is an array in JavaScript?", options: ["typeof obj === 'array'", "obj instanceof Array", "Array.isArray(obj)", "None of the above"], correct: 2 },
    { question: "What is the output of 3 + 2 + '1' in JavaScript?", options: ["32", "5", "7", "NaN"], correct: 0 },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Online Notation", "None of the above"], correct: 0 },
    { question: "Which method converts a JavaScript object into a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "None of the above"], correct: 1 },
    { question: "What is the scope of a variable declared using 'let' in JavaScript?", options: ["Global", "Function", "Block", "None of the above"], correct: 2 },
    { question: "Which of the following is used to create an object in JavaScript?", options: ["{}", "[]", "()", "None of the above"], correct: 0 },
    { question: "Which JavaScript function is used to find the largest number in an array?", options: ["max()", "Math.max()", "largest()", "Math.getMax()"], correct: 1 },
    // Add more dummy questions here up to 50...
  ];
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let timerInterval;
  let timeLeft = 30 * 60; // 30 minutes in seconds
  
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-number').textContent = `Question: ${currentQuestionIndex + 1}/50`;
  
    const options = document.querySelectorAll('.option');
    options.forEach((button, index) => {
      button.textContent = question.options[index];
    });
  
    document.getElementById('feedback').textContent = '';
  }
  
  function checkAnswer(selectedOptionIndex) {
    const question = questions[currentQuestionIndex];
    const correctOptionIndex = question.correct;
  
    if (selectedOptionIndex === correctOptionIndex) {
      correctAnswers++;
    }
  
    const feedback = document.getElementById('feedback');
    if (selectedOptionIndex === correctOptionIndex) {
      feedback.textContent = "Correct! 🎉";
      feedback.style.color = 'green';
    } else {
      feedback.textContent = "Incorrect! 😞";
      feedback.style.color = 'red';
    }
  
    document.getElementById('next-question').style.display = 'block';
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      document.getElementById('next-question').style.display = 'none';
    } else {
      endTest();
    }
  }
  
  function submitTest() {
    endTest();
  }
  
  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    if (timeLeft === 0) {
      endTest();
    } else {
      timeLeft--;
    }
  }
  
  function endTest() {
    clearInterval(timerInterval);
    document.getElementById('next-question').style.display = 'none';
    
    let resultMessage = '';
    if (correctAnswers >= 40) {
      resultMessage = 'Excellent! 🎉';
    } else if (correctAnswers >= 25) {
      resultMessage = 'Good! 👍';
    } else {
      resultMessage = 'Fail! 😞';
    }
  
    document.getElementById('feedback').textContent = `Test Finished! You answered ${correctAnswers} questions correctly. ${resultMessage}`;
    document.getElementById('feedback').style.color = 'blue';
    document.getElementById('submit-test').style.display = 'none';  // Hide the submit button once test is ended
  }
  
  window.onload = function() {
    loadQuestion();
    timerInterval = setInterval(updateTimer, 1000); // Update timer every second
  };
  