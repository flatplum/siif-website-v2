<template>
  <div class="hero-banner">
    <h1 class="text text--hero text--serif">social impact that's <em>different</em></h1>
  </div>

  <main class="homepage">
    <section class="about-us">
      <div class="about-us__col">
        <h2 class="text text--serif text--h2">who we are</h2>
        <p class="text text--p">The Social Impact Investment Fund is the first and only student led investment fund in Victoria managing real capital. We provide students the opportunity to pitch investment ideas to a team of committee and sponsor representatives, and employ those ideas into a tangible portfolio.</p>
        <p class="text text--p"><b>All</b> proceeds go towards our nominated charities.</p>
      </div>
      <div class="about-us__col">
        <img class="about-us__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/about-us.jpg">
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  height: 32rem;
  background-image: url(https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/committee-hero.jpg);
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  background-position: 50% 30%;
  display: flex;
  align-items: center;
  justify-content: center
}

.hero-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover
}

.homepage {
  padding: 4rem 0;
}

.about-us {
  padding: 0 max(4rem);
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

.about-us__col {
  overflow: hidden;
  border-radius: 24px;
  text-align: center
}

.about-us__img {
  width: 100%;
  border-radius: 24px;
}

@media (min-width: 992px) {
  .about-us {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .about-us__col {
    text-align: left;
    width: calc(50% - 2rem);
  }
}
</style>
