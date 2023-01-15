<script setup lang="ts">
import Item from '../components/Item.vue'
</script>

<template>
  <main>
    <h1>Ideas</h1>
    <p>These are just some input ideas to get you started off.</p>
    <Item>
      <template #heading>Meditation timer</template>
      A timer for taking a break that plays some sound or visual effect, <a href="https://thezen.zone/" target="_blank" rel="noopener noreferrer">example</a>
    </Item>
    <Item>
      <template #heading>Office simulator</template>
      A bot that emulates meeting someone in the office kitchen giving funny or weird comments like: "The printer on the first floor is out of ink, we've ordered some more but don't expect it to work before Wednesday.", <a href="https://github.com/tholman/office-simulator" target="_blank" rel="noopener noreferrer">example</a>
    </Item>
    <Item>
      <template #heading>E-Commerce template</template>
      Allows the use to browse and purchase products, build some example components in vue 3 <a href="https://demo.vercel.store/" target="_blank" rel="noopener noreferrer">example</a>
    </Item>
    <Item>
      <template #heading>Abstract clocks</template>
      Some CSS effects that change depending on the current time, <a href="https://codepen.io/BelleAsher/pen/zYozbeM" target="_blank" rel="noopener noreferrer">example</a>
    </Item>
    <Item>
      <template #heading>Virtual Assistant</template>
      A virtual assistant that pops up and offers helpful tips and suggestions while the user is browsing, <a href="https://codepen.io/tacosontitan/pen/LYEYBxe" target="_blank" rel="noopener noreferrer">example</a>
    </Item>
    <Item>
      <template #heading>Sound Machine</template>
      A game where different buttons can be clicked to generate different sounds, <a href="https://codepen.io/nuobiruteskalno/pen/abdLEeq" target="_blank" rel="noopener noreferrer">example</a> 
    </Item>
    <Item>
      <template #heading>Story Visualizer</template>
      A visualizer that visualizes all the stories or blocks in a Storyblok space, <a href="https://codepen.io/ejsado/pen/QWKgNB" target="_blank" rel="noopener noreferrer">example</a>
    </Item>
    <Item>
      <template #heading>Rebuild Storyblok</template>
      Pick some parts of Storyblok and rebuild them in Vue 3. 
    </Item>
  </main>
</template>


<style scoped>
main {
  margin: 4rem;
}

</style>
