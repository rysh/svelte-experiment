<script lang="ts">
    export let processName;
    export let startX;
    function col(event): number {
        return Math.floor(event.offsetX / (16 * 2.5))
    }
    function dragstart(event) {
        startX.x = col(event)
        console.log(`startCol:x=${startX.x}`)
    }
    function dragend(event) {
        const endX = col(event)

        console.log(`endCol:${endX}`)
        console.log(`${endX - startX.x}日`)
    }
</script>


<div class="small-process" on:mousedown={dragstart} on:mouseup={dragend}>
    <div class="box"></div>
    <span style="user-select: none">{processName}</span>
</div>

<style>
.large-process, .small-process {
    border: solid 1px aqua;
    border-bottom: none;
    border-right: none;
    width: 100%;
}
</style>