
  var config = {
    apiKey: "AIzaSyDOOCcNAxbUoM1ivwlbetOQnAN6lBflBzM",
    authDomain: "train-time-1316c.firebaseapp.com",
    databaseURL: "https://train-time-1316c.firebaseio.com",
    projectId: "train-time-1316c",
    storageBucket: "train-time-1316c.appspot.com",
    messagingSenderId: "934413458247"
  }; 
  
  firebase.initializeApp(config);

  var database = firebase.database();
  
  $("#add-train-button").on("click", function(event){
    event.preventDefault();
    

    var trainName = $("#train-name").val().trim();
    var trainDest = $("#destination").val().trim();
    var trainTime = moment($("#train-time").val().trim(), "HH:mm").format("HH:mm");
    var trainFreq = $("#freq").val().trim();

  

  var newTrain = {
        name: trainName,
        destination: trainDest,
        time: trainTime,
        frequency: trainFreq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  $("#train-name").val("");
  $("#destination").val("");
  $("#train-time").val("");
  $("#freq").val("");

});


database.ref().on("child_added", function(snapshot, prevKey){

console.log(snapshot.val());

var trainName = snapshot.val().name;
var trainDest = snapshot.val().destination;
var trainTime = snapshot.val().time;
var trainFreq = snapshot.val().frequency;

console.log(trainName);
console.log(trainDest);
console.log(trainTime);
console.log(trainFreq);

var convertedDate = moment(trainTime, "hh:mm").subtract(1, "years");
var newTrainTime = moment(convertedDate).format("HH:mm");
var current = moment();
var anotherConversion = moment(newTrainTime, "hh:mm").subtract(1, "years");
var diffTime = moment().diff(moment(anotherConversion), "minutes");
var remainder = diffTime % trainFreq;
var minutesAway = trainFreq - remainder;
var nextArrival = moment().add(minutesAway, 'minutes').format('h:mm a')
// var nextArrival = trainFreq + current
// console.log(nextArrival);

$(".table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>")
});

setInterval(function(){
    location.reload();
  }, 60000)

  


