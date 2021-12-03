function swap(sentence){
    var arr = sentence.split(" ");
    var fin ="";
    //console.log(arr);
    var fLetter = [];
    for (let i = 0; i < arr.length; i++){
        fLetter.push(arr[i].charAt(0));
    }
    //console.log(fLetter);

    let last = fLetter[0] + arr[arr.length - 1].substring(1);
    for (i = 0; i < arr.length-1; i++){
        arr[i] = fLetter[i + 1] + arr[i].substring(1);
    }

    arr[arr.length - 1] = last;
    console.log(arr);

    for (let i = 0; i < arr.length; i++){
        fin = fin + arr[i];
        if (i + 1 != arr.length) {
            fin = fin + " ";
        }
    }
    console.log(fin);

}

swap("this is my name");