var listaclientes =[];



function facturacion(pNombre, pApellidos, pDireccion, pID, pTelefono, pEdad, pNIF, pBarrio){
    
    var nuevoCliente = {
        nombre : pNombre,
        apellidos : pApellidos,
        direccion : pDireccion,
        id : pID,
        Telefono : pTelefono,
        edad : pEdad,
        nif : pNIF,
        barrio : pBarrio
    };
    console.log(nuevoCliente);
    listaclientes.push(nuevoCliente);
    localStoragelist(listaclientes);
}

function obtenerlista(){
    var storeList = localStorage.getItem('localList');
    if(storeList == null){
        listaclientes = [];
    }else{
        listaclientes = JSON.parse(storeList);
    }
    return listaclientes;
}

function localStoragelist(plist){
    localStorage.setItem('localList', JSON.stringify(plist));

}

function Procesar(){

    var Ajiaco  = document.getElementById('txtAjiaco').value;
    var resA = 16000*parseInt(Ajiaco);

    var Bandeja = document.getElementById('txtBandeja').value;
    var resB = 20000*parseInt(Bandeja);

    var Patrasca = document.getElementById('txtPatrasca').value;
    var resP = 16000*parseInt(Patrasca);

    var Sancocho = document.getElementById('txtSancocho').value;
    var resS = 18000*parseInt(Sancocho);

    var Mondongo = document.getElementById('txtMondongo').value;
    var resM = 15000*parseInt(Mondongo);

    var Platanos = document.getElementById('txtPlatanos').value;
    var resPl = 10000*parseInt(Platanos);

    var Postre = document.getElementById('txtPostre').value;
    var resPs = 5000*parseInt(Postre);

    var resT = resA + resB + resP + resS + resM + resPl + resPs;

    var Comentario = document.getElementById('txtcomentario').value;

    alert("El total a pagar es de"+resT);
    console.log("el total a pagar es de: "+ resT);
    console.log("Tu comentaario de epedido es: "+ Comentario)

}