export const idCheck = (id) => {
    return typeof id === "number" && !Number.isNaN(id) && id > 0;
}