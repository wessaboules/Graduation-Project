var countervalue= 0;
function more(){
    countervalue+=1;
    document.getElementById('content').textContent = countervalue;
}
function less(){
    if(countervalue > 0){
        countervalue -=1; 
    }
    document.getElementById('content').textContent = countervalue;
}