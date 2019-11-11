function train() {


    var trainName;
    var destination;
    var firstTrainTime;
    var frequency;
    var nextArrival;
    var firstTimeConverted;
    var currentTime;
    var diffTime;
    var tRemaining;
    var tMinutesToNextTrain;
    var nextTrain;



    var firebaseConfig = {
        apiKey: "AIzaSyAHZIQT99TNlbPG49Dqk4cLQkWPUUc0k9Y",
        authDomain: "fir-new-e5b92.firebaseapp.com",
        databaseURL: "https://fir-new-e5b92.firebaseio.com",
        projectId: "fir-new-e5b92",
        storageBucket: "fir-new-e5b92.appspot.com",
        messagingSenderId: "675493617177",
        appId: "1:675493617177:web:765bfa625db5029b4c5488",
        measurementId: "G-NSGQ69H4MN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();


    $(".btn").on("click", function (event) {
        event.preventDefault();


        trainName = $("#trainName").val().trim();
        console.log(trainName)
        destination = $("#destination").val().trim();
        console.log(destination)
        firstTrainTime = $("#firstTrainTime").val().trim();
        console.log(firstTrainTime)
        frequency = $("#frequency").val().trim();
        console.log(frequency)




        //
        //Temp storage of data
        var newTrain = {
            name: trainName,
            destination: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency
        };
        database.ref().push(newTrain);

        //Clear all columns
        $("#trainName").val("");
        $("#destination").val("");
        $("#firstTrainTime").val("");
        $("#frequency").val("");
    });
    // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var destination = childSnapshot.val().destination;
        var firstTrainTime = childSnapshot.val().firstTrainTime;
        var frequency = childSnapshot.val().frequency;

        // Train Info
        console.log(trainName);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequency);

        function updateTime() {
            var currentTime = moment().format('HH:mm');
            console.log("Current Time: ", currentTime);
        }

        var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted, " First Time Converted Time");
        updateTime();

        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log(diffTime, " Difference in Time");

        var tRemaining = diffTime % frequency;
        console.log(tRemaining, " Time remaining");

        var tMinutesToNextTrain = frequency - tRemaining;
        console.log(tMinutesToNextTrain, " Minutes to Next Train");

        var nextTrain = moment().add(tMinutesToNextTrain, "minutes");
        var nextArrival = moment(nextTrain).format("HH:mm");
        console.log("Next Train at : ", nextArrival);

        // Create the new row
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(destination),
            $("<td>").text(frequency),
            $("<td>").text(nextArrival),
            $("<td>").text(tMinutesToNextTrain)

        );

        // Append the new row to the table
        $("#train-table > tbody").append(newRow);

    });
}