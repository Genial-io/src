
/*  <?php require_once(APPPATH."application/config/constant.php" ?>
console.log('<?php echo test("string1"); ?>'); */

// TODO: Replace the following with your app's Firebase project configuration
/*var firebaseConfig = {
  apiKey: '<?php echo FB_APIKEY; ?>',
  authDomain: '<?php echo FB_AUTHDOMAIN ?>',
  databaseURL: '<?php echo FB_DATABASEURL ?>',
  projectId: '<?php echo FB_PROJECTID ?>',
  storageBucket: '<?php echo FB_STORAGEBUCKET ?>',
  messagingSenderId: '<?php echo FB_MESSAGINGSENDERID ?>',
  appId: '<?php echo FB_APPID ?>'
};*/




var getData = async () =>  {
    console.log('ENTRE')
   const snapshot = await firebase.firestore()
     .collection('Referencia')
     .where("cliente", "==", 2).get();
   const items = snapshot.docs.map(doc => doc.data());
   return items;
  }
  
  var getUser = async (username, password)=> {
    const snapshot = await firebase
    .firestore()
    .collection("Usuarios")
    .where("username", "==", username)
    .where("password", "==", password)
    .get();
     
    /*sessionStorage.setItem(
      "userlogin",
      JSON.stringify({
        //username: encriptarText(items[0].username).toString(),
        //cliente: encriptarText(items[0].cliente.toString()).toString(),
        username: items[0].username,
        cliente: items[0].cliente,
        vpeso: items[0].peso,
        vreferencia: items[0].referencia
      })
    );
  */
    return snapshot.docs.map(doc => doc.data());;
  }
  
  var getMaquinaByUser = async (id_cliente)=> {
    const snapshot = await firebase
    .firestore()
    .collection("Maquinas")
    .where("cliente", "==", parseInt(id_cliente))
    .get();
    
    return snapshot.docs.map(doc => doc.data());
  }
  
  var getParadaPendiente = async (estado, id_cliente)=> {
    const snapshot = await firebase.firestore()
        .collection('ParadasEnCurso')
        .where("cliente", "==", parseInt(id_cliente))
        .where("estado", "==", parseInt(estado))
        .get();
  
    return snapshot.docs.map(doc => doc.data());
  }
  var getReferenciasByUser = async (id_cliente)=> {
    const snapshot = await firebase.firestore()
    .collection('Referencia')
    .where("cliente", "==", parseInt(id_cliente))
    .orderBy("nombre")
    .get();
  
    return snapshot.docs.map(doc => doc.data());
  }
  
  var getReferenciaByRef = async (referencia)=> {
    const snapshot = await firebase.firestore()
    .collection('Referencia')
    .where("referencia", "==", referencia)
    .get();
  
    return snapshot.docs.map(doc => doc.data());
  }
  
  var getBotonesByUser = async (id_cliente)=> {
    const snapshot = await firebase.firestore()
    .collection('Botones')
    .where("cliente", "==", parseInt(id_cliente))
    //.orderBy("id")
    .orderBy("name")
    .get();
  
    return snapshot.docs.map(doc => doc.data());
  }
  
  var getDetalleParada = async ()=> {
    const snapshot = await firebase.firestore()
    .collection('DetalleParada')
    .orderBy("name")
    .get();
  
    return snapshot.docs.map(doc => doc.data());
  }
  
  var setParadaEnCurso = async (id_cliente, username, maquina, idBoton, tiempo, estado, idDetalle = "")=> {
    await firebase
    .firestore()
    .collection("ParadasEnCurso")
    .add({
      cliente: parseInt(id_cliente),
      maquina: maquina,
      idBoton: parseInt(idBoton),
      tiempo: tiempo,
      estado: estado,
      idDetalleParada: parseInt(idDetalle),
      usuario: username
    });
  }
  
  var getParadasEnCursoByMaquina = async (maquina, idBoton, estado)=> {
    const snapshot = await firebase
    .firestore()
    .collection("ParadasEnCurso")
    .where("maquina", "==", maquina)
    .where("idBoton", "==", idBoton)
    .where("estado", "==", estado)
    .get();
  
    return snapshot.docs.map(doc => doc.data());
  }
  
  var setTerminarParada = async (maquina, idBoton, estado)=> {
    firebase
    .firestore()
    .collection("ParadasEnCurso")
    .where("maquina", "==", maquina)
    .where("idBoton", "==", idBoton)
    .where("estado", "==", estado)
    .get()
    .then(response => {
      response.forEach(doc => {
        //console.log(doc.id, " => ", doc.data());
        firebase
          .firestore()
          .collection("ParadasEnCurso")
          .doc(doc.id)
          .update({ estado: 0 });
      });
    });
  }
  
  
  
  
  //turno
  var getTurno = async (id_cliente)=> {
    const snapshot = await firebase
    .firestore()
    .collection("Turnos")
    .where("cliente", "==", parseInt(id_cliente))
   
    .get();
    return snapshot.docs.map(doc => doc.data());
  }
  /*var getTurno = async (id_cliente)=> {
    var db = firebase.firestore();  
   db.collection("Turnos").where("cliente", "==", parseInt(id_cliente)).orderBy("id")
    .get()
    .then((querySnapshot) => {
      let categories = []
      querySnapshot.forEach((doc) => {
        categories.push(doc.data())
      });
      this.setState({turnos: turnos});
    });
  }*/
  var getTimeMin = async (id_cliente)=> {
    const snapshot = await firebase
    .firestore()
    .collection("Usuarios")
    .where("cliente", "==", parseInt(id_cliente))
   
    .get();
    return snapshot.docs.map(doc => doc.data());
  }
  //cryptoJS
  var encriptarText = (data) => {
    var dataEncrypted = CryptoJS.AES.encrypt(data, 'key');   
    return dataEncrypted;
  };
  
  var desencriptarText = (datoEncriptado) => {    // Decrypt
    var decryptedDato = CryptoJS.AES.decrypt(datoEncriptado.toString(), 'key');  
    var desencriptado = decryptedDato.toString(CryptoJS.enc.Utf8);  
    return desencriptado;  
  };
  
  var getUserlogin = () => {    // Decrypt
    const data = JSON.parse(sessionStorage.getItem("userlogin"));
    const username = desencriptarText(data.username);  
    return username;  
  };
  
  var getCliente = () => {    // Decrypt
    const data =  JSON.parse(sessionStorage.getItem("userlogin"));
    const cliente = desencriptarText(data.cliente);  
    return parseInt(cliente);  
  };
  