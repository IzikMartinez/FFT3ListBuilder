<script lang="ts">
    export let name: string
    export let era: string
</script>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
</style>

<div class="flex items-center justify-between w-fill h-12 bg-red-700 rounded-t-xl">
    <span class="flex-none text-white ml-4 text-xl font-500">Soviet</span>
    <div class="flex-auto text-center text-white text-3xl font-500 font-staatliches">{name}</div>
    <span class="flex-none text-right text-white mr-4 text-xl font-500">{era}</span>
</div>