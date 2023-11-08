<script>
  let active = true;
  let date = new Date();
  let ticket = true;

  function change_active() {
    active = !active;
  }

  function show_ticket() {
    //ticket = true;
    ticket = !ticket;
  }

  function formatDate(date) {
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/\//g, ".")
      .replace(/\,/g, " ");
  }

  date.setMinutes(date.getMinutes() - 5);
  let fromDate = formatDate(date);
  date.setMinutes(date.getMinutes() + 20);
  let toDate = formatDate(date);
</script>

<header>
  <span
    class="material-symbols-sharp chevron-right"
    style="cursor: pointer;"
    on:click={() => {
      ticket = false;
    }}
    on:keydown={() => {
      ticket = false;
    }}
  >
    chevron_left
  </span>
  <h2>Public transport ticket{ticket ? " details" : "s"}</h2>
</header>

<main>
  {#if !ticket}
    <div class="selector">
      <div
        style="background-color: {active ? 'lightgrey' : 'white'};"
        on:click={change_active}
        on:keydown={change_active}
      >
        Active
      </div>
      <div
        style="background-color: {!active ? 'lightgrey' : 'white'};"
        on:click={change_active}
        on:keydown={change_active}
      >
        Invalid
      </div>
    </div>
    <div
      class="ticket"
      on:click={() => {
        ticket = true;
      }}
      on:keydown={() => {
        ticket = true;
      }}
    >
      <div class="dpmbicon">
        <img class="dpmbimg" src="/dpmb-icon.png" alt="dpmb icon" />
      </div>
      <div class="description">
        <span class="valid">Valid to {toDate}</span>
        <span class="ticket_name">Jízdenka přestupní 19 Kč</span>
      </div>
      <div class="status">Active</div>
      <span class="material-symbols-sharp arrow-back"> chevron_right </span>
    </div>
  {/if}
  {#if ticket}
    <div class="ticket_main">
      <div class="header ticket_section">
        <span class="ticket_type">Jízdenka přestupní 19 Kč</span>
        <span class="remaining">Active (remaining TIME)</span>
      </div>
      <div class="code ticket_section">
        <span class="code_header light">Transport ticket control code</span>
        <span class="code_text">845982/isdfIFw</span>
        <span class="code_time">TIME</span>
      </div>
      <div class="validity ticket_section">
        <div class="valid_box">
          <div class="valid_from valid_flex">
            <span class="light">Valid from</span>
            <span class="bold">{fromDate}</span>
          </div>
          <div class="valid_to valid_flex">
            <span class="light">Valid to</span>
            <span class="bold">{toDate}</span>
          </div>
        </div>
        <div class="valid_flex">
          <span class="light">City</span>
          <div class="valid_city">
            <div class="dpmbicon2">
              <img class="dpmbimg2" src="/dpmb-icon.png" alt="dpmb icon" />
            </div>
            <span class="bold">Brno</span>
          </div>
        </div>
      </div>
      <div class="receipt ticket_section">
        <p class="light">Platí v zónach 100 + 101 mimo vlak</p>
        <p class="light">
          Receipt can be downloaded at <span class="link"
            >smsjizdenky.dpmb.cz</span
          >
        </p>
      </div>

      <div class="buy">
        <span>Buy again</span>
      </div>
    </div>
  {/if}
</main>

<style>
  :root {
    --border-radius: 10px;
    background-color: lightgray;
  }
  header {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    box-shadow: 0 0 5px 2px black;
  }

  main {
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .selector {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: lightgrey;
    border-radius: var(--border-radius);
    width: 90vw;
    height: 2rem;
    padding: 2px;
  }
  .selector > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
  }

  .status {
    color: green;
    flex-grow: 2;
  }
  .dpmbimg {
    max-width: 40%;
    max-height: 40%;
    object-fit: contain;
  }
  .dpmbicon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .dpmbimg2 {
    max-width: 100%;
    max-height: 30%;
    object-fit: contain;
  }
  .dpmbicon2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .ticket {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    border: lightgrey 1px solid;
    border-radius: var(--border-radius);
    padding: 1rem 1rem 1rem 0;
    cursor: pointer;
  }
  .description {
    justify-self: self-start;
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex-grow: 3;
  }
  .valid {
    color: grey;
    font-size: x-small;
  }
  .ticket_name {
    font-weight: bold;
  }

  .ticket_main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: green;
    color: white;
    width: 100%;
    box-sizing: border-box;
    height: 5rem;
  }
  .ticket_type {
    font-weight: bold;
  }
  .remaining {
    background-color: rgb(2, 59, 2);
    color: rgb(208, 255, 137);
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    font-size: small;
  }
  .code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .validity {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .valid_box {
    display: flex;
    justify-content: space-between;
  }
  .valid_city {
    display: flex;
    align-items: center;
  }
  .valid_flex {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .valid_to {
    text-align: right;
  }
  .receipt {
    align-self: start;
  }
  .link {
    color: black;
    font-weight: 500;
    text-decoration: underline;
  }
  .light {
    font-weight: 300;
    font-size: 11px;
  }
  .bold {
    font-weight: 600;
    font-size: 17px;
  }
  .ticket_section {
    padding: 1rem;
  }
  .code_text {
    font-weight: bold;
    font-size: 2rem;
  }

  .code_time {
    color: darkred;
  }

  .buy {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-bottom: 1rem;
    width: 92%;
    height: 3rem;
    border-radius: 17px;
    color: white;
    background-color: rgb(198, 0, 0);
  }
</style>
