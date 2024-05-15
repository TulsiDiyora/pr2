let P = 60000
let R = 2
let N = 8
let SI = (P * R * N ) / 100

document.querySelector('.pa2').innerHTML = +P;  
document.querySelector('.pa1').innerHTML = "Principal Amount"; 
document.querySelector('.ir2').innerHTML = +R;
document.querySelector('.ir1').innerHTML = " Interest Rate";  
document.querySelector('.year2').innerHTML = +N; 
document.querySelector('.year1').innerHTML = "No. of Years" 

if(8>=N && N>12){
    if(5>=N && N<=8){
        if(3<=N && N<=5){
            console.log("R is 3");
        }
        else{
            console.log("R is not 3");
        }
    }
    else{
        if(5 <= N && N <= 8){
            console.log("R is 5");
        }
        else{
            console.log("R is not 5");
        }
    }
}
else{
    if(8 <= N && N <= 12){
        console.log("R is 12");
    }
    else{
        console.log("R is not 12");
    }
}
console.log(SI);