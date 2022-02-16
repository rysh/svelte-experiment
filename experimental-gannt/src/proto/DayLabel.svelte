<script lang="ts">
    export let date;
    export let number;
    export let dayOfWeek;
    export let rokuyo;
    export let height;
</script>

<div class="day">
    <div class="day-header">
        <span>{number}</span>
        <span>{dayOfWeek}</span>
        <span>{rokuyo}</span>
    </div>
</div>

<style>
.day {
    display: flex;
    flex-direction: row;
    min-width: 2.5rem;
}
.day-header {
    position: absolute;
    margin-top: -1px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    z-index: 300;
    min-width: 100%;
    border: solid 1px aqua;
}
</style>