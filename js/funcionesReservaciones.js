//GET, POST , PUT Y DELETE

function getReservaciones (){
    $.ajax({
        url:"http://192.9.235.7:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarReservaciones(respuesta);
        }
    });

}

function postReservaciones(){

    if($("#startDate").val().length==0 || $("#devolutionDate").val().length==0 ){

        alert("Todos los campos son obligatorios")
    }else {
    let cajas = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        client:{idClient: +$("#select-client").val()},
        machine:{id: +$("#select-machine").val()}
    };
    $.ajax({
        url:"http://192.9.235.7:8080/api/Reservation/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la reserva");
            window.location.reload();
    
        }
    });
    }

}

function putReservaciones(idDesdeBoton){
    console.log(idDesdeBoton)
    if($("#startDate").val().length==0 || $("#devolutionDate").val().length==0 ){

        alert("Todos los campos son obligatorios")
    }else {

    let cajas = {
        idReservation:idDesdeBoton,
        name:$("#name").val(),
        description:$("#description").val()
    };
    $.ajax({
        url:"http://192.9.235.7:8080/api/Reservation/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la informacion de Reservaciones");
            window.location.reload();
    
        }
    });
}

}

function deleteReservaciones(data){
    
    let myData={
        id:data
    };
    $.ajax({
        url:"http://192.9.235.7:8080/api/Reservation/"+data,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"aplication/json",
        success:function(respuesta){
            
            alert("Se borro correctamente la reservacion");
            window.location.reload();
        }
    });
    
}
//////////////////////////////////////////////
function  pintarReservaciones(json_maquinas){
    //console.log(json_maquinas);
    let myTable="<table>";
    for(i=0;i<json_maquinas.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+json_maquinas[i].idReservation+"</td>";
        myTable+="<td>"+json_maquinas[i].startDate+"</td>";
        myTable+="<td>"+json_maquinas[i].devolutionDate+"</td>";
        myTable+="<td>"+json_maquinas[i].status+"</td>";
        myTable+="<td>"+json_maquinas[i].machine.name+"</td>";
        myTable+="<td>"+json_maquinas[i].client.name+"</td>";
        myTable+="<td> <button class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onclick='putReservaciones("+json_maquinas[i].idReservation+")'> Actualizar </button>"
        myTable+="<td> <button class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onclick='deleteReservaciones("+json_maquinas[i].idReservation+")'> Borrar </button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

///////////////////////////////////////////////

function getClient_Reservation(){
    $.ajax({
        url:"http://192.9.235.7:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-client");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>' )
            })
        }
    });
}

function getMachine_Reservation(){
    $.ajax({
        url:"http://192.9.235.7:8080/api/Machine/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-machine");
            $.each(respuesta, function(id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>' )
            })
        }
    });
    
}