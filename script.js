var newEventEl = $(".new-event");
var saveBtn = $(".saveBtn")
var currentHour = moment().format("HH")

var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

//need to load any stored data each time the page is loaded
function showEvents() {
    for (var k=0; k<newEventEl.length; k++) {

        var eventData = newEventEl[k].id;

           //get the element from the HTML using the ID
        var dataSaved = document.getElementById(eventData)

        var properTime = 9 + k;
        var dataToRender = localStorage.getItem("data" + properTime);
        dataSaved.textContent = dataToRender;
    }
}


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

        if (newEventTime > currentHour) {
            $(timeColor).addClass("upcoming")
        } else if (newEventTime < currentHour) {
            $(timeColor).addClass("gone")
        } else {
            $(timeColor).addClass("now")
        }
    }
}

//check every minute to see if color should change
setInterval(timeColor(), (6000))

//need to get the data in the text area to save when button is clicked
saveBtn.on('click', dataSave)

function dataSave(event){
    event.preventDefault();

    for (var j=0; j <newEventEl.length; j++) {

        var eventData = newEventEl[j].id;
        //get the element from the HTML using the ID
        var dataSaved = document.getElementById(eventData)
        // actual time will be 9 + whatever j is, as when j =0 will be looking 
        //at 09, j=1 will be looking at 10 etwi
        var properTime  = 9 + j;
        //sava the data to the local storage
        data = dataSaved.value;
        localStorage.setItem("data" + properTime, data);
    }
}


//clear data at end of each working day between 6 and 7pm
//after 7pm will be able to set new data.
function wipeData () {
    if (currentHour === 18) {
        localStorage.clear
    }
}

showEvents()
wipeData();