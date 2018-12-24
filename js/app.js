firebase.initializeApp({
  apiKey: "AIzaSyDaSY5a7YsalDgfQPu5OvpC6PH1XNW0oWQ",
  authDomain: "inventario-ab11f.firebaseapp.com",
  databaseURL: "https://inventario-ab11f.firebaseio.com",
  projectId: "inventario-ab11f",
  storageBucket: "inventario-ab11f.appspot.com",
  messagingSenderId: "966851147904"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// GUARDAR DATOS ####################################################


function guardar(){ 
  /* Datos */
  var nit = document.getElementById('nit').value;
  var type = document.getElementById('type').value;
  var nameTeam = document.getElementById('nameTeam').value;
  var brand = document.getElementById('brand').value;
  var model = document.getElementById('model').value;
  var teamSeries = document.getElementById('teamSeries').value;
  var code = document.getElementById('code').value;
  var monitor = document.getElementById('monitor').value;
  var processor = document.getElementById('processor').value;
  var ram = document.getElementById('ram').value;
  var hdd = document.getElementById('hdd').value;
  var os = document.getElementById('os').value;
  var serialBattery = document.getElementById('serialBattery').value;
  var chargerModel = document.getElementById('chargerModel').value;
  var serialCharger = document.getElementById('serialCharger').value;
  var accessories = document.getElementById('accessories').value;
  var serialMouse = document.getElementById('serialMouse').value;
  var serialKeyboard = document.getElementById('serialKeyboard').value;
  var observations= document.getElementById('observations').value;

  db.collection("PC").add({
    nit : nit,
    type : type,
    nameTeam: nameTeam,
    brand: brand,
    model: model,
    teamSeries: teamSeries,
    code: code,
    monitor: monitor,
    processor: processor,
    ram: ram,
    hdd: hdd,
    os: os,
    serialBattery: serialBattery,
    chargerModel: chargerModel,
    serialCharger: serialCharger,
    accessories: accessories,
    serialMouse: serialMouse,
    serialKeyboard: serialKeyboard,
    observations: observations
  })
  .then(function(docRef) {
    //console.log("Document written with ID: ", docRef.id);
    document.getElementById('nit').value = '';
    document.getElementById('type').value = '';
    document.getElementById('nameTeam').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('teamSeries').value = '';
    document.getElementById('code').value = '';
    document.getElementById('monitor').value = '';
    document.getElementById('processor').value = '';
    document.getElementById('ram').value = '';
    document.getElementById('hdd').value = '';
    document.getElementById('os').value = '';
    document.getElementById('serialBattery').value = '';
    document.getElementById('chargerModel').value = '';
    document.getElementById('serialCharger').value = '';
    document.getElementById('accessories').value = '';
    document.getElementById('serialMouse').value = '';
    document.getElementById('serialKeyboard').value = '';
    document.getElementById('observations').value = '';
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}

// LEER DATOS #################################################

const tableResult = document.getElementById('tableResult');
db.collection("PC").onSnapshot((querySnapshot) => {
  tableResult.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    tableResult.innerHTML += `
    <tr>
      <td>${doc.data().nit}</td>
      <td>${doc.data().type}</td>
      <td>${doc.data().nameTeam}</td>
      <td>${doc.data().brand}</td>
      <td>${doc.data().model}</td>
      <td>${doc.data().teamSeries}</td>
      <td>${doc.data().code}</td>
      <td>${doc.data().monitor}</td>
      <td>${doc.data().processor}</td>
      <td>${doc.data().ram}</td>
      <td>${doc.data().hdd}</td>
      <td>${doc.data().os}</td>
      <td>${doc.data().serialBattery}</td>
      <td>${doc.data().chargerModel}</td>
      <td>${doc.data().serialCharger}</td>
      <td>${doc.data().accessories}</td>
      <td>${doc.data().serialMouse}</td>
      <td>${doc.data().serialKeyboard}</td>
      <td>${doc.data().observations}</td>
      <td>
        <button type="button" class="btn btn-info" onclick="btnEdit(
          '${doc.id}',
          '${doc.data().nit}',
          '${doc.data().type}',
          '${doc.data().nameTeam}', 
          '${doc.data().brand}', 
          '${doc.data().model}', 
          '${doc.data().teamSeries}', 
          '${doc.data().code}', 
          '${doc.data().monitor}', 
          '${doc.data().processor}', 
          '${doc.data().ram}', 
          '${doc.data().hdd}', 
          '${doc.data().os}', 
          '${doc.data().serialBattery}', 
          '${doc.data().chargerModel}', 
          '${doc.data().serialCharger}', 
          '${doc.data().accessories}',
          '${doc.data().serialMouse}', 
          '${doc.data().serialKeyboard}', 
          '${doc.data().observations}')">
          Editar
        </button>
      </td>
      <td>
        <button type="button" class="btn btn-danger" onclick="btnRemove('${doc.id}')">Eliminar</button>
      </td>
    </tr>`
  });
});

// BORRAR DATOS ###########################################

function btnRemove(id) { 
  var removeElementPc = confirm("Estas Seguro de Eliminar el Elemento")
  if ( removeElementPc == true ) {
    db.collection("PC").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }
} 

// EDITAR DATOS ##########################################

function btnEdit(id, type, nameTeam, brand, model, teamSeries, code, monitor, processor, ram, hdd, os, serialBattery, chargerModel, serialCharger, accessories, serialMouse, serialKeyboard, observations) {
  
  document.getElementById('nit').value = nit;
  document.getElementById('type').value = type;
  document.getElementById('nameTeam').value = nameTeam;
  document.getElementById('brand').value = brand;
  document.getElementById('model').value = model;
  document.getElementById('teamSeries').value = teamSeries;
  document.getElementById('code').value = code;
  document.getElementById('monitor').value = monitor;
  document.getElementById('processor').value = processor;
  document.getElementById('ram').value = ram;
  document.getElementById('hdd').value = hdd;
  document.getElementById('os').value = os;
  document.getElementById('serialBattery').value = serialBattery;
  document.getElementById('chargerModel').value = chargerModel;
  document.getElementById('serialCharger').value = serialCharger;
  document.getElementById('accessories').value = accessories;
  document.getElementById('serialMouse').value = serialMouse;
  document.getElementById('serialKeyboard').value = serialKeyboard;
  document.getElementById('observations').value = observations;
  
  var boton = document.getElementById('boton');
  boton.innerHTML = 'Editar';

  boton.onclick = function() {
    var washingtonRef = db.collection("PC").doc(id);

    var nit = document.getElementById('nit').value
    var type = document.getElementById('type').value
    var nameTeam = document.getElementById('nameTeam').value;
    var brand = document.getElementById('brand').value;
    var model = document.getElementById('model').value;
    var teamSeries = document.getElementById('teamSeries').value;
    var code = document.getElementById('code').value;
    var monitor = document.getElementById('monitor').value;
    var processor = document.getElementById('processor').value;
    var ram = document.getElementById('ram').value;
    var hdd = document.getElementById('hdd').value;
    var os = document.getElementById('os').value;
    var serialBattery = document.getElementById('serialBattery').value;
    var chargerModel = document.getElementById('chargerModel').value;
    var serialCharger = document.getElementById('serialCharger').value;
    var accessories = document.getElementById('accessories').value;
    var serialMouse = document.getElementById('serialMouse').value;
    var serialKeyboard = document.getElementById('serialKeyboard').value;
    var observations = document.getElementById('observations').value;

    // Set the "capital" field of the city 'DC'
      return washingtonRef.update({
        type: type,
        nit: nit,
        nameTeam: nameTeam,
        brand: brand,
        model: model,
        teamSeries: teamSeries,
        code: code,
        monitor: monitor,
        processor: processor,
        ram: ram,
        hdd: hdd,
        os: os,
        serialBattery: serialBattery,
        chargerModel: chargerModel,
        serialCharger: serialCharger,
        accessories: accessories,
        serialMouse: serialMouse,
        serialKeyboard: serialKeyboard,
        observations: observations
      })
      .then(function() {
        document.getElementById('nit').value = '';
        document.getElementById('type').value = '';
        document.getElementById('nameTeam').value = '';
        document.getElementById('brand').value = '';
        document.getElementById('model').value = '';
        document.getElementById('teamSeries').value = '';
        document.getElementById('code').value = '';
        document.getElementById('monitor').value = '';
        document.getElementById('processor').value = '';
        document.getElementById('ram').value = '';
        document.getElementById('hdd').value = '';
        document.getElementById('os').value = '';
        document.getElementById('serialBattery').value = '';
        document.getElementById('chargerModel').value = '';
        document.getElementById('serialCharger').value = '';
        document.getElementById('accessories').value = '';
        document.getElementById('serialMouse').value = '';
        document.getElementById('serialKeyboard').value = '';
        document.getElementById('observations').value = '';
        boton.innerHTML = 'Guardar';

        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
}

// BUSCAR DATOS ##########################################

function SearchNit() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputSearchNit");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function SearchCode() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputSearchCode");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}












