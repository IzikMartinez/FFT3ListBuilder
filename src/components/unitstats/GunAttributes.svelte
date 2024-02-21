<script lang="ts">
    import GunAttribute from "./GunAttribute.svelte";
    import {inchesToCentimeters} from "$lib/unitconverter.js";
    import GunHeaders from "../../fragments/statlines/GunHeaders.svelte";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";

    export let range = 0
    export let rof = 0
    export let penetration: string
    export let weapon: string
    function splitWeapon(weapon: string) {
        let outWeapon = weapon
        try {
            const splitString = weapon.split('(')
            if(splitString.length > 1) outWeapon = splitString[0]
        } catch (error) {
            console.error(`Error splitting weapon string: ${error}`)
        } finally {
            return outWeapon
        }
    }

    let close_range = 0; let close_range_cm = 0
    let effective_range = 0;     let effective_range_cm = 0
    let long_range = 0;  let long_range_cm = 0
    const ranges = (range: number) => {
        return [Math.round(range/2), range, Math.round(range*1.5)]
    }
    $: {
        [close_range, effective_range, long_range] = ranges(range)
    }
</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center ">
    <ColumnHeading text={weapon} widthBig={true}/>
    <GunHeaders/>
    <div class="flex flex-col">
        <GunAttribute range={close_range} text="Close" rof={rof} penetration={penetration}/>
        <GunAttribute range={effective_range} text="Effective" rof={rof} penetration={penetration}/>
        <GunAttribute range={long_range} text="Long" rof={rof} penetration={penetration}/>
    </div>
</div>
