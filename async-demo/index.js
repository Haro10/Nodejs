console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

//  getUser(1)
//    .then(user => getRepositories(user.gitHubUsername))
//    .then(repos => getCommits(repos[0]))
//    .then(commits => console.log('commites: ', commits))
//    .catch(err => console.log('Error',err.message ));

//Async and wait approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch(err) {
    console.log('Error', err.message)
  }
  console.log('After');
}
displayCommits();


function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({
        id: id,
        gitHubUsername: 'Haro10'
      });

    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
      //   reject(new Error('could not get the commit'))
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  })

}

//Hakm:
// console.log('Before');
//  getUser(1,  getRespositories);

// function getRespositories(user){
//   getRespositories(user.gitHubUsername, getCommits);
// }

// function getCommits(repos) {
//   getCommits(repo,displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }

// function getUser(id, callback) {
//   setTimeout(()=>{
//     console.log('Reading a user from a databsae... ');
//      callback({ id:id, gitHubUsername:'hakm' });
//   }, 2000);
// }

// function getRespositories(username, callback){
//   setTimeout(() => {
//    console.log("waiting for DB");
//    callback(['repo1','repo2','repo3']);
//   },2000)
// }