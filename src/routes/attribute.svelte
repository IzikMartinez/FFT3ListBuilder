<script lang="ts">
    export let text: string | number | null
    export let type: string
    import "../app.css";

</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center">
    <div class="flex bg-red-800 text-white text-center items-center justify-center w-32 h-8 font-600">{type}</div>
    {#if text}
        <div class="mt-2">{text}</div>
    {:else }
        <div>-</div>
    {/if}


</div>