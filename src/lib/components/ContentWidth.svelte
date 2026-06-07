<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet;
    [key: string]: unknown;
  }

  let { ...props }: Props = $props();
</script>

<div
  class="max-w-[1220px] xl:mx-auto mx-[4%] {props.class ||
    'flex flex-col items-center justify-center my-16 relative'}"
>
  {@render props.children?.()}
</div>
