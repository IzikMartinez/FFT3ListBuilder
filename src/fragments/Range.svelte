<script lang="ts">
    import {systemToggle} from "$lib/store";
    import {inchesToCentimeters} from "$lib/unitconverter.js";
    export let range_in: number
    let range = 0
    let unit = "''"
    $: {
        if($systemToggle === "Imperial") {
            range = range_in
            unit = "''"
        }
        else {
            range = inchesToCentimeters(range_in)
            unit = "cm"
        }
    }
</script>
<div class="flex w-auto text-center justify-center items-center font-alumni text-lg font-700">
    {range}{unit}
</div>
