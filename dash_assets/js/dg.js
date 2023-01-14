let submitBtn = document.querySelector('.submit')
submitBtn.addEventListener('click', e => getGoal(e))


const getGoal = (e) =>{
  e.preventDefault()
  let selectEL = document.getElementById('levels')
  let difficulty = selectEL.value 
  let goal = document.querySelector('.rec_Time')

  if(difficulty == 'Easy'){
    goal.innerText = 'Your goal is: 25 MINUTES'
  }
  if(difficulty == 'Medium'){
    goal.innerText = 'Your goal is: 60 MINUTES'
  }
  if(difficulty == 'Hard'){
    goal.innerText = 'Your goal is: 120 MINUTES'
  }
}







