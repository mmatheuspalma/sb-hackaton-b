<script setup lang="ts">
import Item from '../components/Item.vue'
</script>

<template>
  <main>
    <h1>Teams</h1>
    <p>Here are our teams:</p>
    <Item>
      <template #heading>Group A (supported by Sid)</template>
      <p>25.1.2023 - Wednesday - UTC 8am</p>
      <ul>
        <li>Chakit Arora</li>
        <li>Josephine Schäfer</li>
        <li>Thomas Sweet (Vue Lead)</li>
        <li>Bright Mba</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group B - (supported by Bibi & Lisi)</template>
      <p>25.1.2023 - Wednesday - UTC 8am</p>
      <ul>
        <li>Dipankar Maikap</li>
        <li>Matheus Palma (Vue Lead)</li>
        <li>Lorena Ramdonda</li>
        <li>Ben Wasonga</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group C - (supported by Lisi)</template>
      <p>25.1.2023 - Wednesday - UTC 1pm</p>
      <ul>
        <li>Carolina Faria (Vue Lead)</li>
        <li>Facundo Giuliani</li>
        <li>Jessica Furtado</li>
        <li>Gustavo Previatto</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group D - (supported by Bibi & Sid)</template>
      <p>25.1.2023 - Wednesday - UTC 1pm</p>
      <ul>
        <li>Johannes Lindgren</li>
        <li>Marco Antonio De Campos Ortiz</li>
        <li>Adel Ben Massaoud (Vue Lead)</li>
        <li>Rose Akoth</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group E - (supported by Lisi)</template>
      <p>26.1.2023 - Thursday - UTC 1pm</p>
      <ul>
        <li>Emanuel Goncales</li>
        <li>Silas Merdasa</li>
        <li>Manuel Schroeder</li>
        <li>Edo Sandon</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group F - (supported by Bibi)</template>
      <p>26.1.2023 - Thursday - UTC 1pm</p>
      <ul>
        <li>Anthony Sousa</li>
        <li>Pablo Veiga (Vue Lead)</li>
        <li>Alexa Spalato</li>
        <li>Luis Jimenez</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group G - (supported by Bibi & Lisi)</template>
      <p>30.1.2023 - Monday - UTC 12:30pm</p>
      <ul>
        <li>Alba Silvente (Vue Lead)</li>
        <li>Roberto Butti</li>
        <li>Patrick Odey</li>
        <li>Fortune Ikechi</li>
      </ul>
    </Item>
  </main>
</template>


<style scoped>
main {
  margin: 4rem;
}

</style>
