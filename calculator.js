function display(val) {
    document.getElementById('result').value += val;
}

function del() {
    document.form.answer.value = document.form.answer.value.substr(0, form.answer.value.length-1);
}

function clearScreen() {
    document.form.answer.value = "";
}

function giveAnswer() {
    let a = document.getElementById('result').value;
    let b = eval(a);
    document.getElementById('result').value = b;
}