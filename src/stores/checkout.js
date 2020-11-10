function getUniq(data) {
    const id = data.map((x) => x.store_id);
    const set = new Set(id);
    const ids = [...set];
    return productStore(ids, data);

}

function productStore(id, data) {
    var response = [];
    id.forEach(function(el) {
        const items = data.filter((y) => y.store_id == el);
        response.push({
            store_id: el,
            store_name: items[0].store,
            products: items,
            total: items.reduce((sum, { subtotal }) => sum + subtotal, 0),
            berat: items.reduce((sum, { weight }) => sum + weight, 0),
            origin: items.length > 0 ? items[0].store_address.subdistrict_id : {},
        })
    });
    return response
}
export default {
    getUniq
}