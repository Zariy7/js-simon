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