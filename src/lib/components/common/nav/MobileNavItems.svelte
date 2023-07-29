<script lang="ts">
  import {
    drawerStore,
    type DrawerSettings,
    Drawer,
  } from "@skeletonlabs/skeleton";
  let isOpen = false;

  function trigger(): void {
    const s: DrawerSettings = {
      id: "demo",
      position: "right",
      bgDrawer: "bg-purple-900 text-white",
      bgBackdrop:
        "bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50",
      width: "w-[280px] md:w-[480px]",
      padding: "p-4",
      rounded: "rounded-xl",
    };
    drawerStore.open(s);
  }
</script>

<button
  class={`flex flex-col  burger ${isOpen && "open"}`}
  on:click={() => {
    trigger();
    isOpen = !isOpen;
  }}
>
  <div />
  <div />
  <div />
  <div />
</button>

<Drawer><div class="z-10 bg-white" /></Drawer>

<style>
  .burger {
    cursor: pointer;
  }
  .burger div {
    width: 30px;
    height: 4px;
    margin-bottom: 2px;
    background-color: black;
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
