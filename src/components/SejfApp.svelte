<script lang="ts">
  let current = "home";
  let date = new Date();
  let id : string = makeId();

  function makeId(){
    return Math.random().toString(36).substring(2,11) + " / " + Math.random().toString(10).substring(2,8)
  }
  function formatDate(date: Date): string{
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).replace(/\//g, ".").replace(/\,/g, " ");
  }


  date.setMinutes(date.getMinutes() - 5);
  let fromDate = formatDate(date);
  date.setMinutes(date.getMinutes() + 20);
  let toDate = formatDate(date);
  //let formattedDate = "" + day + "." + month + "." + year + " " + hours + ":" + minutes;

  let ticketClicked = false;
  let dialog: HTMLDialogElement;
  function handleTicketClick() {
    dialog.showModal();
  }
</script>

<div class="container">
  <dialog id="dialog" bind:this={dialog}>
    <div class="text">
      <p class="first">DPMB, a.s. <br> Jízdenka přestupní 19 Kč. Platí v zónách 100 + 101 mimo vlak.</p>
      <p>Ticket validity <br> From: {fromDate} <br> To: {toDate}</p>
      <p>ID <br> {id}</p>
    </div>

    <footer>
      <button
        class="cancel-button"
        value="cancel"
        formmethod="dialog"
        on:click={() => {
          dialog.close();
        }}>OK</button
      >
    </footer>
  </dialog>
  <header class="header">
    <div class="left-side">
      <span class="material-symbols-sharp arrow-back"> arrow_back </span>
      My valid tickets
    </div>
    <div class="right-side">
      Refresh
      <span class="material-symbols-sharp arrow-forward"> arrow_forward </span>
    </div>
  </header>

  <div class="main">
    <div
      class="jizdenka"
      on:click={handleTicketClick}
      on:keypress={handleTicketClick}
    >
      <div class="dpmbicon">
        <img class="dpmbimg" src="/dpmb-icon.png" alt="dpmb icon" />
      </div>
      <div class="text">
        DPMB, a.s.: Jízdenka přestupní 19 Kč. Platí v zónách 100 + 101 mimo
        vlak.: Valid to: {toDate}
      </div>
      <span class="material-symbols-sharp icon chevron"> chevron_right </span>
    </div>
  </div>

  <footer class="footer">
    <div
      class="button home"
      class:selected={current === "home"}
      on:click={() => (current = "home")}
      on:keypress={() => (current = "home")}
    >
      <span class="material-symbols-sharp icon"> home </span>
      HOME
    </div>
    <div
      class="button settings"
      class:selected={current === "settings"}
      on:click={() => (current = "settings")}
      on:keypress={() => (current = "settings")}
    >
      <span class="material-symbols-sharp icon"> settings </span>
      SETTINGS
    </div>
    <div
      class="button help"
      class:selected={current === "help"}
      on:click={() => (current = "help")}
      on:keypress={() => (current = "help")}
    >
        <img class="material-symbols-sharp icon book-icon" src="/book-icon.png" alt="book-icon">
    HELP
    </div>
    <div
      class="button messages"
      class:selected={current === "messages"}
      on:click={() => (current = "messages")}
      on:keypress={() => (current = "messages")}
    >
      <img class="material-symbols-sharp icon book-icon" src="/message-icon.png" alt="book-icon">
      MESSAGES
    </div>
  </footer>
</div>

<style>
  :root {
    --brown: #1c1714;
    color: white;
    background-color: #e4dcd4;
    --bottom-grey: #828283;
    --top-grey: #a4a5a4;
    --bottom-grey-btn: #cacacb;
    --top-grey-btn: #e1e0e1;
  }
  ::backdrop{
    background-color: #00000094;
  }
  dialog {
    background-color: black;
    color: whitesmoke;
    padding: 0;
    max-width: 75%;
    border: #505050 2px solid;
    border-radius: 2px;
    box-shadow: #1c1714 0 0 6px;
  }

  dialog > .text {
    padding-left: 1rem;
    font-weight: 600;
    font-size: 15px;
    padding-right: 1rem;
  }
  .first {
    margin-top: 8px;
  }
  dialog footer {
    background: linear-gradient(0deg, rgba(130,130,131,1) 0%, rgba(164,165,164,1) 100%);
    height: 3.5rem;
    display: flex;
    justify-content: center;
    box-shadow: #cacacb 0 0 1px;
  }
  .cancel-button {
    margin: 8px;
    box-shadow: #1c1714 0 1px 1px;
    background: linear-gradient(0deg, rgba(202,202,203,1) 0%, rgb(245, 245, 245) 100%);
    border: none;
    border-radius: 2px;
    width: 50%;
  }

  .main {
    background-color: #e4dcd4;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
  }

  .jizdenka:focus,
  .jizdenka:focus-visible,
  .jizdenka:hover {
    background-color: rgb(206, 206, 206);
  }
  .jizdenka {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: white;
    color: black;
    padding: 0.5rem;
  }
  .text {
    font-size: 20px;
    font-weight: 300;
  }
  .dpmbimg {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
  .dpmbicon {
    margin: 5px 0 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px #e02d06 solid;
    overflow: hidden;
  }
  .chevron {
    color: #e02d06;
  }

  .material-symbols-sharp {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
  }
  

  .right-side,
  .left-side {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .right-side {
    justify-content: space-between;
    font-size: small;
    background-color: #e02d06;
    padding: 10px;
  }

  .arrow-back,
  .arrow-forward {
    font-size: 30px;
  }
  .arrow-back {
    color: #e02d06;
    padding: 10px;
  }

  .main {
    height: 50rem;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 40vh;
  }

  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 6rem;
    background-color: var(--brown);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
  }
  .header {
    height: 5rem;
    background-color: var(--brown);

    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 100%;

    font-size: small;
  }
  .selected {
    background-color: white;
    color: #1c1714;
    
  }
  .selected > img {
    filter: invert(26%) sepia(48%) saturate(7180%) hue-rotate(1deg) brightness(90%) contrast(96%);
  }
  .selected > span {
    color: #e02d06;
  }
  .icon {
    font-size: 33px;
  }
  .book-icon {
    height: 24px;
  }

</style>
