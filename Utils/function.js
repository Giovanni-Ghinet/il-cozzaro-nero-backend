

const defaultOBJReceived = {
    title: "",
    text: "",
    author: "",
    valutation: null,
    product: ""
};



export const idCheck = (id) => {
    return typeof id === "number" && !Number.isNaN(id) && id > 0;
}


const keyValidator = (obj) => {
    const chiaviDefaultOBJ = Object.keys(defaultOBJReceived);
    const chiaviObj = Object.keys(obj);

    if (chiaviObj.length !== chiaviDefaultOBJ.length) {
        return false
    }
    return chiaviDefaultOBJ.every(chiave => obj.hasOwnProperty(chiave));
}

const valueValidator = (obj) => {
    const { title, text, author, valutation, product } = obj;

    if (typeof title !== 'string' || title.trim() === '' || title.length > 200) return false;
    if (typeof text !== 'string' || text.trim() === '') return false;
    if (typeof author !== 'string' || author.trim() === ''|| author.length > 200) return false;
    if (typeof product !== 'string' || product.trim() === ''|| product.length > 200) return false;
    if (typeof valutation !== 'number' || valutation < 0 || valutation > 5 || Number.isNaN(valutation)) return false;

    return true;
}

export const validator = (obj) => {
    if (!keyValidator(obj)) return false;
    return valueValidator(obj);
}