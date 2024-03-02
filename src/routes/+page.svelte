<script lang="ts">
    import {scaleCoefficient, systemToggle, unitQuality} from "$lib/store";
    import Unitcard from "../components/unitstats/Unitcard.svelte";
    import type {UnitQuality, Vehicle} from "../types";
    import { onMount } from 'svelte'; // import onMount
    import Faction from "../components/Faction.svelte";
    let value = ""
    let era = ""
    let selectedOption = "average"
    let qualityData: UnitQuality[]; // declare variable to hold quality data


    // fetchQuality function
    async function fetchQuality() {
        const response = await fetch('src/data/quality.json');
         qualityData = await response.json();
    }

    onMount(() => {
        fetchQuality();
    });

    export let data
    let tankData = data.units.data.filter(unit => unit.era.start_era.match(/^8\d$/) || unit.era.end_era.match(/^[8,9,0,1]\d$/))
    let tanks = [] as Vehicle[]

    const options = ["poor", "marginal", "fair", "average", "good", "excellent", "elite"];

    function handleInput(event: InputEvent) {
        const target = event.target as HTMLInputElement
        value = target.value.toUpperCase()
        tanks = tankData.filter(item => item.Name.includes(value))
    }

    function handleEraInput(event: InputEvent) {
        const target = event.target as HTMLInputElement
        era = target.value
        if(era === "")
            tanks = tankData
        if(tanks.length > 0)
            tanks = tanks.filter(item => String(item.era.start_era).includes(era))
        else
            tanks = tankData.filter(item => String(item.era.start_era).includes(era))
    }

    function handleSelectChange(event: InputEvent) {
        const target = event.target as HTMLSelectElement
        selectedOption = target.value
        unitQuality.set(qualityData.find(item => item.experience === target.value)!)
    }

    function handleScaleClick() {
        if($scaleCoefficient === 2) scaleCoefficient.set(1)
        else scaleCoefficient.set(2)
    }

    function handleSystemClick() {
       if($systemToggle === "Imperial") systemToggle.update(c => c = "Metric")
       else systemToggle.update(c => c = "Imperial")
    }
</script>
<input type="text" bind:value={value} on:input={handleInput} placeholder="Search Unit" />
<input type="text" on:input={handleEraInput} placeholder="Search Era" bind:value={era}  />
<select on:change={handleSelectChange} bind:value={selectedOption}>
    {#each options as option}
        <option selected={option === 'average'}>{option}</option>
    {/each}
</select>
<button on:click={()=>handleScaleClick()}>toggle scale</button>
<button on:click={() =>handleSystemClick()}>{$systemToggle}</button>
{#if tanks.length === 0 && tankData.length > 0}
    <div class="w-screen h-screen flex flex-col">
        {#each tankData as item}
            <Unitcard items={item} />
        {/each}
    </div>
{:else if tanks.length > 0}
    <div class="w-screen h-screen flex flex-col">
        {#each tanks as item}
            <Unitcard items={item} />
        {/each}
    </div>
{:else}
    <p>Loading...</p>
{/if}