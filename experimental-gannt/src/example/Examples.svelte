<script lang="ts">
    import Nested from './Nested.svelte';
    import Info from './Info.svelte';
    // export let name: string;
    let name: string = 'world';
    let string = `this string contains some <strong>HTML!!!</strong>`;
    let count = 0;
    $: doubled = count * 2;
    $: console.log('the count is ' + count);

    $: if (count >= 10) {
        alert('count is dangerously high!');
        count = 9;
    }
    function incrementCount() {
        count += 1;
    }
    const pkg = {
        name: 'svelte',
        version: 3,
        speed: 'blazing',
        website: 'https://svelte.dev'
    };
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];
</script>
<svelte:head>
    <link rel="stylesheet" href="/tutorial/dark-theme.css">
</svelte:head>
<main>
    <p>Visit the <a href="https://svelte.jp/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <h1>Hello {name}!</h1>
    <p><a href='examples'>examples</a></p>
    <p><input type='text' {name} value='{name}'></p>
    <Nested />
    <p>{@html string}</p>
    <button on:click={incrementCount}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
    <p>{count} doubled is {doubled}</p>
    <Info {...pkg}/>
    {#if user.loggedIn}
        <button on:click={toggle}>
            Log out
        </button>
    {:else}
        <button on:click={toggle}>
            Log in
        </button>
    {/if}

    <ul>
        {#each cats as { id, name }, i}
            <li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
                {i + 1}: {name}
            </a></li>
        {/each}
    </ul>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>