<script lang="ts">
    import {scaleCoefficient, systemToggle} from "$lib/store";
    import {inchesToCentimeters} from "$lib/unitconverter.js";
    export let range_in: number
    let range = 0
    let unit = "''"
    $: {
        if($systemToggle === "Imperial") {
            range = range_in*$scaleCoefficient
            unit = "''"
        }
        else {
            range = inchesToCentimeters(range_in*$scaleCoefficient)
            unit = "cm"
        }
    }
</script>
<div class="flex w-auto text-center justify-center items-center font-alumni text-lg font-700">
    {range}{unit}
</div>
