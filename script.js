var bill = document.querySelector('#in1');
var people =document.querySelector('#in2');
var tip_amount = document.querySelector('#in3');
var total = document.querySelector('#in4');
var tip_btn = document.querySelectorAll('button');

for(let i=0; i<tip_btn.length-1; i++)
{
    tip_btn[i].addEventListener('click',function()
    {
        if(bill.value && people.value>0)
        {
            let peep = parseInt(people.value);
            let bi = parseInt(bill.value);
            let tip = parseInt(tip_btn[i].textContent);
            
            tip_amount.value = (((bi*tip)/100)/peep).toFixed(1);
            total.value = ((((bi*tip)/100)+bi)/peep).toFixed(1);
        }
    })
}

tip_btn[tip_btn.length-1].addEventListener('click',function(){
    bill.value =0;
    people.value =0;
    tip_amount.value=0;
    total.value=0;
})