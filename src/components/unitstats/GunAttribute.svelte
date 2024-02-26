<script lang="ts">
    import {inchesToCentimeters} from "$lib/unitconverter.js";
    import GunHeader from "../../fragments/statlines/GunHeader.svelte";
    import {scaleCoefficient} from "$lib/store";
    import Range from "../../fragments/Range.svelte";
    import GunRows from "../../fragments/statlines/GunRows.svelte";

    let range_cm = 0
    let scaledRange = 0
    export let range: number
    export let rangeBand: string
    export let rof = 0
    export let penetration: string[]

    const height = '6'
    function getHitMod(hitRange: string) {
        const hitMap: {[key: string]: string} = {
            'Close': '3+',
            'Effect': '4+',
            'Long': '5+'
        }
        return hitMap[hitRange]
    }

    let calculatedPen: string[] = []
    function getPenMod(rangeType: string, pen: number) {
        const penMap: {[key: string]: number} = {
            'Close': pen+2,
            'Effect': pen,
            'Long': pen-2
        }
        return String(penMap[rangeType])
    }
    $: {
        scaledRange = range * $scaleCoefficient
    }
    $:{
        calculatedPen.push(getPenMod(rangeBand, Number(penetration[0])))
    }
    $:{
        if(penetration[1]) calculatedPen.push(penetration[1])
    }
</script>

<div class="flex mx-1 text-center">
    <div class="flex w-1/5 {height} ">
        <div class="flex-1 w-1/3 mt-1 py-1 bg-slate-800 rounded-l-md text-white font-600 items-center justify-center text-center">
            <Range range_in={scaledRange} />
        </div>
    </div>
    <div class="w-1/5 {height} ">
        <GunRows text={String(rof)}/>
    </div>
    <div class="w-1/5 {height}">
        <GunRows text={getHitMod(rangeBand)}/>
    </div>
    {#each calculatedPen as pen}
        <div class="w-1/5 {height}">
            <GunRows text={pen}/>
        </div>
    {/each}
    <!--

        -->
</div>