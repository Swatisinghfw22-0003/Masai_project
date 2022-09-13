let num = 25;
let count=0;
    for (let i=1; i<=num;i++){
    if(num%i===0){
        count++;
    }
    }if(count===2){
        console.log("Yes")
    }else{
          console.log("No")
    }
    // for palindrome
    let str="nrupul";
let bag = "";
    for(let i=str.length-1;i>=0;i--){
        bag=bag+str[i];
    }
    if(bag==str){
        console.log("Yes");
    }
    else{
        console.log("No");
    }