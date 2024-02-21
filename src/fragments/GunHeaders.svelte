<script lang="ts">
import GunHeader from "./GunHeader.svelte";
export let multiammo = false

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&family=Staatliches&display=swap');
</style>

<div class="flex  bg-black">
    <div class="w-1/5">
    <GunHeader header="Range" widthBig={true}/>
    </div>
    <div class="w-1/5">
    <GunHeader header="ROF" />
    </div>
    <div class="w-1/5">
    <GunHeader header="Hit" />
    </div>
    <div class="w-1/5">
    <GunHeader header="HE" />
    </div>
        <div class="w-1/5">
    <GunHeader header="HEAT" />
        </div>
</div>