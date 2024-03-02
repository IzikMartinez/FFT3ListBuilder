<script lang="ts">
    import {inchesToCentimeters} from "$lib/unitconverter";
    import Range from "../../fragments/Range.svelte";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";
    import MovementFragment from "../../fragments/statlines/MovementFragment.svelte";

    export let movement: string
    export let movementTypes: string[]
    function terrainEffects(moveType: string, movement: number) {
        let badgoing = Math.round(movement/3);
        let rough = Math.round(movement/3);
        let swamp = Math.round(movement/4);
        let road = Math.round(movement*2);
        switch (moveType) {
            case "tracked":
            case "towed":
                badgoing = Math.round(movement/2);
                rough = Math.round(movement/2);
                break;
            case "wheeled":
                road = Math.round(movement*4);
                break;
            default:
                badgoing = Math.round(movement/3);
                rough = Math.round(movement/3);
                break;
        }
        return [badgoing, rough, road];
    }
    let badGoing = 0
    let rough = 0
    let road = 0
    let base = 0
    $: {
        base = Number(movement);
    }
    $: {
        [badGoing, rough, road] = terrainEffects(movementTypes[0], Number(movement)).map(value => value)
    }
</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center items-center">
    <ColumnHeading text="Move"/>
    <MovementFragment terrain="Normal" movement={base}/>
    <MovementFragment terrain="Rough" movement={Number(rough)}/>
    <MovementFragment terrain="Bad" movement={Number(badGoing)}/>
    <MovementFragment terrain="Road" movement={Number(road)}/>
    {#each movementTypes as movementType}
        <div class="flex text-white font-500 font-staatliches">{movementType}</div>
    {/each}
</div>