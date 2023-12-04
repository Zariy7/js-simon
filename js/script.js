simonSays();

function simonSays (){
    let list = document.getElementById("numbers-list");

    let array = [];
    array = arrayGen();
    //console.log(array);

    for(let i = 0; i<5; i++){
        let li = document.createElement("li");
        li.innerText = array[i];
        list.appendChild(li);
    }

    setTimeout(function(){
        list.style.display = 'none';
    }, 30*1000)
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

