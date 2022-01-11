var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);


//when click on middle column on row can edit content inside to add event
//make form show when user clicks in 2nd column

//create function to handle form submittion
function handleFormSubmit(event) {
    event.preventDefault();

    var userInput = $('input(name="user-input').val();
}
//save button at end of row in 3rd column will save content in 2nd column to 
//local storage when clicked

//data to be displayed the next time the page is shown

//each row is color coded depending wether in the future(green) 
// current (red) or past(grey)
