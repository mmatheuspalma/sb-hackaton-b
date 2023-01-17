<script setup lang="ts">
import Item from '../components/Item.vue'
</script>

<template>
  <main>
    <h1>Teams</h1>
    <p>Here are our teams:</p>
    <Item>
      <template #heading>Group A (supported by Sid)</template>
      <ul>
        <li>Chakit Arora</li>
        <li>Josephine Schäfer</li>
        <li>Thomas Sweet</li>
        <li>Bright Mba</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group B - (supported by Bibi & Lisi)</template>
      <ul>
        <li>Dipankar Maikap</li>
        <li>Matheus Palma</li>
        <li>Lorena Ramdonda</li>
        <li>Ben Wasonga</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group C - (supported by Lisi)</template>
      <ul>
        <li>Carolina Faria</li>
        <li>Facundo Giuliani</li>
        <li>Jessica Furtado</li>
        <li>Gustavo Previatto</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group D - (supported by Bibi & Sid)</template>
      <ul>
        <li>Johannes Lindgren</li>
        <li>Marco Antonio De Campos Ortiz</li>
        <li>Adel Ben Massaoud</li>
        <li>Rose Akoth</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group E - (supported by Lisi)</template>
      <ul>
        <li>Emanuel Goncales</li>
        <li>Silas Merdasa</li>
        <li>Manuel Schroeder</li>
        <li>Edo Sandon</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group F - (supported by Bibi)</template>
      <ul>
        <li>Anthony Sousa</li>
        <li>Pablo Veiga</li>
        <li>Alexa Spalato</li>
        <li>Luis Jimenez</li>
      </ul>
    </Item>
    <Item>
      <template #heading>Group G - (supported by Bibi & Lisi)</template>
      <ul>
        <li>Alba Silvente</li>
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
