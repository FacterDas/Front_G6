function traerReporteStatus(){
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarStatus(respuesta);
        }
    });
}


function traerReportesFechas(){
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta2){
            console.log(respuesta2)
            pintarFechas(respuesta2);
        }
    });
}

function traerReportesClientes(){
    
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta3){
            console.log(respuesta3)
            pintarCleintes(respuesta3);
        }
    });
}

/////////////////////////////////////////////////

function  pintarStatus(json_maquinas){

    let myTable="<table>";

        myTable+="<tr>";
        myTable+="<td>"+json_maquinas.completed+"</td>";
        myTable+="<td>"+json_maquinas.cancelled+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultado1").html(myTable);
}


function  pintarFechas(json){

    let myTable="<table>";

        myTable+="<tr>";
        myTable+="<td>"+json.a+"</td>";
        myTable+="<td>"+json.b+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function  pintarCleintes(json_maquinas){

    let myTable="<table>";

        myTable+="<tr>";
        myTable+="<td>"+json_maquinas.completed+"</td>";
        myTable+="<td>"+json_maquinas.cancelled+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultado3").html(myTable);
}