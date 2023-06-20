window.addEventListener("DOMContentLoaded", (event) => {
  let container = document.querySelector("#container");
  container.innerHTML = "cargando...";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((datos) => {
        container.innerHTML = "";
        mostrar(datos)
    })

    .catch((error) => console.error(error.message));

  //dom
  function mostrar(e) {
    e.forEach((element) => {
      let html = `
        <article>
            <h2>${element.id}</h2>
            <h2>${element.body}</h2>
            
        </article>
        `;

      container.innerHTML += html;
    });
  }
});




