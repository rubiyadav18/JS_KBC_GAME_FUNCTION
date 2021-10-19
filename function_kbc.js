function kbc(){
        var questions = ["what is  our national flower", "what is our national animal", "what is our national sweet", "what is our national tree"];
        var options = [["Lotus", "Rose", "Jasmine", "Lily"], ["Lion", "Elephant", "Tiger", "Bear"], ["Rasgulla", "Jalabi", "Mithai", "Milkcake"], ["Neem", "Banyan", "Papaya", "Guava"]];
        var answers = [1, 3, 2, 2];
        var fifty_fifty = [["Jasmine", "Lotus"], ["Tiger", "Lion"], ["Rasgulla", "Jalabi"], ["Banyan", "papaya"]];
        var fifty_answers = [2,1,2,1]; 
        var lifelineCount= 0;
        var i = 0;
        while (i < questions.length){
            console.log("your question is ");
            console.log(i+1,questions[i]);
            var j = 0;
            console.log("your options are");
            while (j < options.length){
                console.log(j+1,options[i][j]);
                j++;
            }
            var req = require("readline-sync");
            var user = req.questionInt("enter your answer");
            if (user == answers[i]){
               

            }
            else if (user == 5050){
                if (lifelineCount == 0){
                    var m = 0;
                    while (m < fifty_fifty[i].length){
                        console.log(m+1,fifty_fifty[i][m]);
                        m++;
                    }
                    lifelineCount++;
                    var new_ = require("readline-sync");
                    var user1 = new_.questionInt("enter your fifty fifty answer");
                    if(user1 == fifty_answers[i]){
                        console.log(" your answers is correct");
                    }
                    else{
                        console.log("your option is wrong");
                        console.log("quite");
                        break
                    }
                }
                else{
                    console.log("you used 5050");
                    var new1 = require("readline-sync");
                    var user2 = new1.questionInt("enter your option");
                    if(user2 == answers[i]){
                        console.log("congrates");
                    }
                    else{
                        console.log("('😔😔')your option is wrong"('😔😔'));
                        break
                    }
                }
            }
            else{
                console.log("('😔😔')your answer is wrong"('😔😔'));
                console.log("quite");
                break
            }
            i++
        }               
    }
    kbc();