// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

//Async and Await 
async function nofifyCustomer(){
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const topMovies = await getTopMovies();
    console.log('Top movies: ', topMovies);
    await sendEmail(customer.email,topMovies);
    console.log('Email sent...')
  }
}

nofifyCustomer();

function getCustomer(id) {
return new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve({ 
      id: 1, 
      name: 'HaKM', 
      isGold: true, 
      email: 'email' 
    });
  }, 2000);  
});
}

function getTopMovies() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']); 
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}