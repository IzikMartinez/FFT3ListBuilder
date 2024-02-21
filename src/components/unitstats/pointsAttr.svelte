<script lang="ts">
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";

    export let text: string | number | null
    export let type: string
    import "../../app.css";

</script>



<div class="flex flex-col mx-0 text-center">
    <ColumnHeading text={type}/>
    <div class="mt-1 flex flex-col justify-between items-center">
            {#each [1,2,3,4,5,6] as num}
                <div class="my-1 flex w-16 justify-between items-center">
                    <span>{num}: </span>
                    <span class="text-white bg-slate-800 rounded-md p-1 w-10">{Number(text)*num}</span>
                </div>
            {/each}
    </div>

</div>