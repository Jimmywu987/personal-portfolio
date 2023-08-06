<script lang="ts">
  import { page } from "$app/stores";
  import {
    drawerStore,
    type DrawerSettings,
    Drawer,
  } from "@skeletonlabs/skeleton";
  import MobileNavLinkItem from "$lib/components/common/nav/MobileNavLinkItem.svelte";
  import ThemeToggle from "$lib/components/common/nav/ThemeToggle.svelte";
  export let checked: boolean;

  let isOpen = false;

  function trigger(): void {
    const s: DrawerSettings = {
      id: "demo",
      position: "right",
      bgDrawer: "dark:bg-light-text text-dark-text bg-dark-text",
      bgBackdrop: "bg-gray-800/80",
      width: "w-[280px] md:w-[380px]",
      padding: "p-4",
      rounded: "rounded-xl",
    };
    drawerStore.open(s);
  }
  const handleOnOpen = () => {
    trigger();
    isOpen = true;
  };
  const handleOnClose = () => {
    drawerStore.close();
    isOpen = false;
  };
</script>

<button
  class={`flex lg:hidden flex-col burger ${isOpen && "open"} `}
  on:click={handleOnOpen}
>
  <div class="dark:bg-white bg-gray-800" />
  <div class="dark:bg-white bg-gray-800" />
  <div class="dark:bg-white bg-gray-800" />
  <div class="dark:bg-white bg-gray-800" />
</button>

<Drawer
  on:backdrop={() => {
    isOpen = false;
  }}
  ><div class="z-10 flex flex-col justify-between h-full p-4 m-0">
    <ul class="  flex flex-col items-end space-y-3">
      <MobileNavLinkItem NavText="HOME" path="/" onClose={handleOnClose} />
      <MobileNavLinkItem
        NavText="ABOUT"
        path="/about"
        onClose={handleOnClose}
      />
      <MobileNavLinkItem
        NavText="EXPERIENCE"
        path="/experience"
        onClose={handleOnClose}
      />
      <MobileNavLinkItem
        NavText="PROJECTS"
        path="/projects"
        onClose={handleOnClose}
      />
      <MobileNavLinkItem
        NavText="GET IN TOUCH"
        path="/contact"
        onClose={handleOnClose}
      />
      <li aria-current={$page.url.pathname.startsWith("/sverdle") && "page"}>
        <a href="/sverdle">Sverdle</a>
      </li>
    </ul>
    <ThemeToggle bind:checked />
  </div></Drawer
>

<style>
  .burger {
    cursor: pointer;
  }
  .burger div {
    width: 30px;
    height: 3px;
    margin-bottom: 3px;
    transition: all ease-in-out 0.3s;
    position: relative;
    top: 0;
  }

  .burger.open div:nth-child(2),
  .burger.open div:nth-child(3) {
    width: 0;
    opacity: 1;
  }

  .burger.open div:nth-child(1) {
    transform: rotate(45deg);
    top: 9px;
  }

  .burger.open div:nth-child(4) {
    transform: rotate(-45deg);
    top: -9px;
  }
</style>
