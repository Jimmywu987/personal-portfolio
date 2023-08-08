<script lang="ts">
  export let tag: string;
  export let classAttribute = "";
</script>

<span>
  <span class={"dark:text-[#7d7d7d] text-[#75140c] text-base " + classAttribute}
    >&#60;</span
  ><span class="dark:text-[#5d88b9] text-[#75140c] text-base">{tag}</span><span
    class="dark:text-[#7d7d7d] text-[#75140c] text-base">&#62;</span
  ><slot /><span class="dark:text-[#7d7d7d] text-[#75140c] text-base"
    >&#60;/</span
  ><span class="dark:text-[#5d88b9] text-[#75140c] text-base">{tag}</span><span
    class="dark:text-[#7d7d7d] text-[#75140c] text-base">&#62;</span
  >
</span>
