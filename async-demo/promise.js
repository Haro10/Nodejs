const p = new Promise((resolve,reject) => {
   //Kick off some async work
   //...
   setTimeout(() => {
    // resolve(1); //pending -> resolved
    reject(new Error('It go wrong'));
   },2000);
  //  reject(new Error('messgae'));
});

p.then(result =>  console.log('result: ', result))
.catch(err => console.log('Error', err.message));