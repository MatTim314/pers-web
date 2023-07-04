<script lang="ts">
    
</script>

<div>
    <div>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/projects/">Projects</a>
    <a href="/timers/">Timers</a>
    </div>
</div>


<style>
    div {
        display: flex;
        justify-content: center;
    }
    div > div{
        align-self: center;
        width: 50%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
    }

    a {
        font-family: inherit;
        text-decoration: none;
        color: inherit;
        padding: 2rem;
        font-size: 1.5rem;
    }
</style>
