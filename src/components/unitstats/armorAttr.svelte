<script lang="ts">
    import {onMount} from "svelte";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";
    import ArmorFragments from "../../fragments/statlines/ArmorFragments.svelte";

    export let armor: number[]
    export let type: string

    let armorString = ["Front", "Flank", "Front H", "Flank H"]
</script>

<div class="flex flex-col mx-0 text-center">
    <ColumnHeading text={type}/>

    {#each armor as value, index}
        <div class="flex flex-col text-left mt-1">
            <ArmorFragments text={armorString[index]} value={value}/>
        </div>
    {/each}
</div>