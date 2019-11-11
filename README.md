
# train-schedule
[Train Schedule](https://dimz13.github.io/train-schedule/)

# train-schedule
![Train](train.png)


## How it works
  - This page will display train time table.
  - User/Admin can add a new train to the table by using the "Add a Train" form.
  - The train schedules will take the current time and thus will be displayed updated times.
  - Firebase is used to store the data entered.

    

## Tools Used

- [Visual Studio Code](#vscode)
- [Chrome Browser](#chrome)
- [GitLab](https://ucb.bootcampcontent.com/)
- [GitHub](https://github.com/)
- [W3Schools](https://www.w3schools.com/default.asp)
- [SlackForum] (#slackforum)
- [StackOver Flow](https://stackoverflow.com/)



## Core Technologies Used
 - [HTML] (#html)
 - JavaScript
 - JQuery
 - BootStrap CSS Framework
 - Firebase
 - momentjs


## New Learning in this project:
- Used Firebase - Code snippet:
```jQuery
 database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var destination = childSnapshot.val().destination;
        var firstTrainTime = childSnapshot.val().firstTrainTime;
        var frequency = childSnapshot.val().frequency;
        });
```
- Used momentjs for the timimg part of the train schedule
```Javascript
function updateTime() {
            var currentTime = moment().format('HH:mm');
            console.log("Current Time: ", currentTime);
        };
 ```       


