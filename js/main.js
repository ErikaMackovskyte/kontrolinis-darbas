function calculate() {
    var input = document.getElementById("numberInput");
    var content = document.getElementById("result");

    var value = input.value;

    var stringsArray = value.split('');
    var numbersArray = stringsArray.map(stringItem => {
        return parseInt(stringItem);
    });

    var max = Math.max(...numbersArray);
    var min = Math.min(...numbersArray);

    content.innerHTML = 'Didžiausias skaitmuo yra ' + max + ', mažiausias skaitmuo yra ' + min;
}