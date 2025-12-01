<template>
  <div class="hero-banner">
    <h1 class="text text--hero text--serif">social impact that's <em>different</em></h1>
  </div>
  <ul class="stats-bar">
    <li class="stat">
      <h2 class="stat__number text--mono">$14,000+</h2>
      <p class="stat__title text--sans">donated</p>
    </li>
    <li class="stat">
      <h2 class="stat__number text--mono">$23,000+</h2>
      <p class="stat__title text--sans">capital under management</p>
    </li>
    <li class="stat">
      <h2 class="stat__number text--mono">450+</h2>
      <p class="stat__title text--sans">members</p>
    </li>
  </ul>

  <main class="homepage">
    <section class="about-us">
      <div class="about-us__left">
        <div class="about-us__text">
          <h2 class="text text--serif text--h2">who we are</h2>
          <p class="text text--p">The Social Impact Investment Fund is the first and only student led investment fund in Victoria managing real capital. We provide students the opportunity to pitch investment ideas to a team of committee and sponsor representatives, and employ those ideas into a tangible portfolio.</p>
          <p class="text text--p"><b>All</b> proceeds go towards our nominated charities.</p>
        </div>
        <NuxtLink class="button text--sans" to="/contact">Contact Us</NuxtLink>
      </div>
      <div class="about-us__right">
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

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 0 4rem;
  padding: 2rem;
  margin: 0;
  filter: drop-shadow(0 0 1rem);
  background-color: var(--off-white);
  flex-wrap: wrap;
  align-items: center;
  /* This hack is necessary for the blur to stay straight */
  width: calc(100% + 2rem);
  left: -1rem;
  position: relative
}

.stat {
  list-style-type: none;
  text-align: center;
  /*
    Recommendation:
      make the stat bar purposefully asymmetrical
      to disguise different stat widths
  */
}

.stat__number {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.stat__title {
  margin: 0
}

.about-us {
  padding: 0 max(4rem);
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}

.about-us__left {
  text-align: center
}

.about-us__text {
  padding-bottom: 2rem
}

.about-us__right {
  border-radius: 24px;
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

  .about-us__left {
    text-align: left;
    width: calc(50% - 2rem);
  }

  .about-us__right {

  }
}
</style>
