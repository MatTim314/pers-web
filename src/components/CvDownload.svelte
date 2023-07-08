<script lang="ts">

    function recolor(){
        alert('nice')
    }
</script>

<div>
    <h1>CV</h1>
    <p>If my professional experience is of any interest to you feel free to <a on:mouseenter={recolor} href="../../public/CV-eng-IT.pdf">download my CV</a></p>
    
</div>

<style>
    div {
        outline: 1px red solid;
        width: 50%;
        display: flex;
        flex-direction: column;
        place-items: center;
    }

    a {
        text-decoration: none;
        color: inherit;
        position: relative;
    }

    a:hover {
        color: var(--accent-red-color);
        color: red;
    }

    a::before {
        content: ' ';
        position: absolute;
        bottom: -3px;
        width: 100%;
        border-bottom: 1px white solid;
    }
    a::before:hover{
        border-bottom: 1px red solid;
    }

</style>