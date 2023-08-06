<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";

  export let checked: boolean;
</script>

<div
  class="dark:border-dark-text border-light-text border rounded-2xl cursor-pointer self-center"
>
  <LightSwitch
    class="dark:fill-dark-text fill-light-text "
    on:click={() => {
      checked = !checked;
    }}
  />
</div>
