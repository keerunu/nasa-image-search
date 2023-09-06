const API_URL = "https://images-api.nasa.gov/";
const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("btnBuscar");
const contenedor = document.getElementById("contenedor");

btnBuscar.addEventListener("click", function() {
    var query = API_URL + "search?q=" + inputBuscar.value;
    fetchApi(query);
});

async function fetchApi (query) {
    const respuesta = await fetch(query);
    const json = await respuesta.json();
    const datos = json.collection.items;

    contenedor.innerHTML = "";

    for (let i = 0; i < datos.length; i++) {
        contenedor.innerHTML += 
        `<div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img src= ${datos[i].links[0].href} class="card-img-top" style="height: 225px; width: 100%; display: block;"">
                <div class="card-body">
                    <h5 class="card-title">${datos[i].data[0].title}</h5>
                    <div class="overflow-auto" style="overflow-y: auto; height: 150px">
                        <p class="card-text">${datos[i].data[0].description}</p>
                        <p class="text-muted">${datos[i].data[0].date_created}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }
}