<template>
  <header class="site-nav">
    <NuxtLink href="/">
      <img class="site-nav__logo" src="https://lshtgdpdskhqqxdcwpjo.supabase.co/storage/v1/object/public/photos/SiiF-Logo-Backgroundless-Navy-2.png" alt="SiiF Logo">
    </NuxtLink>
    <ul class="site-nav__links">
      <li class="text"><NuxtLink href="/committee">committee</NuxtLink></li>
      <li class="text"><NuxtLink href="/publications">publications</NuxtLink></li>
      <li class="text"><NuxtLink href="/events">events</NuxtLink></li>
      <li class="text"><NuxtLink href="/contact">contact</NuxtLink></li>
    </ul>
    <a class="site-nav__hamburger text--mono" href="#site-overlay">≡</a>
  </header>
</template>

<style scoped>
.site-nav {
  height: 6rem;
  background: var(--off-white);
  max-width: 108rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.site-nav__logo {
  height: 4rem
}

.site-nav__links {
  display: none
}

.site-nav__hamburger {
  font-size: 4rem
}
@media (min-width: 992px) {
  .site-nav__links {
    display: flex;
    gap: 2rem
  }

  .site-nav__hamburger {
    display: none
  }
}
</style>
