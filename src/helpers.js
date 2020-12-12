import data from './data.json';

function splicer(arr, id) {
    arr.splice(arr.indexOf(id), 1);
    return arr;
}

function total(cart = []) {
    const priceArray = cart.map(code => data.products[code].price);
    if(!priceArray) {
        return 0;
    } else {
        return priceArray.reduce((a, b) => parseFloat(a+b), [0])
    }
}

export {splicer};
export {total};