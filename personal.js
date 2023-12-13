

const studentTable = document.getElementById("miTabla");
const formulario = document.getElementById("formulario");
let arts = [];

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const cantidadArtInput = document.getElementById("cantidad-alumnos");
    const cantidadArt = parseInt(cantidadArtInput.value);

    if (isNaN(cantidadArt) || cantidadArt <= 0) {
        alert("Por favor, ingrese un número válido");
        return;
    }
    while (studentTable.rows.length > 1) {
        studentTable.deleteRow(1);
    }

    arts = [];

    for (let i = 0; i < cantidadArt; i++) {
        const nombre = generarNombre();
        const precio = Math.floor(Math.random() * 10) + 18;
        const calidad = Math.floor(Math.random() * 41) + 60;
        const art = { nombre, precio, calidad };
        arts.push(art);

        const row = studentTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = art.nombre;
        cell2.textContent = art.precio;
        cell3.textContent = art.calidad;
        
    }
});

function generarNombre() {
    const nombres = ["Lente1", "Lente2","Lente3","Lente4","Lente5","Lente6","Lente7","Lente8","Lente9","Lente10","Lente11","Lente12","Lente13","Lente14","Lente15","Lente16"];
    return nombres[Math.floor(Math.random() * nombres.length)];
}



miTabla.addEventListener("mouseover", function(e) {
    if (e.target.tagName === "TD") {
        e.target.style.backgroundColor = "#f2f2f2";
    }
});

miTabla.addEventListener("mouseout", function(e) {
    if (e.target.tagName === "TD") {
        e.target.style.backgroundColor = "";
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      alert("Tecla Esc presionada");
    }
  });

  document.getElementById("buttonPage1").addEventListener("click", function() {
    window.location.href = "gafas.html"; 
});

document.getElementById("buttonPage2").addEventListener("click", function() {
    window.location.href = "gafassol.html"; 
});