<script lang="ts">
  let inTouch: string = "";
  let contact: string = "edston47@gmail.com";
  let touched: boolean = false;

  function whenTouched() {
    touched = !touched;
    inTouch = touched ? contact : "";
  }
</script>

<div class="outer">
<!-- <div class="first-line">
    Hi, I'm <span class="name">Matej</span>
  <span class="subtle italic">[mah-tey]</span>
</div>
  <p>Nice to meet you</p> -->
  <p>Professional keypresser, ceiling starer enthusiast, ocassional window glancer</p>
</div>

<style>
  .name {
    cursor: pointer;
    color: var(--accent-yellow-color);
  }
  .name:hover + .italic,
  .name + .italic {
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
    transition: opacity 500ms ease;
    animation: fadeIn 2s;

  }

  p::before {
    content: "";
    position: absolute;
    bottom: -3px;
    width: 0%;
    border-bottom: 1px var(--accent-yellow-color) solid;
    transition: width 350ms ease;
  }
  p:hover::before {
    border-bottom-color: var(--accent-yellow-color);
    right: 0;
    width: 100%;
  }

  .italic {
    font-style: italic;
  }

  .subtle {
    color: var(--main-background-color);
    font-size: 2.5rem;
  }

  .first-line{
    animation: fadeIn 2s;
  }
  .outer {
    font-size: 3rem;
    margin-top: 30vh;
    margin-bottom: 40vh;
    width: 50%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>
