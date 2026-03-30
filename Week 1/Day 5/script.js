const counter = document.getElementById('counter')
const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const reset = document.getElementById('reset')


let count = 0;
const max = 10;
const min = 0;

function updatecounter (){
    counter.textContent = count
}

increment.addEventListener('click', ()=>{
    if(count < max){
    count++;
    updatecounter()
    }

})

decrement.addEventListener('click',()=>{
    if(count>min){
    count--;
    updatecounter()
    }
})

reset.addEventListener('click',()=>{
    count = 0;
    updatecounter()
})