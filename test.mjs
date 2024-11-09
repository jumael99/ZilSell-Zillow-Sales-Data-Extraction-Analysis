const promise = new Promise(function (resolve, reject) {
  const fulfilled = false;
  if (!fulfilled) {
    reject("Reeject");
  } else {
    resolve("Resolve Promise");
  }
});

promise.then(function (result) {
  console.log("then result:- ", result);
});
