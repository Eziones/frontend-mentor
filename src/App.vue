<script setup>
import ProjectsList from './projects/ProjectsList.vue';
import TheHeader from './UI/TheHeader.vue';

</script>

<template>
  <TheHeader>
    <div>
      <h1>Frontend Mentor Hub</h1>
      <p>{{ projects.length }} projets complétés</p>
    </div>
  </TheHeader>
  <ProjectsList :projects="projects"></ProjectsList>
</template>

<script>
export default {
  data() {
    return {
      projects: null
    }
  },
  created() {
    const metas = import.meta.glob('/public/projects/*/meta.js', { eager: true });
    this.projects = Object.entries(metas).map(([path, mod]) => ({
      slug: path.split('/')[3],
      ...mod.default
    }));
  }
};
</script>

<style>
* {
  font-family: 'Outfit', Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
</style>
