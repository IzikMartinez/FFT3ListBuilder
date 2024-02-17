<script lang="ts">
    import {inchesToCentimeters} from "$lib/unitconverter";

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
    function sortMovement(move: string) {
        const regex = /(\d+)\s*([a-z]?)\s*/
        const match = move.match(regex)
        if(match) {
            const [, movement, type] = match
            const typeData = type ? sortMovementType(type) : ''
            return [movement, typeData]
        } else {
            throw new Error('Missing or invalid data in Movement')
        }
    }
    function getMovement(move: string) {
        if(move) return sortMovement(move)
        else return ["0", "null"]
    }
    const [movement, movementType] = getMovement(text)
    let centimeters = 0
    $: {
        centimeters = inchesToCentimeters(movement)
    }
</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center">
    <div class="flex bg-red-700 text-white text-center items-center justify-center w-32 h-8 font-600">{type}</div>
    <div class="mt-2">{movement}''/{centimeters}cm</div>
    <div>{movementType}</div>
</div>