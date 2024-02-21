<script lang="ts">
    import {onMount} from "svelte";
    import ColumnHeading from "../fragments/ColumnHeading.svelte";
    import ArmorFragments from "../fragments/ArmorFragments.svelte";

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
            return [[Number(first), firstValue], [Number(last), lastValue]]
        } else {
            console.error(armor)
            throw new Error('Missing or invalid data in Armor')
        }
    }
    function splitArmor(armor: string) {
        if(armor==='s' || !armor)
            return [[0,0], [0,0]]
        else
            return splitRegex(armor)
    }

    const [front, flank] = splitArmor(text)
</script>

<div class="flex flex-col mx-0 text-center">
    <ColumnHeading text={type}/>
    {#if text==="s"}
        <div class="mt-2">0</div>
    {:else}
        <div class="flex flex-col text-left mt-1">
            <ArmorFragments text="Front" value={front}/>
            <ArmorFragments text="Flank" value={flank}/>
        </div>
    {/if}
</div>