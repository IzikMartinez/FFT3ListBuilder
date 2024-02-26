<script lang="ts">
    import GunAttribute from "./GunAttribute.svelte";
    import {inchesToCentimeters} from "$lib/unitconverter.js";
    import GunHeaders from "../../fragments/statlines/GunHeaders.svelte";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";

    export let range: number
    export let rof: number
    export let penetration: string[]
    export let weapon: string

    let ranges: number[] = []
    let rangeString = ["Close", "Effect", "Long"]
    const calculateRanges = (range: number) => {
        return [Math.round(range/2), range, Math.round(range*1.5)]
    }
    $: {
        ranges = calculateRanges(range)
    }
</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center ">
    <ColumnHeading text={weapon} widthBig={true}/>
    <GunHeaders/>
    <div class="flex flex-col">
        {#each ranges as range, index}
            <GunAttribute range={range} rangeBand={rangeString[index]} rof={rof} penetration={penetration}/>
        {/each}
    </div>
</div>
