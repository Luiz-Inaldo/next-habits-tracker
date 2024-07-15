/*
    function that imitate the sleep effect in python
    accept as argument a number that represents the time
    in seconds.
*/

export const wait = async (timer: number) => {
    return new Promise(res => {
        setTimeout(res, (timer * 1000))
    });
}