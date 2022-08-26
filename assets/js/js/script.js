let calculator = document.getElementById('calculator');

let operators = Array.from(document.getElementsByClassName('operator'));

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                calculator.innerText = '';
                break;
            case '=':
                try{
                    calculator.innerText = eval(calculator.innerText);
                } catch {
                    calculator.innerText = "Error"
                }
                break;
            case '←':
                if (calculator.innerText){
                    calculator.innerText = calculator.innerText.slice(0, -1);
                }
                break;
            default:
                calculator.innerText += e.target.innerText;
        }
    });
});