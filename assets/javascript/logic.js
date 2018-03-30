
  var config = {
    apiKey: "AIzaSyDOOCcNAxbUoM1ivwlbetOQnAN6lBflBzM",
    authDomain: "train-time-1316c.firebaseapp.com",
    databaseURL: "https://train-time-1316c.firebaseio.com",
    projectId: "train-time-1316c",
    storageBucket: "",
    messagingSenderId: "934413458247"
  }; 
  
  firebase.initializeApp(config);

  var database = firebase.database;

  $("#add-train-btn").on("click", function(event){
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var trainDest = $("#destination").val().trim();
    var trainTime = moment($("#train-name").val().trim(), "hh:mm").format("X");
    var trainFreq = $("#freq").val().trim();

  });

  var newTrain = {
        name: trainName,
        destination: trainDest,
        time: trainTime,
        frequency: trainFreq
  }

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);
  
  
  
  