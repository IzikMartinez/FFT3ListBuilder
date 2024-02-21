<script lang="ts">
    import type {TankType} from "../../types";
    import Attribute from "./attribute.svelte";
    export let items: TankType

</script>

<div class="flex flex-row w-screen h-16 my-2">
    <Attribute text={items.Name} type="Name" />
    <Attribute text={items.Period} type="Era"/>
    <Attribute text={items.Points} type="Points"/>
    <Attribute text={items.Armor} type="Armor"/>
    <Attribute text={items.GunRng} type="Gun Range"/>
    <Attribute text={items.GunROF} type="Gun ROF"/>
    <Attribute text={items.GunPen} type="Gun Penetration"/>
    <Attribute text={items.AI} type="Anti-Infantry"/>

    {#if items.Msl}
        <Attribute text={items.MslRng} type="Missile Range"/>
        <Attribute text={items.MslROF} type="Missile ROF"/>
        <Attribute text={items.MslPen} type="Missile Penetration"/>
    {/if}
</div>