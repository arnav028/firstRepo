const ghochu = new Promise((resolve, reject) => {
    const ank = true;
    if(ank){
        resolve('ankur is resolve');
    } else {
        reject('snkur is reject right now');
    }
})

/* ghochu.then((message)) => {
    console.log(message);
} */

ghochu.catch((message) => {
    console.log(message);
});

/* ghochu.finally((message)) => {
    console.log(message);
} */

