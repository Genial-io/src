
var ServiceFetch = async (device, var_label, payload, to_k)=> {
    let url = `https://industrial.api.ubidots.com/api/v1.6/devices/${device}/${var_label}/values/`;
    return fetch(url, {
      method: "POST",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res.json());
  };
  var ServiceFetchBulk = async (device, payload, to_k)=> {
    let url = `https://industrial.ubidots.com/api/v1.6/devices/${device}`;
    return fetch(url, {
      method: "POST",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res);
  };
  var Get_ServiceFetch = async (device, var_label, parametros, to_k)=> {
    let url = `https://industrial.api.ubidots.com/api/v1.6/devices/${device}/${var_label}/values?start=${parametros.start}&end=${parametros.end}&page_size=300`;
    return fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(payload)
    }).then(res => res.json());
  };
  var get_ServiceFetch2 = async (device, var_label, parametros, to_k)=> {
    let url = `https://industrial.api.ubidots.com/api/v1.6/devices/${device}/${var_label}/values?page_size=${parametros.size}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  };
  var Get_Var_ServiceFetch = async (device,variable_label, to_k)=> {
   let url = `https://industrial.api.ubidots.com/api/v1.6/devices/${device}/${variable_label}/`
    return fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(payload)
    }).then(res => res.json());
  };
  var Del_Var_ServiceFetch = async (id_variable,timestamp, to_k)=> {
   let url = `https://industrial.api.ubidots.com/api/v1.6/variables/${id_variable}/values/${timestamp}/${timestamp}/`
    return fetch(url, {
      method: "DELETE",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(payload)
    }).then(res => res.json());
  };
  var Del_Var_ServiceFetch2 = async (id_variable,timestamp, to_k)=> {
    let url = `https://industrial.api.ubidots.com/api/v1.6/variables/${id_variable}/values/${timestamp}/${timestamp}/`
     return fetch(url, {
       method: "DELETE",
       headers: {
         "X-Auth-Token": to_k,
         "Content-Type": "application/json"
       },
       // body: JSON.stringify(payload)
     }).then(res => res);
   };
  var Set_ServiceFetch = async (device, var_label,data,payload, to_k)=> {
    let url = `https://industrial.api.ubidots.com/api/v1.6/devices/${device}/${var_label}/values?start=${parametros.start}&end=${parametros.end}&page_size=300`;
    return fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": to_k,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res.json());
  };
  //https://ubidots.com/docs/sw/#operation/Delete%20Device%20Variable
  //https://genial.iot.ubidots.com/app/devices/5db08812e694aa50b9f4c038/5db088356e24425c7749facd
  