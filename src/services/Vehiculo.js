import axios from 'axios';

let API_URL = 'http://localhost:8080/api/vehiculos/page';
let API_URL_SAVE = 'http://localhost:8080/api/vehiculos';


const obtenerVehiculosPaginados = async () => {
   try {
      const response = await axios.post(API_URL, null);
    console.log(response);
      return response.data;
   } catch (error) {
      throw error;
   }
};

const enviarDatosVehiculo = async (datosVehiculo) => {
    try {
       const response = await axios.post(API_URL_SAVE, datosVehiculo);
       console.log(response);
       return response.data;
    } catch (error) {
       throw error;
    }
 };

export default {
   obtenerVehiculosPaginados, enviarDatosVehiculo
};