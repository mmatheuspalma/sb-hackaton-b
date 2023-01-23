<script setup lang="ts">
import Item from '../components/Item.vue'
</script>

<template>
  <main>
    <h1>Getting Started ✨</h1>
    <Item>
      <template #heading>15 minutes - Introduction</template>
      <p>Introduce team members and allow them to briefly share their backgrounds and skills. Use this time to form teams and assign roles if you want. The group supervisor will quickly check-in with you in case there are some open questions.</p>
    </Item>
    <Item>
      <template #heading>10 minutes - Repository</template>
      <p>Create a new repository on Github for your team's project and add all the team members. You can scaffold a new project with Vue 3 or clone <a href="https://github.com/storyblok/internal-hackathon-vue-3" target="_blank" rel="noopener noreferrer">this project</a>. Share the repository link and access with team members.</p>
    </Item>
    <Item>
      <template #heading>30 min - 1 hour - Brainstorming</template>
      <p>Use this time to brainstorm ideas and come up with a concept for the project, you can check the idea page for some ideas. Have team members share their ideas and vote on the best concept.</p>
    </Item>
    <Item>
      <template #heading>2 - 3 hours - Hacking</template>
      <p>Begin working on the project, with each team members having some clear assignment.</p>
    </Item>
    <Item>
      <template #heading>15 minutes - Presentation</template>
      <p>In the end prepare a presentation or demo of the project to be shared with the hackathon participants. It can be good to document some of your insight during or directly after the hackathon finished, maybe in a shared document or a slack channel or just a recorded video where you chat about it. It can include learnings you had about Vue 3, your idea and how far you got. You can create a short video or make some slides or do a live presentation in the closing ceremony! The presentation should be between 3-8 minutes.</p>
    </Item>
  </main>
</template>


<style scoped>
main {
  margin: 4rem;
}

</style>
