let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (fn) => {
        if (fn.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (fn.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string = string + fn.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})