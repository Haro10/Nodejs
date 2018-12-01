// const path  = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj);



//  1.17

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// //Template string
// //ES6 / ES2015: ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Total Memory: ${freeMemory}`);


// 1.18
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function (err, files) {  
//   if(err) console.log('Error', err);
//   else console.log('Result' , files);
// });


//  1.18 - 1.19 

//Register a listener 
// emitter.on('messageLogged', (arg) => {// e, eventArg
//      console.log('Listener called', arg);
// })

// // Register my listener
// emitter.on('myMessage', (args) => {
//  console.log(args.myMessgae);
// });
// //Raise : logging (data:message)
// emitter.emit('myMessage', {myMessgae:'I am comming for you'});


//  1.20 

// const Logger = require('./logger');
// const logger = new Logger();
// console.log(logger);

// logger.on('messageLogged', (arg) => {// e, eventArg
//   console.log('Listener called', arg);
// })

// logger.log('meassage');


//  1.21
// const  http = require('http');

// const server = http.createServer((req, res) => {
//   if( req.url==='/'){
//     res.write('Hello Ha');
//     res.end();
//   }

//   if(req.url==='/api/courses'){
//     res.write(JSON.stringify([1,2,3]));
//     res.end();
//   }
// });

// server.listen(3000);

// console.log('Listening on port 3000...');

