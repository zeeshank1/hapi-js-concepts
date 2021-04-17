"use strict";
//To execute javascript code in STRICT mode.
//It is more restricted version of Javascipt, where semantics are altered to make the code more resilent and secured
//Some silent error are change to throw errors
//It disables some confusing and undefined features in javascript

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });
  await server.start();
  console.log("server started at %s", server.info.uri);
};

//Process : global object that provide information and control over the node process.
//UnhandledRejection : Typically an error object, emitted when a promise is rejected and no error handler is attached to the promise
//when working with promise, exception are encapsulated as rejected promise, but UnhandledRejection is useful when error is not attached to promise
process.on('unhandledRejection',(err) => {
    console.log(err);
    process.exit(1)
})

init();