

const selector = (value) => {
  return document.querySelector(value);
}

//FORM FOR FLIGHT
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

// FORM FOR HOTEL
const hotelForm = selector("#hotelForm");



const hotel_destination = selector("#hotel_destination");
const hotel_preference = selector("#hotel_preference");
const check_in_date = selector("#check_in_date");
const check_out_date = selector("#check_out_date");
// const radio_one = selector('input[name=inlineDefaultRadiosExample]:checked');
// const radio_two = selector("#radio_two");
// const radio_three = selector("#radio_three");
// const nationality = selector("#nationality");
let checkBox  = [...document.querySelectorAll('input[type="radio"]')] 
  console.log('hello')
  console.log(checkBox);
hotelForm.addEventListener('submit', (e)=>{
      e.preventDefault();
//display value of checked checkbox
function checkboxChecked(boxArray) {
  var ArgLength = boxArray.length;
  let checked = [];
  for (var i = 0; i < ArgLength; i++) {
      if (boxArray[i].checked) {
          // console.log(boxArray[i].value)
          checked.push(boxArray[i].value)
      }
  }
  return checked;
}
     
      // storage of data in sessionStorage
      sessionStorage.setItem('hotelForm', JSON.stringify ([{
        
            checkradio:checkboxChecked(checkBox),
         hotel_destination:hotel_destination.value,
         hotel_preference:  hotel_preference.options[hotel_preference.selectedIndex].value,
         check_in_date:check_in_date.value,
         check_out_date: check_out_date.value,
         nationality: nationality.options[nationality.selectedIndex].value
      }]))

  console.log(JSON.parse(sessionStorage.getItem('hotelForm')))
})

// FORM FOR RIDE
const carForm = selector("#carForm");

const travel_type = selector('#travel_type');
const source_city = selector('#source_city');
const destination_city = selector('#destination_city');
const multiCity_trip_date_1 = selector('#multiCity_trip_date_1');
const multiCity_trip_date_2 = selector('#multiCity_trip_date_2');
const one_way_trip_date = selector('#one_way_trip_date');
const round_trip_date = selector('#round_trip_date');
const returnTrip_date = selector('#returnTrip_date');
const pickup_hours = selector('#pickup_hours');
const pickup_minutes = selector('#pickup_minutes');
const pickup_meridiem = selector('#pickup_meridiem');

carForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    sessionStorage.setItem('carForm', JSON.stringify ([{
          travel_type: travel_type.options[travel_type.selectedIndex].value,
          source_city: source_city.value,
          destination_city: destination_city.value,
          pickup_hours: pickup_hours.value,
          pick_minutes  : pickup_minutes.value,
          pickup_meridiem:pickup_meridiem.value,
          multiCity_trip_date_1:multiCity_trip_date_1.value,
          multiCity_trip_date_1: multiCity_trip_date_1.value,
          one_way_trip_date: one_way_trip_date.value,
          round_trip_date: round_trip_date.value,
          returnTrip_date: returnTrip_date.value
    }]))


console.log(JSON.parse(sessionStorage.getItem('carForm')))
  })

  //  FORM OF BUS
  const busForm = selector('#busForm');


  const bus_departure = selector('#bus_departure');
  const bus_destination = selector('#bus_destination');
  const departing = selector('#departing');

  busForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    sessionStorage.setItem('busForm', JSON.stringify ([{
     bus_departure: bus_departure.value,
     bus_destination: bus_destination.value,
     departing: departing.value
}]))


console.log(JSON.parse(sessionStorage.getItem('busForm')))
  })