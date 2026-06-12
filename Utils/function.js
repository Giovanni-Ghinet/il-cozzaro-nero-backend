

const defaultOBJReceived = {
    title: "",
    text: "",
    author: "",
    latest: null,
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
    const { title, text, author, latest, product } = obj;

    if (typeof title !== 'string' || title.trim() === '' || title.length > 200) return false;
    if (typeof text !== 'string' || text.trim() === '') return false;
    if (typeof author !== 'string' || author.trim() === '' || author.length > 200) return false;
    if (typeof product !== 'string' || product.trim() === '' || product.length > 200) return false;
    if (typeof latest !== 'number' || latest < 0 || latest > 5 || Number.isNaN(latest)) return false;

    return true;
}

export const validator = (obj) => {
    if (!keyValidator(obj)) return false;
    return valueValidator(obj);
}




export function normalizingProducts(dataArray) {
    const productsMap = {};
    const IMAGE_PREFIX = "http://localhost:3000/";

    for (const product of dataArray) {

        const { id_review, author, title, text, latest, image, price, created_at, ...productData } = product;
        const productName = product.name;
        const priceConverted = Number(price);

        if (!productsMap[productName]) {
            const formattedDate = created_at ? new Date(created_at).toLocaleDateString('it-IT') : null;
            productsMap[productName] = {
                ...productData,
                created_at: formattedDate,
                price: priceConverted,
                image: image ? `${IMAGE_PREFIX}${image}` : "https://placehold.co/600x400/png",
                reviews: []
            };
        }

        if (id_review !== undefined && id_review !== null) {
            const review = { id_review, author, title, text, latest };
            productsMap[productName].reviews.push(review);
        }
    }

    return Object.values(productsMap);
}


export function latestCheck(obj) {
    if (!obj || typeof obj !== 'object') return false;
    const chiavi = Object.keys(obj);
    if (chiavi.length !== 1 || chiavi[0] !== 'latest') return false;
    const { latest } = obj;
    if (typeof latest !== 'string' && typeof latest !== 'number') return false;
    if (typeof latest === 'string' && latest.trim() === '') return false;
    const numero = Number(latest);
    if (Number.isNaN(numero)) return false;
    return true;
}