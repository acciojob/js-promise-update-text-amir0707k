//your JS code here. If required.
async function promise(){
       return await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Hello, world!");
          }, 1000);
        });
      }
      promise().then((data) => {
        document.getElementById("output").innerText = data;
      })