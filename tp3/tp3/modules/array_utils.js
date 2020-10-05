function getSum41(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getSum41Alt1(arr) {

    let sum = 0;
    for (const n of arr) {
        sum += n;
    }
    return sum;
}

function getNumberOfEven42(arr) {

    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            number++;
        }
    }
    return number;
}


export { getSum41, getSum41Alt1, getNumberOfEven42 };