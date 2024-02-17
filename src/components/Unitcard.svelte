<script lang="ts">
    import type {TankData} from "../types";
    import Attribute from "../fragments/attribute.svelte";
    import MovementAttr from "../fragments/movementAttr.svelte"
    import PointsAttr from "../fragments/pointsAttr.svelte"
    import ArmorAttr from "../fragments/armorAttr.svelte"
    import UnitName from "../fragments/UnitName.svelte";
    export let items: TankData

</script>

<div class="flex flex-col">
    <UnitName name={items.Name} era={items.Period} />
    <div class="flex flex-row w-2/5 h-52 my-2 bg-red-100">
        <div class="flex flex-row">
            <PointsAttr text={items.Points} type="Points"/>
            <ArmorAttr text={items.Armor} type="Armor"/>
            <MovementAttr text={items.Move} type="Move"/>
        </div>
        <div class="flex flex-col">
            <span class="w-96 text-center text-white font-600 text-xl bg-red-800">Gun</span>
            <div class="flex">
                <Attribute text={items.GunRng} type="Range"/>
                <Attribute text={items.GunROF} type="ROF"/>
                <Attribute text={items.GunPen} type="Penetration"/>
                <Attribute text={items.AI} type="Anti-Infantry"/>
            </div>
            {#if items.Msl}
                <div class="flex">
                    <Attribute text={items.MslRng} type="Missile Range"/>
                    <Attribute text={items.MslROF} type="Missile ROF"/>
                    <Attribute text={items.MslPen} type="Missile Penetration"/>
                </div>
            {/if}
        </div>

    </div>
</div>