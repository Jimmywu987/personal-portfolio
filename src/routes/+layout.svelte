<script>
  import Footer from "$lib/components/common/Footer.svelte";
  import Header from "$lib/components/common/Header.svelte";
  import "./styles.css";
</script>

<div class="app min-h-screen flex flex-col">
  <Header />
  <main class="flex flex-1 flex-col p-4 w-full container mx-auto box-border">
    <slot />
  </main>
  <Footer />
</div>
