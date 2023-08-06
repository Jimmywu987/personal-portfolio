<script lang="ts">
  import { page } from "$app/stores";

  export let path: string;
  export let NavText: string;
  export let onClose: () => void;
</script>

<li aria-current={$page.url.pathname === path && "page"} on:click={onClose}>
  <a
    href={path}
    class="hover:no-underline dark:text-dark-text text-light-text font-semibold"
    >{NavText}</a
  >
</li>

<style>
</style>
