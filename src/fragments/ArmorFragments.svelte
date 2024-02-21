<script lang="ts">
    export let text: string
    export let value: number[]
    let he = 0; let heat = 0
    $:{
        if(value.length > 1) { he = value[0]; heat = value[1] }
        else he=value[0]
    }
</script>
<div class="my-2">
    <span class="text-white bg-slate-800 rounded-md p-1">{text}</span>
    <span>{he}</span>
    {#if value.length > 1}
        <span>{heat}</span>
    {/if}
</div>
