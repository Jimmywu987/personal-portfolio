<script lang="ts">
  import { page } from "$app/stores";

  import ThemeToggle from "$lib/components/common/nav/ThemeToggle.svelte";

  import NavLinkItem from "$lib/components/common/nav/DesktopNavLinkItem.svelte";

  export let checked: boolean;
</script>

<div class="hidden lg:flex items-center space-x-1">
  <ul
    class="relative p-0 m-0 flex items-center justify-center h-12 bg-contain list-none space-x-2"
  >
    <NavLinkItem NavText="HOME" path="/" />
    <NavLinkItem NavText="ABOUT" path="/about" />
    <NavLinkItem NavText="EXPERIENCE" path="/experience" />
    <NavLinkItem NavText="PROJECTS" path="/projects" />
    <NavLinkItem NavText="GET IN TOUCH" path="/contact" />
    <li aria-current={$page.url.pathname.startsWith("/sverdle") && "page"}>
      <a href="/sverdle">Sverdle</a>
    </li>
  </ul>
  <ThemeToggle bind:checked />
</div>

<style>
  li {
    position: relative;
    height: 80%;
  }

  div a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
