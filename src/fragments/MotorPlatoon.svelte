<script lang="ts">
    import {page} from "$app/stores"
    import type {NationData} from "../types.js";
    const formations: NationData = $page.data.props.data
    import FactionUnits from "./FactionUnits.svelte";
</script>

<div>
    {#each formations.motorized.companies.platoon.AFV as afv}
        <FactionUnits afv={afv}/>
    {/each}
    <div class="bg-slate-600 w-md rounded-lg p-4">
    {#each formations.motorized.companies.platoon.Infantry as inf}
        <div>{inf.quantity} {inf.unit}</div>
    {/each}
    </div>
</div>
