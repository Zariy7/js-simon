const playBtn = document.getElementById("play-button");

playBtn.addEventListener('click', simonSays);

function simonSays (){
    let list = document.getElementById("numbers-list");
    
    let array = [];
    array = arrayGen();
    console.log(array);
    
    for(let i = 0; i<5; i++){
        let li = document.createElement("li");
        li.innerText = array[i];
        list.appendChild(li);
    }

    let result = document.getElementById("result");
    setTimeout(function(){
        list.style.display = 'none';
        
        setTimeout(function(){
            let userArray = [];
            let j = 0;
            let points = 0;
        
            while(j<5){
                let insert = parseInt(prompt("Insert a number from before!"));
                if (!userArray.includes(insert) && !isNaN(insert)){
                    userArray.push(insert);
                    j++;
                    if(array.includes(insert)){
                        points++;
                    }
                }
            }
            
            console.log(userArray);
            console.log(points);

            result.innerText = `You got ${points} out of 5 right!`;
        }, 1000);
    }, 3*1000);
}

function arrayGen (){
    let array = [];
    let randomNumber;
    let i = 0;

    do{
        randomNumber = Math.floor(Math.random() * 100) +1;

        if(!array.includes(randomNumber)){
            array[i]=randomNumber;
            i++;
        }
    }while(i<5);

    return array;
}

