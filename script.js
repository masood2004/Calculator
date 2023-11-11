let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let result = ""; // for storing result
let arr = Array.from(buttons); // An iterable or array-like object to convert to an array.

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
            result = eval(result);
            input.value = result;
        }
        else if(e.target.innerHTML == 'AC'){
            result = "";
            input.value = result;
        }
        else if(e.target.innerHTML == 'DEL'){
            result = result.substring(0, result.length - 1);
            input.value = result;
        }

        else{
            result += e.target.innerHTML;
            input.value = result;
        }

    })
})