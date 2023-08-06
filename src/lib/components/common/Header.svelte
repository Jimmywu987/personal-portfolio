<script lang="ts">
  import GithubIcon from "$lib/components/icons/Github.svelte";
  import LinkedInIcon from "$lib/components/icons/LinkedIn.svelte";
  import ResumeIcon from "$lib/components/icons/Resume.svelte";

  import DesktopNavItems from "$lib/components/common/nav/DesktopNavItems.svelte";
  import Hamburger from "$lib/components/common/nav/Hamburger.svelte";
  import MobileNavItems from "./nav/MobileNavItems.svelte";

  export let isOpen: boolean;

  let checked = true;
</script>

<header
  class="bg-transparent flex justify-between shadow-lg px-3 dark:text-white h-12"
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
    <DesktopNavItems bind:checked />
    <MobileNavItems bind:checked />
  </nav>
</header>

<style>
</style>
