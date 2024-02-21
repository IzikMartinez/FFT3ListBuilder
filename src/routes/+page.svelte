<script lang="ts">
    import {scaleCoefficient, systemToggle} from "$lib/store";
    import Unitcard from "../components/unitstats/Unitcard.svelte";
    import type {TankType} from "../types";
    let value = ""
    let era = ""

  export let data
  let tankData = data.units.data
  let tanks = [] as TankType[]

  function handleInput(event: InputEvent) {
      const target = event.target as HTMLInputElement
      value = target.value
      tanks = tankData.filter(item => item.Name.includes(value))
  }
  function handleEraInput(event: InputEvent) {
      const target = event.target as HTMLInputElement
      era = target.value
      if(era === "")
          tanks = tankData
      if(tanks.length > 0)
          tanks = tanks.filter(item => String(item.Period).includes(era))
      else
          tanks = tankData.filter(item => String(item.Period).includes(era))
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