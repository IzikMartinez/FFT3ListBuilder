<script lang="ts">
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";
    import {unitQuality} from "$lib/store";

    export let text: string | number | null
    export let type: string
    import "../../app.css";

    let pointSizes = [1,3,4,9,12]
    let point_cost:number[] = []
    $:{
        point_cost = pointSizes.map(value => Math.round(value*Number(text)*$unitQuality.point_mod))
    }
</script>



<div class="flex flex-col mx-0 text-center">
    <ColumnHeading text={type}/>
    <div class="mt-1 flex flex-col justify-between items-center">
            {#each point_cost as num, index}
                <div class="my-1 flex w-16 justify-between items-center">
                    <span>{pointSizes[index]}: </span>
                    <span class="text-white bg-slate-800 rounded-md p-1 w-10">{num}</span>
                </div>
            {/each}
    </div>

</div>