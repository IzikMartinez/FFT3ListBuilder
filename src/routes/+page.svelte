<script lang="ts">
  import {onMount} from "svelte";
  import Unitcard from "../components/Unitcard.svelte";
  import type {TankData} from "../types";
  let value = ""
  let era = ""
  let jsonData = [] as TankData[]
  let tanks = [] as TankData[]
  async function fetchData() {
    try {
      const response = await fetch('src/data/Soviets.json')
      jsonData = await response.json()
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }
  onMount(fetchData)

  function handleInput(event: InputEvent) {
      const target = event.target as HTMLInputElement
      value = target.value
      tanks = jsonData.filter(item => item.Name.includes(value))
  }
  function handleEraInput(event: InputEvent) {
      const target = event.target as HTMLInputElement
      era = target.value
      if(era === "")
          tanks = jsonData
      if(tanks.length > 0)
          tanks = tanks.filter(item => String(item.Period).includes(era))
      else
          tanks = jsonData.filter(item => String(item.Period).includes(era))
  }
</script>
<input type="text" bind:value={value} on:input={handleInput} placeholder="Search Unit" />
<input type="text" on:input={handleEraInput} placeholder="Search Era" bind:value={era}  />
{#if tanks.length === 0 && jsonData.length > 0}
    <div class="w-screen h-screen flex flex-col">
        {#each jsonData as item}
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