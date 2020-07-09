
const myPromise = () => new Promise((resolve,reject) => {
    setTimeout(() =>{ resolve('OK') }, 2000);
});

// async function executePromise(){
//     console.log( await myPromise());
//     console.log( await myPromise());
//     console.log( await myPromise());
// }

const executePromise = async () => {
    console.log( await myPromise());
    console.log( await myPromise());
    console.log( await myPromise());
};

executePromise();
