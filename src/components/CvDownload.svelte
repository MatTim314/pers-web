<script lang="ts">

    function recolor(){
        alert('nice')
    }
</script>

<div class="outer">
    
    <div class="header"></div>
    <p>I'm a software engineer with a thing for design. I enjoy creating useful tools that also look good.</p>
    <p>Feel free to <a class="dw-button" on:mouseenter={recolor} href="../../public/CV-eng-IT.pdf">download my CV.</a></p>
    <div class="image-overlay"></div>
    
</div>

<style>
    .outer {
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        place-items: center;
    }

    .image-overlay {
        position: absolute;
        width: 50%;
        height: 150%;
        opacity: 0;
        border-radius: 10px;
        right: 0;
        top: 7rem;
        background-image: url(../../public/cv-preview.png);
        background-position: 0 0;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        z-index: -1;
        transition: opacity 300ms ease, box-shadow 300ms ease;
    }
    .image-overlay:hover{
        opacity: 0.3;
        box-shadow: 0 0 10px white;
    }
    .header {
        align-self: flex-start;
        font-size: 3rem;
    }
    
    p {
        align-self: flex-start;
        font-size: 2rem;
    }
    a {
        text-decoration: none;
        color: inherit;
        position: relative;
    }

    a:hover {
        color: var(--accent-red-color);
    }

    a::before {
        content: ' ';
        position: absolute;
        bottom: -3px;
        width: 0%;
        border-bottom: 1px white solid;
        transition: width 200ms ease;
    }
    a:hover::before{
        border-bottom: 1px var(--accent-red-color) solid;
        width: 100%;
    }

</style>