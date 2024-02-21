<script lang="ts">
    import {inchesToCentimeters} from "$lib/unitconverter";
    import {scaleCoefficient} from "$lib/store";
    import Range from "../../fragments/Range.svelte";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";
    import MovementFragment from "../../fragments/statlines/MovementFragment.svelte";

    export let text: string
    export let type: string
    function sortMovementType(moveType: string) {
        const typeMap: {[key: string]: string } = {
            'a': "Amphibious",
            'w': "Wheeled",
            't': "Tracked",
            'ht': "Half-Track",
            'h': "Helicopter",
            'p': "Airmobile",
            's': "Skis",
            'x': "Towed",
        }
        return typeMap[moveType]
    }

    function terrainEffects(moveType: string, movement: number) {
        let badgoing = Math.round(movement/3)
        let rough = Math.round(movement/3)
        let swamp = Math.round(movement/4)
        let road = Math.round(movement*2)
        switch (moveType) {
            case "t":
            case "x":
                badgoing = Math.round(movement/2)
                rough = Math.round(movement/2)
                break;
            case "w":
                road = Math.round(movement*4)
            default:
                badgoing = Math.round(movement/3)
                rough = Math.round(movement/3)
        }
        return [badgoing, rough, road]
    }
    function sortMovement(move: string) {
        const regex = /(\d+)\s*([a-z]?)\s*/
        const match = move.match(regex)
        if(match) {
            const [, movement, type] = match
            const typeData = type ? sortMovementType(type) : ''
            const [badGoing, rough, road] = terrainEffects(type, Number(movement)*$scaleCoefficient)
            return [movement, typeData, badGoing, rough, road]
        } else {
            throw new Error('Missing or invalid data in Movement')
        }
    }
    function getMovement(move: string) {
        if(move) return sortMovement(move)
        else return ["0", "null"]
    }
    const [movement, movementType, badGoing, rough, road ] = getMovement(text)

    let base = 0
    $: {
        base = Number(movement) * $scaleCoefficient;
    }
</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center items-center">
    <ColumnHeading text={type}/>
    <div>{movementType}</div>

    <MovementFragment terrain="Normal" movement={base}/>
    <MovementFragment terrain="Rough" movement={Number(rough)}/>
    <MovementFragment terrain="Bad" movement={Number(badGoing)}/>
    <MovementFragment terrain="Road" movement={Number(road)}/>
</div>