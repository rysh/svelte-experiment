<script lang="ts">
    export let height;
    export let days;
</script>

<div class="day-lines" style="height: {height}px">
    {#each days as day, i}
        <div class="day-line"></div>
    {/each}
</div>

<style>
.day-lines {
    position: absolute;
    display: flex;
    flex-direction: row;
}
.day-line {
    height: 100%;
    min-width: 2.5rem;
    border-left: solid 1px aqua;
    z-index: -1;
}
</style>