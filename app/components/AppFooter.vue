<template>
  <footer class="site-footer">

  </footer>
  <noscript>
    <dialog class="nojs-popup" open>
      <div class="nojs-popup__wrapper">
        <div class="nojs-popup__msg-box text--mono">
          <p class="nojs-popup__msg">It looks like you don't have JavaScript enabled! The website should still work (though with a bit less functionality).</p>
        </div>
        <form method="dialog">
          <button class="nojs-popup__dismiss">&times;</button>
        </form>
      </div>
    </dialog>
  </noscript>
</template>

<style scoped>
.site-footer {
  width: 100%;
  height: 18rem;
  background-color: var(--dark-blue);
}

.nojs-popup__msg-box {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.nojs-popup__dismiss {
  height: 3rem;
  width: 3rem;
  color: var(--off-white);
  border: 1px solid var(--off-white);
  background: none;
  border-radius: 1rem;
  font-size: 1.5rem;
}

/* The popup doesn't like having its display set */
.nojs-popup {
  width: 100%;
  background-color: var(--off-black);
  padding: 1rem;
  box-sizing: border-box;
  color: var(--off-white);
  position: fixed;
  bottom: 0;
}

.nojs-popup__wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
