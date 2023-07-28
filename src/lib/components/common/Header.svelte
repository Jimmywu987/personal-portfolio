<script lang="ts">
  import { page } from "$app/stores";
  let checked = false;
  import GithubIcon from "$lib/components/icons/Github.svelte";
  import LinkedInIcon from "$lib/components/icons/LinkedIn.svelte";
  import ResumeIcon from "$lib/components/icons/Resume.svelte";
  import ThemeToggle from "$lib/components/common/ThemeToggle.svelte";
</script>

<header
  class="bg-transparent flex justify-between shadow-lg px-2 dark:text-white"
>
  <div class="flex items-center space-x-2">
    <a
      href="https://github.com/Jimmywu987"
      target="_blank"
      class="flex items-center justify-center w-8 h-8"
    >
      <GithubIcon bind:checked />
    </a>
    <a
      href="https://www.linkedin.com/in/jimmy-wu-11358ab9/"
      target="_blank"
      class="flex items-center justify-center w-8 h-8"
    >
      <LinkedInIcon bind:checked />
    </a>

    <a
      href="/Jimmy-CV.pdf"
      class="flex items-center justify-center w-8 h-7"
      download
    >
      <ResumeIcon bind:checked />
    </a>
  </div>
  <nav class="flex items-center">
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">HOME</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">ABOUT</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/experience" ? "page" : undefined}
      >
        <a href="/experience">EXPERIENCE</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/projects" ? "page" : undefined}
      >
        <a href="/projects">PROJECTS</a>
      </li>
      <li aria-current={$page.url.pathname === "/contact" ? "page" : undefined}>
        <a href="/contact">GET IN TOUCH</a>
      </li>
      <li
        aria-current={$page.url.pathname.startsWith("/sverdle")
          ? "page"
          : undefined}
      >
        <a href="/sverdle">Sverdle</a>
      </li>
    </ul>
    <ThemeToggle bind:checked />
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
    height: 80%;
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
