const Age = 13;
if (Age >= 13){
    console.log("Not up 18");
};

//if else statement

const userAge = 20
if(userAge <= 17){
    console.log(" Useer is Under age")
}
else{
    if(userAge >= 18){
        console.log("User is Adult")
    }
}

const value = 19;
if(value % 2 === 0){
    console.log(value+" "+"Value is Even Number")
    }
else{
    if(value % 2 === 1){
        console.log(value+" "+ "is odd number");
    }
};

//another if ele
const score = 41; 
if (score >= 10 && score <= 19 ){
    console.log("Score Need to Improve");
}
else{
    if(score >= 20 && score <= 30){
    console.log("Score is great");
    }

else{
    if(score >=32){
        console.log("Above expected");
    }
}
}

const mark = 50;
if(mark < 1 && mark <= 20){
    console.log("Fail");
}
else{
    if(mark < 21 && mark <= 30){
        console.log("Pass");   
}   
else{
    if(mark < 41 && mark <= 50){
        console.log("credit");
}

else{
    if(mark < 51 && mark <= 60){
        console.log("Excellent");
    }
}
}
}

const day = 4; 
if(day === 1){
    console.log("Sunday");
}
else{
    if(day === 2){
        console.log("Monday");
    }
else
    {
    if(day === 3){
        console.log("Tuesday");
    }
    else{
        if(day === 4){
            console.log("Wednesday");
        }
        else{
            if(day === 5){
                console.log("Thursday");
            }
            else{
                if(day === 6){
                    console.log("Friday");
                }
                else{
                    if(day === 7){
                        console.log("Saturday");
                    }
                }
            }
        }
    }
}
}

//switch statement
const WeekDay = 8;
switch(WeekDay){
case 0:
    console.log("Sunday");    
    break;
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3: 
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursaday");
    break;
case 5: 
    console.log("Friday");
    break;
 case 6:
    console.log("Saturday");
    break;
default:
    console.log("Weekday not available, try again.")
}

//switch statement User role

const userRole = "Editor"
switch(userRole){
case "Admin":
    console.log("Access Dennied");
    break;
case "Editor":
    console.log("Access Granted");
    break;
case "Viewer":
    console.log("No User Access ")
    break;
default: 
    console.log("User Input not Recongnized.")
}

//Fall Through Behaviour use for grouping cases
const userAccess = "Admin";
switch(userAccess){
case "Admin":
    console.log("Edit Document");
case "Editor":
    console.log("Document Access Granted")
    break;
case "Cleaner": 
    console.log("No Document Access");
    break;
default:
    console.log("Input Undefined");

}

// switch statement for Logical operators 
const testScore = 35;
switch(true){
case testScore >= 0 && testScore <= 14:
    console.log("Poor Performance");
    break;
case testScore >= 15 && testScore <= 29:
    console.log("Fair Performance");
    break
case testScore >= 30 && testScore <= 39:
    console.log("Good Performance");
    break
case testScore >= 40 && testScore <= 49:
    console.log("Better Performance")
    break
default: 
    console.log("Score not available");

}