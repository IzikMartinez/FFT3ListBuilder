<script lang="ts">
    import type {TankType} from "../types";
    import Attribute from "./attribute.svelte";
    import MovementAttr from "./movementAttr.svelte"
    import PointsAttr from "./pointsAttr.svelte"
    import ArmorAttr from "./armorAttr.svelte"
    import UnitName from "../fragments/UnitName.svelte";
    import GunAttributes from "./GunAttributes.svelte";
    import MissileAttr from "./MissileAttr.svelte";

    export let items: TankType
    let gunName = ""; let missileName = ""
    $:{
        [gunName, missileName] = items.Weapons
    }
</script>

<div class="flex flex-col w-3xl h-lg">
    <UnitName name={items.Name} era={items.Period} />
    <div class="flex flex-row w-fill h-xs mb-4 rounded-b-2xl" bg-gradient="to-t from-slate-400">
        <div class="flex flex-row">
            <PointsAttr text={items.Points} type="Points"/>
            <ArmorAttr text={items.Armor} type="Armor"/>
            <MovementAttr text={items.Move} type="Move"/>
        </div>
        <div class="flex flex-col">
        <GunAttributes range={items.GunRng} rof={items.GunROF} penetration={items.GunPen} weapon={gunName} />
        {#if missileName && items.MslPen !== "-"}
            <div class="flex mt-4">
                <MissileAttr mslRange={String(items.MslRng)} mslPen={String(items.MslPen)} mslROF={Number(items.MslROF)} weapon={missileName}/>
            </div>
        {/if}
        </div>

    </div>
</div>