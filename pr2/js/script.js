let servicesNo= 123456789
let units = 2000
let bill = 0
if(units<=50){
  bill  = units*1
  document.querySelector('.eb').innerHTML = ("Electricity bill:", +bill)
}
else if(units <=150){
  bill = 50*1 + (units-50)*2
}
else if(units <=250){
  bill = 50*1 + 100*2 + (units-150)*3
}
else if(units>250){
  bill = 50*1 + 100*2 + 150*3 + (units-250) *4
}

if(bill>150){
  bill = bill + bill*0.2
} 


document.querySelector('h1').innerHTML = " ONLINE ELECTRICITY BILL PAYMENT"
document.querySelector('.p-box').innerHTML = +servicesNo;
document.querySelector('.sn').innerHTML = "services-no:"
document.querySelector('h3').innerHTML = "Bill Ditel :"
document.querySelector('.ec1').innerHTML = "Energy Charges : "
document.querySelector('.ec2').innerHTML = "5800 "
document.querySelector('.td1').innerHTML = "Total Govt Duty : "
document.querySelector('.td2').innerHTML = "12784"
document.querySelector('.units2').innerHTML = + units
document.querySelector('.units1').innerHTML = "Units : ";
document.querySelector('.bill2').innerHTML = bill;  
document.querySelector('.bill1').innerHTML = "Total Bill : ";
