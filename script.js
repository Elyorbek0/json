let b = document.querySelector(".name")
let c = document.querySelector(".title")
b.innerHTML = "name"


let a = fetch("https://jsonplaceholder.typicode.com/albums")
.then(res => res.json())
.then((data) => {
   data.forEach(element => {
    c.innerHTML = (element.title);
    document.write(c.innerHTML = `
        <p class="title">Name</p>
         <h1>${element.title}</h1>
    `)
   });
})

