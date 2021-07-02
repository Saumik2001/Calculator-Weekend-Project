const output=document.getElementById('smalloutput')
const buttons=document.querySelectorAll('button')
const equate=document.getElementById('equate')

    for(item of buttons)
    {
        item.addEventListener('click', (e)=>{
            if(e.target.innerText!='=' && e.target.innerText!='Sqrt' && e.target.innerText!='x^2')
            {
            buttonText=e.target.innerText;
            console.log(buttonText);
            output.innerHTML+=buttonText;
            if(buttonText=='C'){
                equate.innerHTML='';
                output.innerHTML='';
            }
        }
        })
    }
    function solve() {
        var x = output.innerHTML;
        equate.innerHTML=x;
        var y = eval(x);
        output.innerHTML=y;
    }
    function sqr(params) {
        var x=Number(output.innerHTML);
         output.innerHTML=x*x;
    }
    function root(params) {
        var x=Number(output.innerHTML);
        console.log(x);
        output.innerHTML=Math.sqrt(x);
    }
    function date(params) {
        let date=new Date();
        const datepara=document.getElementById('date').innerHTML=date.getMinutes();
    }
    setInterval(date,1000)