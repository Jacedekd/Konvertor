function convertToBinary() {
    const input = parseFloat(document.getElementById('decimalInput').value);
    if (isNaN(input)) {
        document.getElementById('result').textContent = 'Vvedite korektnoe chislo otdushi';
        return;
    }

    let integerPart = Math.floor(Math.abs(input));
    let fractionalPart = Math.abs(input) - integerPart;

    let binaryInteger = [];
    if (integerPart === 0) {
        binaryInteger.push(0);
    } else {
        while (integerPart > 0) {
            binaryInteger.unshift(integerPart % 2);
            integerPart = Math.floor(integerPart / 2);
        }
    }

    let binaryFractional = [];
    if (fractionalPart > 0) {
        for (let i = 0; i < 10; i++) {
            fractionalPart *= 2;
            binaryFractional.push(Math.floor(fractionalPart));
            fractionalPart -= Math.floor(fractionalPart);
        }
    }

    const sign = input < 0 ? '-' : '';
    const binaryResult = sign + binaryInteger.join('') + (binaryFractional.length ? '.' + binaryFractional.join('') : '');
    document.getElementById('result').textContent = 'Resultat: ' + binaryResult;
    document.getElementById('result').style.opacity = '1';
}

document.getElementById('decimalInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertToBinary();
    }
});