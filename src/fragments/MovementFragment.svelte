<script lang="ts">
    import Range from "./Range.svelte";
    export let terrain: string
    export let movement: number
</script>
<div class="flex w-2/3 my-1 justify-center items-center">
    <span class="flex-1 text-white bg-slate-800 rounded-l-md p-1 text-left font-staatliches">{terrain}:</span>
    <div class="text-black font-400 font-staatliches bg-green-300 rounded-r-md py-1 pr-1 ml-1 w-6">
    <Range range_in={movement} />
    </div>
</div>
