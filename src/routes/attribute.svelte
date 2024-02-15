<script lang="ts">
    export let text: string | number
    export let type: string
    import "../app.css";

</script>

<style>

</style>

<div class="flex flex-col mx-2">
    <div class="bg-red-800 text-white">{type}</div>
    <div>{text}</div>


</div>