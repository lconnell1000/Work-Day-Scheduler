var newEventEl = $(".new-event");
var btnSave = $(".saveBtn")
var currentTime = moment().format("HH")

var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);


//when click on middle column on row can edit content inside to add event
//make form show when user clicks in 2nd column

//create function to handle form submittion
//save button at end of row in 3rd column will save content in 2nd column to 
//local storage when clicked

//data to be displayed the next time the page is shown

//each row is color coded depending wether in the future(green) 
// current (red) or past(grey)
var timeColor = function changeColor () {
    console.log(newEventEl);
    //loop through each text area
    for (var i = 0; i < newEventEl.length; i++){
        //make a string of newEventEl
        var newEventTime = newEventEl[i].id;

        //now access the element via the ID in html
        var timeColor = document.getElementById(newEventTime)

        //remove any previous classes associated with the time
        $(newEventTime).removeClass(".gone .now .upcoming");

        if (newEventTime > currentTime) {
            $(timeColor).addClass("upcoming")
        } else if (newEventTime < currentTime) {
            $(timeColor).addClass("gone")
        } else {
            $(timeColor).addClass("now")
        }
    }
}

//check every minute to see if color should change
setInterval(timeColor(), (6000))