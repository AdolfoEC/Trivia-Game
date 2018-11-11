function submitAnswers(){
  var total = 5;
  var score = 0;

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  
 for (i = 1; i <= total;i++){
   if(eval("q"+i) == null || eval("q"+i) == ""){
     alert("youmissedquestion " + 1);
     return false;
   }
 }

 var answers = ["b", "a", "d", "b", "d"]

 if (q1 == answers[1]){
   score++;
 }
 if (q2 == answers[0]){
  score++;
}
if (q3 == answers[3]){
  score++;
}
if (q4 == answers[1]){
  score++;
}
if (q5 == answers[3]){
  score++;
}

alert("you scored " +score+ " out of " +total);
}
