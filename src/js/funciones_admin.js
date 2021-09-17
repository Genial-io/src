
function zfill(hora) {
    hora_funcion =hora
    hora_funcion=hora_funcion.toString();
    if(hora_funcion.length<=2){
        hora_funcion = hora_funcion.padStart(2, "0")
    }else{
        hora_funcion=hora_funcion;
    }
    return hora_funcion
  }
  //formato a la fecha : fecha a string fecha
  function format_date(date){
    var dia = date.getDate();
    dia= dia.toString();
    dia = dia.padStart(2,'0');
    var mes = parseInt(date.getMonth()) + 1 ;
    mes= mes.toString();
    var ano = date.getFullYear();
    ano = ano.toString();
    var hour=date.getHours();
    hour= zfill(hour);
    var minutes=date.getMinutes();
    minutes=minutes.toString();
    minutes=minutes.padStart(2,'0');
    var segundos=date.getSeconds();
    segundos=segundos.toString();
    segundos=segundos.padStart(2,'0');
    fecha_format=ano+"-"+mes+"-"+dia+" "+hour+":"+minutes+":"+segundos
    return fecha_format
  }
  //agrega un digito mas y formato fecha
  function format_date_short(date){
    var dia = date.getDate() 
    dia= dia.toString()
    if(dia.length<2){
      dia="0"+dia;
    }
    var mes = parseInt(date.getMonth()) + 1 
    mes= mes.toString()
    if(mes.length<2){
      mes="0"+mes;
    }
    var ano = date.getFullYear()
    ano = ano.toString()
    fecha_format=ano+"-"+mes+"-"+dia
    return fecha_format
  }
  //añadir el tiempo de minutos y segundos
  function add_time(fecha,value){
    var addMin=Math.trunc(value);
    var addSec= Math.round((value % 1)*100)
    var fecha_add = new Date(fecha)
    fecha_add=fecha_add.setMinutes(fecha_add.getMinutes()+addMin);
    fecha_add = new Date(fecha_add);
    fecha_add=fecha_add.setSeconds(fecha_add.getSeconds()+addSec);
    fecha_add=new Date(fecha_add);
    return fecha_add;
  
  }
  function add_timeNew(fecha_timestamp,value,modo){
    var rta = new Array();
    var value_timestamp = (Math.trunc(value)*60000)+(Math.round((value % 1)*60) * 1000);//[milisegundos]
    //console.log('value '+value+' value_timestamp '+value_timestamp)
    rta['ms'] = (modo=='sumar')?moment(fecha_timestamp).add(value_timestamp,'ms').valueOf():moment(fecha_timestamp).subtract(value_timestamp,'ms').valueOf(); //[milisegundos]
    rta['date'] = moment(rta['ms']).format("YYYY-MM-DD HH:mm:ss");
    //fecha_timestamp+value_timestamp:fecha_timestamp-value_timestamp;
    return rta;
  }
  //colores de chart barras
  function color_bar(cont,key_cont){
      
      if(cont==0){
        color="#312582"
      }else{
        color="#00953f" 
      }
      if(key_cont=="ini"){
        color="#00FFFF"
      }
      if(key_cont=="fin"){
        color="#62AAFC"
      }
      return color;
  }
  function restar_fechas(tiempo1,tiempo2){
    var dif = tiempo1 - tiempo2
    var segundos_entre_fechas = dif / 1000;
    segundos_entre_fechas = Math.abs(segundos_entre_fechas);
    return segundos_entre_fechas
  }
  function getSegundos(value){
    return (Math.trunc(value)*60)+(Math.round((value % 1)*60))
  }
  
  function sortJSON(data, key, orden) {
      return data.sort(function (a, b) {
          var x = a[key],
          y = b[key];
  
          if (orden === 'asc') {
              return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          }
  
          if (orden === 'desc') {
              return ((x > y) ? -1 : ((x < y) ? 1 : 0));
          }
      });
  }
  
  function isValidDate(str) {
    // mm-dd-yyyy hh:mm:ss  
    var regex = /(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})\s*(\d{0,2}):?(\d{0,2}):?(\d{0,2})/,
    parts = regex.exec(str);
    
    if (parts) {
      var date = new Date ( (+parts[3]), (+parts[1])-1, (+parts[2]), (+parts[4]), (+parts[5]), (+parts[6]) );
      if ( ( date.getDate() == parts[2] ) && ( date.getMonth() == parts[1]-1 ) && ( date.getFullYear() == parts[3] ) ) {
        return date;
      }
    } 
    
    return false;
    
  }