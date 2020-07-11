document.querySelector('#botonregistara').addEventListener('click', salvardatos);
getimprimirtabla();

function salvardatos(){
    var snombres=document.querySelector('#NOMBRE').value,
        sapellidos=document.querySelector('#Apellido').value,
        spais=document.querySelector('#pais').value,
        sedad=document.querySelector('#edad').value,
        ssexo=document.querySelector('#sexo').value,
        snacimiento=document.querySelector('#naci').value,
        sestado=document.querySelector('#civil').value,
        semail=document.querySelector('#direccionemail').value,
        stel=document.querySelector('#telefono').value,
        scel=document.querySelector('#celular').value,
        sestratos=document.querySelector('#estrato').value,
        sid=document.querySelector('#Identidad').value,
        sdireccion=document.querySelector('#Direccion').value,
        sreli=document.querySelector('#religion').value,
        ssangre=document.querySelector('#sangre').value;

        addinformcion(snombres,sapellidos,spais,sedad,ssexo,snacimiento,sestado, semail,  stel,scel, sestratos,sid,sdireccion,sreli,ssangre);
        getimprimirtabla();

}

function getimprimirtabla(){
    var list= obtenertabla2();
        tbody=document.querySelector('#tblaRegistro tbody');
        
    tbody.InnerHTML =''; 

   for (var i=0;i<list.length;i++){
       var row=tbody.insertRow(i);
       var nombrecell=row.insertCell(0),
           apellidocell=row.insertCell(1),
           nacionalidadcell=row.insertCell(2),
           edadcell=row.insertCell(3),
           sexocell=row.insertCell(4),
           nacimientocell=row.insertCell(5),
           estadocell=row.insertCell(6),
           correocell=row.insertCell(7),
           fijocell=row.insertCell(8),
           celcell=row.insertCell(9),
           estratocell=row.insertCell(10),
           idcell=row.insertCell(11),
           direccell=row.insertCell(12),
           relicell=row.insertCell(13),
           sangrecell=row.insertCell(14),
           selectcell=row.insertCell(15);
           

       nombrecell.InnerHTML=list[i].nombre;
       apellidocell.InnerHTML=list[i].apellido;
       nacionalidadcell.InnerHTML=list[i].nacionalidad;
       edadcell.InnerHTML=list[i].edades;
       sexocell.InnerHTML=list[i].sexos;
       nacimientocell.InnerHTML=list[i].echa_naci;
       estadocell.InnerHTML=list[i]. estado_civil;
       correocell.InnerHTML=list[i].email;
       fijocell.InnerHTML=list[i].telefono_fijo;
       celcell.InnerHTML=list[i].celulares;
       estratocell.InnerHTML=list[i].estatos;
       idcell.InnerHTML=list[i]. No_ID;
       direccell.InnerHTML=list[i].direcciones;
       relicell.InnerHTML=list[i].reliones;
       sangrecell.innerHTML=list[i].tipo_sangr;

       var inputselect=document.createElement('imput');
       inputselect.type='radio';
       inputselect.value=list[i].nombre;
       selectcell.appendChild(inputselect);



       tbody.appendChild(row);

   }
        


}