<template>
  <div>
    <b-breadcrumb :items="bread"></b-breadcrumb>
    <form @submit.prevent="submitForm" id="formboot">
      <label for="marca">Marca:</label>
      <input v-model="marca" type="text" pattern="[A-Za-z0-9]+" required />

      <label for="modelo">Modelo:</label>
      <input v-model="modelo" type="text" pattern="[A-Za-z0-9]+" required />

      <label for="anio">Año de fabricación:</label>
      <input v-model="anio" type="number" :max="currentYear" required />

      <label for="numeroSerie">Número de serie:</label>
      <input
        v-model="numeroSerie"
        type="text"
        pattern="[A-Za-z]{4}[0-9]{3}-[0-9]{2}[A-Za-z]{2}"
        required
      />

      <button id="formbuton" type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
import ServicioVehiculos from "../services/Vehiculo";
export default {
  data() {
    return {
        bread: [
        {
          text: "Sitio Pricipal",
          href: "/landing",
        },
        {
          text: "Formulario",
          active: true,
        },
      ],
      marca: "",
      modelo: "",
      anio: null,
      numeroSerie: "",
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    async submitForm() {
      if (this.isValid()) {
        try {
          const datosVehiculo = {
            brand: this.marca,
            model: this.modelo,
            year: this.anio,
            serie: this.numeroSerie,
          };

          const respuesta = await ServicioVehiculos.enviarDatosVehiculo(datosVehiculo);

          console.log('Respuesta del servidor:', respuesta);

        } catch (error) {
          console.error('Error al enviar datos:', error);
        }
      } else {
        console.log("Formulario inválido. Por favor, verifica los datos.");
      }
    },
    isValid() {
      const marcaRegex = /^[A-Za-z0-9]+$/;
      const modeloRegex = /^[A-Za-z0-9]+$/;
      const anioValid = this.anio <= this.currentYear;
      const numeroSerieRegex = /^[A-Za-z]{4}[0-9]{3}-[0-9]{2}[A-Za-z]{2}$/;

      return (
        marcaRegex.test(this.marca) &&
        modeloRegex.test(this.modelo) &&
        anioValid &&
        numeroSerieRegex.test(this.numeroSerie)
      );
    },
  },
};
</script>

<style scoped>
</style>
