console.log('#ConstruindoCRUD')

const musicForm = document.querySelector('form'); //gets the HTML element

//gets the submission
musicForm.addEventListener('submit', function musicPostController(eventInfo){
  eventInfo.preventDefault(); //'preventDefault' stops the reload default event
  console.log('Song posted!')
}
)

