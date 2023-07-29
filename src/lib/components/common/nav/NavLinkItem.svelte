<script lang="ts">
  import { page } from "$app/stores";

  export let path: string;
  export let NavText: string;
</script>

<li aria-current={$page.url.pathname === path && "page"} class="relative h-5/6">
  <a href={path}>{NavText}</a>
</li>

<style>
  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  li a {
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
