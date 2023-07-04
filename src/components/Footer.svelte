<div class="wrap">
    <div>
    <span>Powered by <a href="https://svelte.dev/">Svelte</a> and <a href="https://astro.build/">Astro</a></span>
    <span>Created by <a href=":)">me</a> from <span class="scratch">scratch</span></span>
    </div>
</div>

<style>
    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: rgb(255, 145, 0);
    }
    a:nth-child(2):hover{
        color: rgb(117, 8, 75);
    }
    span:nth-child(2) > a:nth-child(1):hover{
        color: rgb(0, 0, 0);
    }

    .scratch:hover{
        text-decoration: line-through;
    }
    div {
        padding: 2rem;
        font-size: large;
        font-family: 'Quicksand', sans-serif;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 7px;
    }

    .wrap{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>