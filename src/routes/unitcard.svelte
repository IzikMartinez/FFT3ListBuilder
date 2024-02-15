<script lang="ts">
    import type {TankData} from "../types";
    import Attribute from "./attribute.svelte";
    export let items: TankData

</script>

<div class="flex flex-row w-screen h-16 my-4">
    <Attribute text={items.Name} type="Name" />
    <Attribute text={items.Period} type="Era"/>
    <Attribute text={items.Points} type="Points"/>
    <Attribute text={items.Armor} type="Armor"/>
    <Attribute text={items.GunRng} type="Gun Range"/>
    <Attribute text={items.GunROF} type="Gun ROF"/>
    <Attribute text={items.GunPen} type="Gun Penetration"/>
</div>