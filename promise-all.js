//Promise.all
const promiseA=Promise.resolve("Sreeni");
const promiseB=Promise.resolve("Ammulu");
const promiseC="Another Name";

Promise.all([promiseA,promiseB,promiseC]).then(vals=>{
    console.log(vals);
});