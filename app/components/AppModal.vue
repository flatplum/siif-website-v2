<template>
  <dialog class="site-overlay" id="site-overlay">
    <div class="site-overlay__window"></div>
    <nav class="site-overlay__body">
      <a class="site-overlay__link text--sans" href="/committee">committee</a>
      <a class="site-overlay__link text--sans" href="/publications#">publications</a>
      <a class="site-overlay__link text--sans" href="/events#">events</a>
      <a class="site-overlay__link text--sans" href="/contact#">contact</a>
    </nav>
  </dialog>
</template>

<style scoped>
.site-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  flex-direction: column;
  pointer-events: none
}

.site-overlay:target {
  display: flex 
}

.site-overlay__window {
  height: 6rem;
  background: none;
}

.site-overlay__body {
  background-color: var(--off-white);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* Should really define a grey variable */
  border-top: 2px solid grey;
  pointer-events: auto
}

.site-overlay__link {
  padding: 1rem;
}
</style>
