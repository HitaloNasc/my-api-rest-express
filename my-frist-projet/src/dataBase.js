const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produts = {}

function saveProdut(produt){
    if(!produt.id) produt.id = sequence.id
    produts[produt.id] = produt
    return produt
}

function getProdut(id){
    return produts[id] || {}
}

function getProduts() {
    return Object.values(produts)
}

function deleteProdut(id) {
    const produt = produts[id]
    delete produts[id]
    return produt
}

module.exports = {saveProdut, getProdut, getProduts, deleteProdut}