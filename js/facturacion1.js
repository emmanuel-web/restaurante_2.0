document.querySelector('#btnGuardar').addEventListener('click', Guardar);
imprimirtabla();

function Guardar(){
    var sNombre = document.querySelector('#txtNombre').value,
        sApellidos = document.querySelector('#txtApellidos').value,
        sDireccion = document.querySelector('#txtDireccion').value,
        sID = document.querySelector('#txtID').value,
        sTelefono = document.querySelector('#txtTelefono').value,
        sEdad = document.querySelector('#txtEdad').value,
        sNIF = document.querySelector('#txtNIF').value,
        sBarrio = document.querySelector('#txtBarrio').value;

    facturacion(sNombre, sApellidos, sDireccion, sID, sTelefono, sEdad, sNIF, sBarrio);
    imprimirtabla();

}

function imprimirtabla(){
    var list = obtenerlista();
        tbody = document.querySelector('#tablaclientes tbody');
    
    tbody.innerHTML = '';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
        var nombreCell = row.insertCell(0),
            apellidosCell = row.insertCell(1),
            direccionCell = row.insertCell(2),
            idCell = row.insertCell(3),
            telefonoCell = row.insertCell(4),
            edadCell = row.insertCell(5),
            nifCell = row.insertCell(6),
            barrioCell = row.insertCell(7),
            selectCell = row.insertCell(8);


        nombreCell.innerHTML = list[i].nombre;
        apellidosCell.innerHTML = list[i].apellidos;
        direccionCell.innerHTML = list[i].direccion;
        idCell.innerHTML = list[i].id;
        telefonoCell.innerHTML = list[i].telefono;
        edadCell.innerHTML = list[i].edad;
        nifCell.innerHTML = list[i].nid;
        barrioCell.innerHTML = list[i].barrio;

        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i]. id;
        selectCell.appendChild(inputSelect);


        tbody.appendChild(row);
    }
}