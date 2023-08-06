<script>
  import HtmlTag from "$lib/components/common/HtmlTag.svelte";
  import HtmlClosingTag from "../common/HtmlClosingTag.svelte";
</script>

<HtmlTag tag="head">
  <span class="h-[80vh] flex flex-col justify-center items-center space-y-2">
    <h1 class="text-left flex flex-col justify-center text-xl">
      <HtmlTag tag="title" classAttribute="text-center"
        >Hi! I'm Jimmy, a Software Developer.</HtmlTag
      >
    </h1>
    <p class=" w-full lg:w-5/6">
      <HtmlClosingTag
        tag="meta"
        attribute="description"
        attributeValue={`" 
        I am passionate in computer programming. Having gained experiences as a Full Stack Developer from Freehunter and WeMakeApp and with the motivation of continuous self-learning, I am ready to take on more challenges to dive deeper into the tech industry.
        "`}
        classAttribute="lg:ml-10 "
      />
    </p>
  </span>
</HtmlTag>
