const selector = (value) => {
  return document.querySelector(value);
}

//FORM
const flightForm = selector('#flightForm');

const origin = selector('#originFrom');
const destination = selector('#destinationTo');
const departingDate = selector('#departing-date-picker');
const returningDate = selector('#returning-date-picker');
const adult = selector('#adultNumber');
const children = selector('#childrenNumber');
const classType = selector('#classType');

//SUBMIT FORM
flightForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //store data in sessionStorage as an object in an array

  sessionStorage.setItem('flightData', JSON.stringify([{
   adult:adult.options[adult.selectedIndex].value,
    children:children.options[children.selectedIndex].value,
    classtype:classType.options[classType.selectedIndex].value, 
    origin:origin.value,
    destination:destination.value,
    departingDate:departingDate.value,
    returningDate:returningDate.value
  }]))

  // console.log(
  //   origin.value,
  //   destination.value,
  //   departingDate.value,
  //   returningDate.value,
  //   adult.options[adult.selectedIndex].value,
  //   children.options[children.selectedIndex].value,
  //   classType.options[classType.selectedIndex].value
  // )

  console.log(JSON.parse(sessionStorage.getItem('flightData')))
})
