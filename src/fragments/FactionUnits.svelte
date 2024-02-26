<script lang="ts">
    import {page} from "$app/stores"
    import type {NationData} from "../types";
    const formations: NationData = $page.data.props.data
    type UnitQuantity = { unit: string; quantity: number };
    export let afv: UnitQuantity
    let APCs  = formations.weapons.APC || []
    let IFVs = formations.weapons.IFV || []
    let tanks  = formations.weapons.tank || []
    let CAPCs  = formations.weapons.CAPC || []
    let CTs = formations.weapons.CT || []
</script>
<div class="flex gap-2 w-full h-10 bg-slate-4 w-md rounded-lg p-4">
    {afv.quantity}
{#if afv.unit.toUpperCase() === 'APC'}
    {#each APCs as apc}
        <div class="flex mx-1">{apc}</div>
    {/each}
{:else if afv.unit.toUpperCase() === 'IFV'}
    {#each IFVs as ifv}
         {ifv}
    {/each}
{:else if afv.unit.toUpperCase() === 'TANK'}
    {#each tanks as tank}
         {tank}
    {/each}
{:else if afv.unit.toUpperCase() === 'CAPC'}
    {#each CAPCs as capc}
         {capc}
    {/each}
{:else if afv.unit.toUpperCase() === 'CT'}
    {#each CTs as ct}
        {ct}
    {/each}
{/if}
</div>