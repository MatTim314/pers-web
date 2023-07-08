<script lang="ts">
 let inTouch : string = ''
 let contact : string = 'edston47@gmail.com'
 let touched : boolean = false;

 function whenTouched(){
    touched = !touched
    inTouch = touched ? contact : ''
 }
</script>




<div>
    Hi, I'm <span class="name">Matej</span> <span class="subtle italic">[mah-tey]</span>
<p>Nice to meet you</p>
</div>
<style>

    .name {
        cursor: pointer;
        color: var(--accent-yellow-color)
    }
    .name:hover +.italic,
    .name +.italic{
        transition: opacity 500ms ease;
    }

    .name:hover + .italic {
        opacity: 1;
    }
    .name + .italic {
        opacity: 0;
    }

    p {
        position: relative;
        max-width: fit-content;
    }

    p::before {
        content: '';
        position: absolute;
        bottom: -3px;
        width: 0%;
        border-bottom: 1px white solid;
        transition: width 1s ease;
    }
    p:hover::before{
        border-bottom-color: var(--accent-yellow-color);
        right: 0;
        width: 100%;
    }
    
    
        
    .italic {
        font-style: italic;
    }

    .subtle {
        color: grey;
        font-size: 2.5rem;
    }

    div {
        font-size: 3rem;
        margin-top: 40vh;
        margin-bottom: 40vh;
    }
</style>