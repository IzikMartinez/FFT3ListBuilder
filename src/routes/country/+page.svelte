<script lang="ts">
    import Faction from "../../components/Faction.svelte";
    import {writable, readonly} from "svelte/store";
    import type {PageData} from "./$types";
    import FactionUnits from "../../fragments/FactionUnits.svelte";
    import MotorPlatoon from "../../fragments/MotorPlatoon.svelte";

    let country = "East Germany"
    export let data: PageData
    const formations = data.props.data
    function handleCountryChange(event: Event) {
        const target = event.target as HTMLSelectElement
        country = target.value
    }

</script>

<select bind:value={country} on:change={handleCountryChange}>
    <option value="">Select a Country</option>
    <option value="Soviet">Soviet</option>
    <option value="East Germany">East Germany</option>
</select>
<Faction country={country}></Faction>
<div>{formations.motorized.title}</div>
<MotorPlatoon/>
<MotorPlatoon/>
<MotorPlatoon/>
