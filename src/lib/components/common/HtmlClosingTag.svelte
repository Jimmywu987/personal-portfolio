<script lang="ts">
  export let tag: string;
  export let attribute: string;
  export let attributeValue: string;
  export let classAttribute = "";
</script>

<span>
  <span class={"dark:text-[#7d7d7d] text-[#75140c] text-base " + classAttribute}
    >&#60;</span
  ><span class="dark:text-[#5d88b9] text-[#75140c]">{tag}</span>
  <span class="dark:text-[#a4d3f2] text-[#d22d1f]">{attribute}</span><span
    class="dark:text-white text-[#3b3b3b]">=</span
  ><span class="dark:text-[#c3927b] text-[#3a3af7] text-base lg:text-xl"
    >{attributeValue}</span
  >
  <span class="dark:text-[#7d7d7d] text-[#75140c] text-base">/&#62; </span>
</span>
