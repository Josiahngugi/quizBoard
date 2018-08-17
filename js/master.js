var answers=[]
var quizs=[1,2,3,4,5]
var marks=[]
var average=0
$(document).ready(function(){
  $("#buttonAns").click(function(quiz){
    for(i=0;i<quizs.length;i++){
      var choice=parseInt($("form input[name='"+ i + "']:checked").val());
      if(isNaN(choice)){
        alert("Please ensure you fill all questions")
        break;
      }
      else {
        answers.push(choice)
      }
    }

    // this is the business logic
    if(answers[0]===2){
      marks.push(3)

       if(answers[1]===3){
        marks.push(5)

        if(answers[2]===1){
          marks.push(2)

          if(answers[3]===2){
            marks.push(5)
            if(answers[4]===1){
              marks.push(5)
            }
            else {
              marks.push(0)
            }
          }
          else {
            marks.push(0)
          }
        }
        else {
          marks.push(0)
        }

        }
        else {
          marks.push(0)
        }

      }
    else {
      marks.push(0)
    }
    average=marks.reduce((a,b)=>a+b,0)*5
    alert("Your marks:"+ average +"%")
  })
})
