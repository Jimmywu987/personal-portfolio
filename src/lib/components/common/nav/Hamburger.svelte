<script lang="ts">
  export let isOpen: boolean;
</script>

<div
  class={`flex flex-col lg:hidden burger ${isOpen && "open"}`}
  on:click={() => {
    isOpen = !isOpen;
  }}
>
  <div />
  <div />
  <div />
  <div />
</div>

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
