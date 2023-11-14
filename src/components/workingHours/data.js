export const options = Array(25).fill(1).map((_, key) => {
    return  key < 10 ? `0${key}:00` : `${key}:00`

})
