

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
    if (typeof author !== 'string' || author.trim() === '' || author.length > 200) return false;
    if (typeof product !== 'string' || product.trim() === '' || product.length > 200) return false;
    if (typeof valutation !== 'number' || valutation < 0 || valutation > 5 || Number.isNaN(valutation)) return false;

    return true;
}

export const validator = (obj) => {
    if (!keyValidator(obj)) return false;
    return valueValidator(obj);
}




export function normalizingData(dataArray) {
    const productsMap = {};
    const IMAGE_PREFIX = "http://localhost:3000/";

    for (const product of dataArray) {

        const { id_review, author, title, text, valutation, image, price, created_at,  ...productData } = product;
        const productName = product.name;
        const priceConverted = Number(price);

        if (!productsMap[productName]) {
            const formattedDate = created_at ? new Date(created_at).toLocaleDateString('it-IT') : null;
            productsMap[productName] = {
                ...productData,
                created_at:formattedDate,
                price: priceConverted,
                image: image ? `${IMAGE_PREFIX}${image}` : "https://placehold.co/600x400/png",
                reviews: []
            };
        }

        if (id_review !== undefined && id_review !== null) {
            const review = { id_review, author, title, text, valutation };
            productsMap[productName].reviews.push(review);
        }
    }

    return Object.values(productsMap);
}