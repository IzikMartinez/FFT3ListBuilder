<script lang="ts">
    import type {TankType, Vehicle} from "../../types";
    import Attribute from "./attribute.svelte";
    import MovementAttr from "./movementAttr.svelte"
    import PointsAttr from "./pointsAttr.svelte"
    import ArmorAttr from "./armorAttr.svelte"
    import UnitName from "../../fragments/statlines/UnitName.svelte";
    import GunAttributes from "./GunAttributes.svelte";
    import MissileAttr from "./MissileAttr.svelte";

    export let items: Vehicle
    let gunName = items.gun_name;
    let missileName = items.missile_name
</script>

<div class="flex flex-col w-3xl h-lg">
    <UnitName name={items.Name} era={items} />
    <div class="flex flex-row w-fill h-xs mb-4 rounded-b-2xl" bg-gradient="to-b to-sky-950 from-slate-400">
        <div class="flex flex-row">
            <PointsAttr text={items.Points} type="Points"/>
            <ArmorAttr armor={items.armor} type="Armor"/>
            <MovementAttr movement={items.move_value} movementTypes={items.move_type}/>
        </div>
        <div class="flex flex-col">
        <GunAttributes range={items.Gun_Rng} rof={items.Gun_ROF} penetration={items.Gun_Pen} weapon={gunName} />
        {#if missileName}
            <div class="flex mt-4">
                <MissileAttr missile_name={missileName} unlimited_missiles={items.unlimited_missiles}/>
            </div>
        {/if}
        </div>

    </div>
</div>