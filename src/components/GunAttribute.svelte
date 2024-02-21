<script lang="ts">
    import {inchesToCentimeters} from "$lib/unitconverter.js";
    import GunHeader from "../fragments/GunHeader.svelte";
    import {scaleCoefficient} from "$lib/store";
    import Range from "../fragments/Range.svelte";
    import GunRows from "../fragments/GunRows.svelte";

    let range_cm = 0
    let scaledRange = 0
    export let range: number
    export let text: string
    export let rof = 0
    export let penetration: string

    const height = '6'
    function getHitMod(hitRange: string) {
        const hitMap: {[key: string]: string} = {
            'Close': '3+',
            'Effective': '4+',
            'Long': '5+'
        }
        return hitMap[hitRange]
    }


    function getPenMod(rangeType: string, pen: number) {
        const penMap: {[key: string]: number} = {
            'Close': pen+2,
            'Effective': pen,
            'Long': pen-2
        }
        return penMap[rangeType]
    }
    // check if penetration has a slash
    function isSlashed(pen: string) {
        let slashed = false
        try {
            slashed = String(pen).includes('/')
        } catch (error) {
            console.error(`Error checking if ${pen} has a slash:\nMatch:${error}`)
        } finally {
            return slashed
        }
    }
    function splitPenetration(pen: string) {
        return String(pen).split('\/')
    }
    function getPenetration(pen: string) {
        if(pen)
            if(!isSlashed(pen)) return pen
            else {
                const [norm, heat] = splitPenetration(pen)
                return [getPenMod(text, Number(norm)), heat]
            }
        else return ["",""]
    }
    $: {
        scaledRange = range * $scaleCoefficient
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
        <GunRows text={getHitMod(text)}/>
    </div>
    {#if getPenetration(penetration).length > 1}
        {#each getPenetration(penetration) as pen}
            <div class="w-1/5 {height} ">
                <GunRows text={String(pen)}/>
            </div>
        {/each}
    {:else }
        <div class="w-1/5 {height} ">
            <GunRows text={String(getPenMod(text, Number(penetration)))}/>
        </div>
    {/if}
    <!--

        -->
</div>