// Função Sincrona
const sumNumbers = () => {
  let result = 1 + 1;
  if (result == 2) {
    successCallback();
  } else {
    errorCallback();
  }
};

const successCallback = () => console.log("Yeah");

const errorCallback = () => console.log("Fuck");

sumNumbers();

//Função assincrona

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Yeah");
  } else {
    reject("Fuck");
  }
});

p.then((message) => {
  console.log("this is in the then " + message);
}).catch((err) => {
  console.log("This is in the catch " + message);
});

//Transformando função normal em promisse

const betterDeveloper = "zezinhodapadaria";

const whoisBetterCallback = (callback, errorCallback) => {
  return new Promise((resolve, reject) => {
    if (betterDeveloper != "Arthur" && betterDeveloper != "gabriel") {
      reject({
        name: "This is wrong ",
        message: betterDeveloper + "? Really",
      });
    } else {
      resolve({
        name: betterDeveloper,
        message: " CDFS are the best!",
      });
    }
  });
};

whoisBetterCallback()
  .then((result) => {
    console.log(result.name + "? Yeah!" + result.message);
  })
  .catch((error) => {
    console.log(error.name + "" + error.message);
  });

//exemplo real

const ul = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    return data.map(function (user) {
      let li = document.createElement("li");
      li.innerHTML = `${user.name} (${user.username})`;
      ul.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Oops!" + error);
  });

//Aninhar resultados

let promise = Promise.resolve(3);
let promise2 = Promise.resolve(4);
let promise3 = Promise.resolve(4);

Promise.all([promise, promise2, promise3]).then(function (values) {});
