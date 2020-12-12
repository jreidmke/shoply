import data from './data.json';

function splicer(arr, id) {
    arr.splice(arr.indexOf(id), 1);
    return arr;
}

// function total(cart = []) {
//     const priceArray = cart.map(code => data.products[code].price);
//     if(!priceArray) {
//         return 0;
//     } else {
//         return priceArray.reduce((a, b) => parseFloat(a+b), [0])
//     }
// }

// function applyDiscount(total, percentage) {
//     const isDiscounted = checkForDiscount();
//     if(isDiscounted) {
//         throw new Error('CANNOT APPLY MULTIPLE DISCOUNTS')
//     } else {
//         const discount = (percentage / 100) * total;
//         return total - discount;
//     }
// }

function checkForDiscount() {
    const isDiscounted = localStorage.getItem('isDiscounted');
    if(isDiscounted) {
        console.log('CANNOT APPLY MULTIPLE DISCOUNTS');
        return true;
    } else {
        return false;
    }
}

function sumTotal(cart = [], discount = 0) {
    const priceArray = cart.map(code => data.products[code].price);
    const t = priceArray.reduce((a, b) => parseFloat(a+b), [0]);
    if(checkForDiscount()) {
        return;
    } else {
        const d = (discount / 100) * t;
        console.log(t - d);
        return t - d;
    }
}

export {splicer};
export {sumTotal};
export {checkForDiscount};