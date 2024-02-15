<script lang="ts">
  import {onMount} from "svelte";
  import Unitcard from "./unitcard.svelte";
  import type {TankData} from "../types";
  let value = "Search"
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
</script>
<input type="text" bind:value on:input={handleInput} />
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