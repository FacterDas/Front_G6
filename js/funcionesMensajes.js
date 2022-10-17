//GET, POST , PUT Y DELETE

function getMensajes (){
    $.ajax({
        url:"http://192.9.235.7:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarMensajes(respuesta);
        }
    });
}

function postMensajes(){
    let cajas = {
        messageText:$("#messageText").val(),
        client:{idClient: +$("#select-client").val()},
        machine:{id: +$("#select-machine").val()}
        
    };
    console.log(cajas);
    $.ajax({
        url:"http://192.9.235.7:8080/api/Message/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el mensaje");
            window.location.reload();
    
        }
    });
}

function putMensajes(idDesdeMesaje){

    console.log(idDesdeMesaje)
    if($("#messageText").val().length==0 || $("#select-client").val().length==0 || $("#select-machine").val().length==0){

        alert("Todos los campos son obligatorios")
    }else {

    let cajas = {
        idMessage:idDesdeMesaje,
        messageText:$("#messageText").val(),

    };
    $.ajax({
        url:"http://192.9.235.7:8080/api/Message/update",
        type:"PUT",
        datatype:"JSON",
        contentType:"application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la informacion del mensaje");
            window.location.reload();
    
        }
    });
}

}

function deleteMensajes(data){
    let myData={
        id:data
    };
    $.ajax({
        url:"http://192.9.235.7:8080/api/Message/"+data,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"aplication/json",
        success:function(respuesta){
            
            alert("Se borro correctamente el mensaje");
            window.location.reload();
        }
    })
    
}


////////////////////////////////////////////

function pintarMensajes(respuesta){
   
    let myTable="<table>";
   
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td > <button class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onclick='putMensajes("+respuesta[i].idMessage+")'> Actualizar </button>"
        myTable+=" <td> <button class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onclick='deleteMensajes("+respuesta[i].idMessage+")'>Borrar </button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);


}

function getMachine_Message(){
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

function getClient_Message(){
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