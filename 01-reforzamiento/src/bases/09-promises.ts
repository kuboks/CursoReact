const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //Quiero mi dinero xd

    // resolve(100);
    reject("Se muriooooo");
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch( (reason) => {
    console.warn(reason)
  })
  .finally(()=>{
    console.log('Pues a seguir con mi vida')
  });
