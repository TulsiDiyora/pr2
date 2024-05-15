let month = 3;


switch(month){

    case 11:
    case 12:
    case 1:
    case 2:
        document.querySelector('.month').innerHTML = +month; 
        document.querySelector('h1').innerHTML = "Winter"; 
        break;   

    case 3:
    case 4:
    case 5: 
    case 6:
        document.querySelector('.month').innerHTML = +month; 
        document.querySelector('h1').innerHTML = "Summer"; 
        break;   

    case 7:
    case 8:
    case 9:
    case 10:
        document.querySelector('.month').innerHTML = +month; 
        document.querySelector('h1').innerHTML = "Monsoon"; 
    break;   

    default:
        document.querySelector('h1').innerHTML = "Valid Month";  
        break; 
 }
