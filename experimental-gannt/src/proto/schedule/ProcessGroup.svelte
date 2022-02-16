<script lang="ts">
    import ProcessRange from "./ProcessRange.svelte"
    export let processes;

    type mouseEvent = {x: number}
    let dragStartX = {x:0};
</script>

<div style="position: absolute;width: 100%;">
    {#each processes as process (process.name)}
        <div class="process-group">
            <div class="large-process">
                <span>{process.name}</span>
            </div>
            {#each process.subProcesses as sub (sub.name)}
                <ProcessRange processName={sub.name} startX={dragStartX}/>
            {/each}
        </div>
    {/each}
</div>

<style>
.process-group {
    width: 100%;
}
.large-process, .small-process {
    border: solid 1px aqua;
    border-bottom: none;
    border-right: none;
    width: 100%;
}
</style>