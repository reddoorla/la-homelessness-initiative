<script lang="ts">
  import type { Snippet } from "svelte";
  import { bgColor } from "$lib/stores/colors";
  import { activeFrame } from "$lib/stores/activeFrame";

  interface Props {
    horizontal?: boolean;
    frame: number;
    class?: string;
    children?: Snippet;
  }
  let { horizontal = false, frame, class: klass = "", children }: Props = $props();

  const axis = $derived(horizontal ? "x" : "y");
</script>

<div
  class="panel w-screen h-screen absolute transition-all duration-1000 top-0 left-0 bg-{$bgColor} {klass} {frame >
  $activeFrame
    ? 'translate-' + axis + '-full'
    : ''} {frame < $activeFrame ? '-translate-' + axis + '-full' : ''}"
>
  {@render children?.()}
</div>
