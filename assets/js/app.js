const checkNumber = () => {

    let numberArr = [];

    for (let i = 1; i <= 3; i++) {
        // Checking Checkbox
        if ($('#checkbox' + i).prop("checked") == true) {
            // If checked
            // Get the input number and Convert to Number 
            const inputNumber = parseInt($('#input' + i).val())

            // If input not number
            if (isNaN(inputNumber) == true) {
                alert('Please input valid number on input ' + i)
            }
            // and push to array
            numberArr.push(inputNumber)
        }
    }

    // If array empty
    if (numberArr.length < 2) {
        alert('Please Input atleast 2 number')
    }
    return numberArr;
}

const doMath = operation => {
    const numberArr = checkNumber();
    let lastNumber;
    numberArr.forEach(number => {
        if (lastNumber == undefined) {
            lastNumber = number
        } else {
            switch (operation) {
                case 'plus':
                    lastNumber = lastNumber + number;
                    break;
                case 'minus':
                    lastNumber = lastNumber - number;
                    break;
                case 'multiply':
                    lastNumber = lastNumber * number;
                    break;
                case 'divide':
                    lastNumber = lastNumber / number;
                    break;
            }

        }
    });

    return lastNumber

}


$('#plusButton').bind('click', function (e) {
    $('#result').text(doMath('plus'))
});

$('#minButton').bind('click', function (e) {
    $('#result').text(doMath('minus'))
});

$('#multiplyButton').bind('click', function (e) {
    $('#result').text(doMath('multiply'))
});
$('#divideButton').bind('click', function (e) {
    $('#result').text(doMath('divide'))
});