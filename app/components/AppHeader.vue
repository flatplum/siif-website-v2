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
  </header>
</template>

<style scoped>
.site-nav {
  height: 6rem;
  background: var(--off-white);
  padding: 0 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.site-nav__logo {
  height: 4rem
}

.site-nav__links {
  display: flex;
  gap: 2rem
}
</style>
