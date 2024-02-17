<script lang="ts">
    import {onMount} from "svelte";

    export let text: string
    export let type: string

    function chemArmor(mod: string) {
        const armorMap: { [key: string]: number } = {
            'A':1,
            'B':2,
            'C':3,
            'D':4,
            'E':5,
            'F':6
        }
        return armorMap[mod]
    }
    function splitRegex(armor: string) {
        const pattern = /(\d+)\s*([-A-F]?)\s*(\d+)/i
        const match = armor.match(pattern)
        if(match) {
            const [, first, middle, last] = match
            const middleValue = middle !== '-' ? chemArmor(middle) : 0
            const firstValue = Number(first) + middleValue
            const lastValue = Number(last) + middleValue
            return [first, firstValue, last, lastValue]
        } else {
            console.error(armor)
            throw new Error('Missing or invalid data in Armor')
        }
    }
    function splitArmor(armor: string) {
        if(armor==='s')
            return 'Soft'
        else if (armor)
            return splitRegex(armor)
        else return ""
    }
    const [front, front_ce, flank, flank_ce] = splitArmor(text)
</script>

<style>

</style>

<div class="flex flex-col mx-0 text-center">
    {#if String(front) === "S"}
        <div class="flex bg-red-700 text-white text-center items-center justify-center w-32 h-8 font-600">{type}</div>
        <div class="mt-2">0</div>
    {:else}
        <div class="flex bg-red-700 text-white text-center items-center justify-center w-32 h-8 font-600">{type}</div>
        <div class="flex flex-col text-left mt-1">
            <div class="my-2"><span class="text-white bg-slate-800 rounded-md p-1">Front KE:</span> <span>{front}</span></div>
            <div class="my-2"><span class="text-white bg-slate-800 rounded-md p-1">Front CE:</span> <span>{front_ce}</span></div>
            <div class="my-2"><span class="text-white bg-slate-800 rounded-md p-1">Flank KE:</span> {flank}</div>
            <div class="my-2"><span class="text-white bg-slate-800 rounded-md p-1">Flank CE:</span> {flank_ce}</div>
        </div>

    {/if}
</div>