<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import DayLine from "./DayLine.svelte"
    import DayLabel from "./DayLabel.svelte"
    import ProcessGroup from "./schedule/ProcessGroup.svelte"
    import {Day, genDays, fromDays} from "./day.ts"
    import {Process,genProcesses} from "./process.ts"

    const days = genDays(90)
    const months = fromDays(days)
    const processes = genProcesses(9)

    const scheduleTop = 98
    const scheduleLeft = 200

    const numberOfProcess = processes.map((p) => p.subProcesses.length + 1).reduce((a, b) => a + b)
    const height = scheduleTop + 24 * numberOfProcess
    const width = 26 * numberOfProcess
</script>
<section>
<p>工程管理</p>
<div id="container">
    <div id="process-header" style="width: {scheduleLeft}px;height: {scheduleTop}px">左上</div>
    <div id="schedule-header" style="left: {scheduleLeft}px;height: {scheduleTop}px">
        <div id="year-date" style="background-color: #fff;">
            {#each months as month, i}
                <span style="width:{month.count * 2.5}rem;display:inline-block;border: solid 1px aqua">{month.value}</span>
            {/each}
        </div>
        <div id="days">
            {#each days as day, i}
                <DayLabel {...day} height={height}/>
            {/each}
        </div>
    </div>
    <div id="process-list" style="margin-top: {scheduleTop + 4}px;width:{scheduleLeft}px">
        {#each processes as process (process.name)}
            <div class="process-group">
                <div class="large-process">
                    <span>{process.name}</span>
                </div>
                {#each process.subProcesses as sub (sub.name)}
                    <div class="small-process">
                        <span>{sub.name}</span>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <div id="schedule" style="top: {scheduleTop}px;left: {scheduleLeft}px;width:{width}px">
        <DayLine days={days} height={height}/>
        <ProcessGroup processes={processes}/>
    </div>
</div>
</section>

<style>
    #container {
        position: relative;
        overflow: scroll;
        width: 100%;
        height: 600px
    }
    #process-header{
        position: sticky;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 300;
        border: solid 1px aqua;
        border-bottom: none;
        border-right: none;
    }
    #process-list{
        position: sticky;
        left: 0;
        width: 100px;
        z-index: 200;
        background-color: #fff;
    }
    .process-group {
        width: 100%;
    }
    .large-process, .small-process {
        border: solid 1px aqua;
        border-bottom: none;
        border-right: none;
        width: 100%;
    }
    #schedule-header{
        position: sticky;
        top: 0;
        width: 3600px;
        margin-top: -200px;
        margin-left: 200px;
        z-index: 200;
    }
    #schedule{
        position: absolute;
        top: 72px;
        left: 100px;
    }
    #days{
        display: flex;
        flex-direction: row;
    }
</style>