var inputs = document.querySelectorAll('.generator__input'),
    results = document.querySelectorAll('.generator__result'),
    cube = document.querySelector('.generator__cube'),
    borderText = document.querySelector('.generator__inner'),
    btnCopy = document.querySelector('.generator__btn');

var inputTopLeft = inputs[0],
    inputTopRight = inputs[1],
    inputBottomLeft = inputs[2],
    inputBottomRight = inputs[3];

var resultTopLeft = results[0],
    resultTopRight = results[1],
    resultBottomLeft = results[2],
    resultBottomRight = results[3];

function changeRadius() {
    btnCopy.innerHTML = 'Copy code';
    resultTopLeft.value = inputTopLeft.value;
    resultTopRight.value = inputTopRight.value;
    resultBottomLeft.value = inputBottomLeft.value;
    resultBottomRight.value = inputBottomRight.value;

    cube.style.borderRadius = inputTopLeft.value + 'px ' + inputTopRight.value + 'px ' + inputBottomLeft.value
        + 'px ' + inputBottomRight.value + 'px ';

    borderText.value = 'Border radius: ' + inputTopLeft.value + 'px ' + inputTopRight.value + 'px '
        + inputBottomLeft.value + 'px ' + inputBottomRight.value + 'px' + ';';
}

for (var node of inputs) {
    node.addEventListener('input', changeRadius);
}

btnCopy.addEventListener('click', function () {
    borderText.select();
    document.execCommand("copy");
    this.innerHTML = 'Copied!';
});
