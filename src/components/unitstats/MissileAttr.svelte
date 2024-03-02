<script lang="ts">
    import Range from "../../fragments/Range.svelte";
    import {scaleCoefficient} from "$lib/store";
    import ColumnHeading from "../../fragments/statlines/ColumnHeading.svelte";
    import SubColumnHeading from "../../fragments/statlines/SubColumnHeading.svelte";
    import StatText from "../../fragments/StatText.svelte";
    import {onMount} from "svelte";
    import type {MissileType} from "../../types";

    export let missile_name: string
    export let unlimited_missiles: boolean

    let missileData: MissileType[]
    let missile: MissileType
    async function fetchMissiles() {
        const response = await fetch('src/data/missiles.json');
        missileData = await response.json();
        const tempMissile = missileData.find(item => item.missile_name == missile_name)
        if(tempMissile)
            missile = tempMissile
            console.log(missile)
    }

    onMount(() => {
        fetchMissiles();
    });
    const generationStats = (gen: number): [number, string] => {
        let hit = 0
        let moveShoot = ""
        let unlim_mod = 0
        if(unlimited_missiles) unlim_mod = 1
        switch (gen) {
            case 1:
                hit = 6-unlim_mod
                moveShoot = "No"
                break;
            case 2:
                hit = 4-unlim_mod
                moveShoot = "Yes"
                break;
            default:
                hit = 3-unlim_mod
                moveShoot = "Yes"
                break;
        }
        return [hit, moveShoot]
    }

    let hit: number
    let moveShoot: string
    let unlimitedString = "No"
    $: {
        if(missile)
            [hit, moveShoot] = generationStats(missile.missile_generation)
    }
    $: {
        if(unlimited_missiles) unlimitedString = "Yes"
    }

</script>

<div class="flex flex-col mx-1 text-center">
    {#if missile}
    <ColumnHeading text={missile_name} widthBig={true}/>
    <div class="flex">
        <div class="flex flex-col">
            <SubColumnHeading text="Range"/>
            <div class="flex mt-1 text-left w-26">
                <div class="flex flex-1 w-1/3 py-1 bg-slate-800 rounded-l-md text-white font-600 items-center justify-center text-center">
                    <Range range_in={missile.missile_range[0]} /> -
                    <Range range_in={missile.missile_range[1]} />
                </div>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/5">
                <SubColumnHeading text="ROF"/>
                <StatText text={String(missile.missile_rof)}/>
            </div>
            <div>
                <SubColumnHeading text="PEN"/>
                <StatText text={String(missile.missile_penetration)}/>
            </div>
            <div class="w-1/5">
                <SubColumnHeading text="HIT"/>
                <StatText text={String(hit)}/>
            </div>
            <div class="w-1/5">
                <SubColumnHeading text="M&S"/>
                <StatText text={String(moveShoot)}/>
            </div>
            <div class="w-1/5">
                <SubColumnHeading text="Unlimited"/>
                <StatText text={unlimitedString}/>
            </div>

        </div>
    </div>
    {/if}
</div>
