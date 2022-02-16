<script lang="ts">
	import Tabs from "./Tabs.svelte";
	import Schedule from "./proto/Schedule.svelte";
	import Gantt from "./gantt/Gantt.svelte";
	import Examples from "./example/Examples.svelte";
	let items = [
		{ label: "工程管理",
			value: 1,
			component: Schedule
		},
		{ label: "TeamGantt",
			value: 2,
			component: Gantt
		},
		{ label: "Examples",
			value: 3,
			component: Examples
		}
	];
</script>

<main>

	<Tabs {items} />
</main>
