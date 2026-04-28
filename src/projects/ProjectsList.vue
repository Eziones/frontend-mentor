<template>
  <div class="hub">
    <h1>Frontend Mentor Hub</h1>
    <p class="subtitle">{{ projects.length }} projets complétés</p>

    <div class="grid">
      <a v-for="p in projects" :key="p.slug" :href="`/projects/${p.slug}/index.html`" target="_blank" class="card">
        <img :src="`/projects/${p.slug}/${p.preview}`" :alt="p.title" />

        <div class="card-body">
          <h2>{{ p.title }}</h2>
          <div class="meta">
            <span :class="`badge badge-${p.difficulty.toLowerCase()}`">
              {{ p.difficulty }}
            </span>
            <span class="tag">{{ p.tags.join(' · ') }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: null
    }
  },
  created() {
    const metas = import.meta.glob('/projects/*/meta.js', { eager: true });
    this.projects = Object.entries(metas).map(([path, mod]) => ({
      slug: path.split('/')[2],
      ...mod.default
    }));
    console.log(this.projects);
  }
};
// const metas = import.meta.glob('/public/projects/*/metas.js', { eager: true });

// const projects = Object.entries(metas).map(([path, mod]) => ({
//   slug: path.split('/')[2],
//   ...mod.default
// }));


// console.log(projects);
</script>

<style scoped>
.hub {
  padding: 2rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.card {
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: border-color 0.15s, transform 0.15s;
}

.card:hover {
  border-color: #ccc;
  transform: translateY(-2px);
}

.card img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.card-body {
  padding: 0.875rem 1rem;
}

.card-body h2 {
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 6px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.badge {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 6px;
}

.badge-newbie {
  background: #E1F5EE;
  color: #0F6E56;
}

.badge-junior {
  background: #E6F1FB;
  color: #185FA5;
}

.badge-intermediate {
  background: #FAEEDA;
  color: #854F0B;
}

.badge-advanced {
  background: #FCEBEB;
  color: #A32D2D;
}

.tag {
  font-size: 0.7rem;
  color: #888;
}
</style>