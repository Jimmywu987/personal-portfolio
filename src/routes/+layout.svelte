<script>
  import Footer from "$lib/components/common/Footer.svelte";
  import Header from "$lib/components/common/Header.svelte";

  import "./styles.css";
  let isOpen = false;
</script>

<div
  class="app min-h-screen flex flex-col dark:bg-slate-800 bg-dark-text text-light-text dark:text-dark-text relative"
>
  <Header bind:isOpen />
  <main class="flex flex-1 flex-col p-4 w-full container mx-auto box-border">
    <slot />
  </main>
  <Footer />
</div>

<style>
</style>
