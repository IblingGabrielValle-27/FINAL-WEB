var cont=0;
var total=0;
var seleccionadas=[];
function seleccionar(id_fila){
    console.log(id_fila)
    if($("#"+id_fila).hasClass("seleccionada")){
        $("#"+id_fila).removeClass("seleccionada")
        seleccionadas.slice(id_fila,1)
        console.log(seleccionada)
    }
    else{
        $("#"+id_fila).addClass("seleccionada")
        seleccionadas.push(id_fila)
        console.log(seleccionada)
    }
    
}
function eliminar(id_fila){
    
    for (let index = 0; index < id_fila.length; index++) {
        $("#"+id_fila[index]).remove();
        
    }
    reordenar()
}

function reordenar() {
    $("#tabla tbody tr").each(function(index) {
        var id = "fila" + (index + 1);
        $(this).attr("id", id);
        $(this).find("td:first").text(index + 1);
    });
}

function agregar(id,nombre,precio){
    cont++
    $("#span1").text(cont);
    var fila='<tr id="fila'+cont+'" class="selected" onclick="seleccionar(this.id)">'+
    '<td>'+cont+'</td>'+
    '<td>'+nombre+'</td>'+
    '<td>'+precio+'</td></tr>';
    $("#tabla tbody").append(fila);
    total += precio;
}

$("#btnpizza").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});
$("#btnElim").click(function (e) { 
    eliminar(seleccionadas)
});

$("#btnbrgr").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});

$("#btncafe").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});

$("#btnice").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});

$("#btnemp").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});

$("#btntorta").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});

$("#btnjg").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});

$("#btnmp").click(function () { 
    console.log("click en el boton");
    var nombre = $("#nombre").text();
    var precio = $("#precio").text();
    console.log(nombre,precio);
    agregar( nombre,precio);
});
