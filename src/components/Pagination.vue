<template>
  <div>
    <div id="pagination">
      <b-breadcrumb :items="bread"></b-breadcrumb>
      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import vehiculoService from "../services/Vehiculo.js"; // Ajusta la ruta según tu estructura de archivos

export default {
  data() {
    return {
      bread: [
        {
          text: "Sitio Pricipal",
          href: "/landing",
        },
        {
          text: "Pagination",
          active: true,
        },
      ],
      filtro: null,
      sortBy: "brand",
      sortDesc: false,
      perPage: 5,
      rows: 0,
      currentPage: 1,
      items: [],
      fields: [
        { key: "brand", label: "brand", sortable: true },
        { key: "model", label: "model", sortable: true },
        { key: "year", label: "year", sortable: true },
        { key: "serie", label: "serie", sortable: true },
      ],
    };
  },
  mounted() {
    this.obtenerVehiculos();
  },
  methods: {
    async obtenerVehiculos() {
      try {
        const data = await vehiculoService.obtenerVehiculosPaginados();
        this.items = data.content;
        this.rows = this.items.length;
      } catch (error) {
        console.error(error);
        // Manejar errores (puedes mostrar un mensaje de error al usuario, por ejemplo)
      }
    },
    onFiltered(filteredItems) {
      this.currentPage = 1;
      this.rows = filteredItems.length;
    },
  },
};
</script>