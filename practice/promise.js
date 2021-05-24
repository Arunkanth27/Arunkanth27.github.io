var myPromise = new Promise((resolve, reject) => {
    setTimeout (() => resolve ({
        id: 1,
        title: "event1",
    
    }),5000);
});
    
myPromise
  .then((res) => console.log(res))
 .catch((e) => console.log(e))
 .finally(data => console.log('Done'));