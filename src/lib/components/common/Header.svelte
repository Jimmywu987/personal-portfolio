<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import Linkedin from "$lib/images/linkedin-logo.svg";
</script>

<header class="bg-white flex justify-between">
  <div class="flex items-center space-x-2">
    <a
      href="https://github.com/Jimmywu987"
      target="_blank"
      class="flex items-center justify-centerw-10 h-10"
    >
      <img src={github} alt="GitHub icon" class="w-8 h-8 object-contain" />
    </a>

    <a
      href="https://www.linkedin.com/in/jimmy-wu-11358ab9/"
      target="_blank"
      class="flex items-center justify-centerw-10 h-10"
    >
      <img src={Linkedin} alt="GitHub icon" class="w-7 h-7 object-contain" />
    </a>
  </div>
  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
      <li
        aria-current={$page.url.pathname.startsWith("/sverdle")
          ? "page"
          : undefined}
      >
        <a href="/sverdle">Sverdle</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

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

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
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
