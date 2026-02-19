<script setup>
</script>

<template>
  <div>
    <h2 class="text text--h2">Macro Markets</h2>
    <p class="text text--p">A data-driven insight into market trends, key developments, and indicators to watch in the week ahead.</p>
    <div class="article-grid">
      <PictureItem title="October 13, 2025" url="https://www.instagram.com/p/DPvm9NCk4lM/"/>
      <PictureItem title="September 29, 2025" url="https://www.instagram.com/p/DPK0IYPk06i/"/>
      <PictureItem title="September 15, 2025" url="https://www.instagram.com/p/DOma6AVEzJ4/"/>
      <PictureItem title="September 1, 2025" url="https://www.instagram.com/p/DOCXyftEwGK/"/>
      <PictureItem title="August 18, 2025" url="https://www.instagram.com/p/DNemFRrzYsd/"/>
      <PictureItem title="May 5, 2025" url="https://www.instagram.com/p/DJQJOpfTQEU/"/>
      <PictureItem title="April 28, 2025" url="https://www.instagram.com/p/DI-OmyLT6sR/"/>
      <PictureItem title="April 7, 2025" url="https://www.instagram.com/p/DIIQjRATEiX/"/>
      <PictureItem title="March 31, 2025" url="https://www.instagram.com/p/DH2fz0qT3hB/"/>
      <PictureItem title="March 24, 2025" url="https://www.instagram.com/p/DHkwIrNTd5a/"/>
    </div>
  </div>
</template>

<style scoped>
.article-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 992px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

