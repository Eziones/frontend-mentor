<template>
  <div class="hub">
    <div class="grid">
      <a v-for="p in projects" :key="p.slug" :href="`${baseUrl}projects/${p.slug}/index.html`" target="_blank"
        class="card">
        <img :src="`${baseUrl}projects/${p.slug}/${p.preview}`" :alt="p.title" />

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
  props: ['projects'],
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL
    }
  }
};
</script>

<style scoped>
.hub {
  padding: 2rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
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