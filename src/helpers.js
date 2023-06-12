export const createLiElWithClass = cl => {
    const newListEl = document.createElement('li');
    newListEl.classList.add(cl);
    return newListEl
};

export const generateDateTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day.toString().length === 2 ? day : "0" + day}.${month.toString().length === 2 ? month : "0" + month}.${year}`
};

export const timeout = sec => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Request took to long`))
        }, sec)
    })
};