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
    --size: 5px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-bottom: var(--size) solid var(--color-theme-1);
    /* animation: bounce-bottom 3s infinite; */
  }

  /* li[aria-current="page"]::after {
    --size: 5px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
    animation: bounce-top 3s infinite;
  }

  @keyframes bounce-top {
    0%,
    100% {
      transform: translateY(-30%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  @keyframes bounce-bottom {
    0%,
    100% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(-30%);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  } */

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
