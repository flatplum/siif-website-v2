<template>
  <div class="hero-banner">
    <h1 class="text text--h1 text--serif text--invert">social impact that's <em>different</em></h1>
  </div>
  <ul class="stats-bar">
    <li class="stat">
      <h2 class="stat__number text--serif">$14,000+</h2>
      <p class="stat__title text--sans">donated</p>
    </li>
    <li class="stat">
      <h2 class="stat__number text--serif">$23,000+</h2>
      <p class="stat__title text--sans">capital under management</p>
    </li>
    <li class="stat">
      <h2 class="stat__number text--serif">450+</h2>
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
    <!-- I'm really not a fan of this section's design! -->
    <section class="charities">
      <div class="charities__banner">
        <h2 class="text text--serif text--h2 text--invert">our charities</h2>
        <p class="text text--p text--invert">SIIF donates to Save The Children, Pets Of The Homeless, and other charities you know.</p>
        <NuxtLink class="button button--invert text--sans" to="/contact">Explore</NuxtLink>
      </div>
    </section>
    <section class="sponsors">
      <h2 class="text text--serif text--h2">our sponsors</h2>
      <div class="sponsors__container">
        <NuxtLink class="sponsors__icon">
          <img class="sponsors__icon-img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/bybit.png">
        </NuxtLink>
        <NuxtLink class="sponsors__icon">
          <img class="sponsors__icon-img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/ey.png">
        </NuxtLink>
        <NuxtLink class="sponsors__icon">
          <img class="sponsors__icon-img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/jadig.png">
        </NuxtLink>
        <NuxtLink class="sponsors__icon">
          <img class="sponsors__icon-img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/rivercapital.png">
        </NuxtLink>
      </div>
    </section>
    <section class="community">
      <h2 class="text text--serif text--h2">join our community!</h2>
      <div class="community__container">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus1.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus2.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus3.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus4.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus5.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus6.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus7.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus8.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus9.jpg">
        <img class="community__img" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/joinus10.jpg">
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
  justify-content: center;
  padding: 4rem;
  box-sizing: border-box;
  text-align: center;
}

.hero-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover
}

.homepage {
  /* padding: 4rem 0; */
}

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 2rem 4rem;
  padding: 2rem 4rem;
  margin: 0;
  filter: drop-shadow(0 0 1rem);
  background-color: var(--off-white);
  flex-wrap: wrap;
  align-items: center;
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
  padding: 4rem max(2rem, 5%) 0;
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
  min-height: 24rem;
  object-fit: cover;
  border-radius: 2rem;
}

.charities {
  padding: 2rem max(2rem, 5%) 0;
}

.charities__banner {
  width: 100%;
  height: 32rem;
  background-image: url(https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/assets/placeholders/charity.webp);
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  background-position: 50% 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  padding: 4rem;
  box-sizing: border-box;
  text-align: center;
}

.sponsors {
  text-align: center;
  padding: 2rem max(4rem, 5%) 0;
}

.sponsors__container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 8rem;
  justify-content: space-between;
  margin-top: 2rem
}

.sponsors__icon {
  flex-grow: 1;
}

.sponsors__icon-img {
  height: 8rem;
}

.community {
  text-align: center;
  padding: 4rem max(2rem, 5%) 0;
}

.community__container {
  columns: 12rem 3;
  margin-top: 2rem
}

.community__img {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
}

@media (min-width: 992px) {
  .about-us {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .about-us__left {
    text-align: left;
    width: calc(50% - 1rem);
  }

  .about-us__right {
    width: calc(50% - 1rem);
  }
  
  .sponsors__container {
    justify-content: center;
  }

  .sponsors__icon {
    flex-grow: 0
  }
}
</style>
