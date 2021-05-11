const Axios = require("axios")


function getTrending() {
    let data = [];
    Axios.get('page/product-trending').then(res => {
        data.push(...res.data)
    })
    return data
}


var getDiscountOfficial = function() {
    var res = []
    Axios.get('page/product-discount-off').then(res => {
        res(...res.data)
    })
    return res
}

function getDiscount() {
    var res = []
    Axios.get('page/product-discount').then(res => {
        res.push(...res.data)
    })
    return res;
}

export default {
    getTrending,
    getDiscountOfficial,
    getDiscount,
}