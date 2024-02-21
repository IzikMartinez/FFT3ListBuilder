<script lang="ts">
    export let text: string
    export let widthBig = false
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans:ital,wght@0,100..900;1,100..900&family=Staatliches&display=swap');
</style>

<div class="flex bg-red-700 text-white text-center items-center justify-center {widthBig ? 'w-96' : 'w-32'} h-8 font-600 text-2xl font-alumni">{text}</div>

