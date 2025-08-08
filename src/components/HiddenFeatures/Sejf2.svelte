<script>
  let active = false;
  let fifteen_minutes = 60 * 15 * 1000;
  let date = new Date();
  let targetTime = date.getTime() + fifteen_minutes;
  let ticket = false;
  let time = getCurrentTime();
  let remaining_time = formatTime(5000);
  date.setMinutes(date.getMinutes() - 5);
  let fromDate = formatDate(date);
  date.setMinutes(date.getMinutes() + 20);
  let toDate = formatDate(date);
  setInterval(() => {
    time = getCurrentTime();
    if (getRemainingTime(date) < 1) {reset();}
    remaining_time = formatTime(getRemainingTime(date));
  }, 1000);

  const params = new URLSearchParams(window.location.search);
  const speedStr = params.get("speed"); // Get the speed parameter as a string

  // Convert the speed parameter to an integer
  const speed = speedStr ? parseInt(speedStr, 10) : null;
  if (speed && !isNaN(speed)) {
    document.documentElement.style.setProperty("--speed", speed / 10 + "s");
  }


  function getRemainingTime(movedDate) {
    const currentTime = Date.now();
    const remainingTime = targetTime - currentTime;

    // Return remaining time in milliseconds
    return remainingTime;
  }
  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes} mins. ${seconds} s`;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const currentTime = `${hours}:${minutes}:${seconds}`;
    return currentTime;
  }
  function getRandomSixDigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  function getRandomSixCharacterString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let randomString = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  function change_active() {
    active = !active;
  }

  function show_ticket() {
    //ticket = true;
    ticket = !ticket;
  }

  function reset() {
    date = new Date();
    targetTime = date.getTime() + fifteen_minutes;
    date.setMinutes(date.getMinutes() - 5);
    fromDate = formatDate(date);
    date.setMinutes(date.getMinutes() + 20);
    toDate = formatDate(date);
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
</script>

<header class="black">
  <span
    class="material-symbols-sharp chevron-right"
    style="cursor: pointer;"
    on:click={() => {
      ticket = false;
      document.body.style.backgroundColor = "white";
    }}
    on:keydown={() => {
      ticket = false;
      document.body.style.backgroundColor = "white";
    }}
  >
    chevron_left
  </span>
  <h3 class="bold">Public transport ticket{ticket ? " detail" : "s"}</h3>
</header>

<main>
  {#if !ticket}
    <div class="selector">
      <div
        style="background-color: {active
          ? 'var(--background-color-ticket)'
          : 'white'}; color: {active ? 'gray' : ''}"
        on:click={change_active}
        on:keydown={change_active}
      >
        Active
      </div>
      <div
        style="background-color: {!active
          ? 'var(--background-color-ticket)'
          : 'white'}; color: {!active ? 'gray' : ''};"
        on:click={change_active}
        on:keydown={change_active}
      >
        Invalid
      </div>
    </div>
    {#if !active}
      <div
        class="ticket"
        on:click={() => {
          ticket = true;
          document.body.style.backgroundColor = "rgb(215, 215, 215)";
        }}
        on:keydown={() => {
          ticket = true;
          document.body.style.backgroundColor = "--var(background-color)";
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
  {/if}
  {#if ticket}
    <div class="ticket_main">
      <div class="header">
        <span class="ticket_type">Jízdenka přestupní 19 Kč</span>
        <span class="remaining bold small">Active (remaining {remaining_time})</span>
      </div>
      <div class="divider top-green">
        <div class="green-top top-border" />
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="code ticket_section">
        <span class="code_header light small">Transport ticket control code</span>
        <span class="code_text black bold lg"
          >{getRandomSixDigitNumber()}/{getRandomSixCharacterString()}</span
        >
        <span class="code_time">{time}</span>
      </div>
      <div class="divider">
          <div class="top-border" />
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="validity ticket_section black">
          <div class="valid_from flex-col">
            <span class="light small xs-pb">Valid from</span>
            <span class="bold xm">{fromDate}</span>
          </div>
          <div class="valid_to flex-col ">
            <span class="light small xs-pb">Valid to</span>
            <span class="bold xm">{toDate}</span>
          </div>
        <div class="flex-col valid_city">
          <span class="small light xs-pb">City</span>
          <div class="flex-row">
              <div class="dpmbicon2">
                <img class="dpmbimg2" src="/dpmb-icon.png" alt="dpmb icon" />
              </div>
              <span class="bold xm">Brno</span>
          </div>
        </div>
        <div class="flex-col price">
            <span class="light small xs-pb">Price</span>
            <span class="bold xm">19,00 CZK</span>
            <span class="light black small">Including VAT</span>
          </div>

      </div>
      <div class="divider">
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="receipt ticket_section black">
        <p class="bold small">Platí v zónach 100 + 101 mimo vlak</p>
        <p class="normal small">
          Download <span class="link bold"
            >smsjizdenky.dpmb.cz</span
          >
        </p>
      </div>
      <div class="divider top-border">
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="buy" on:click={reset} on:keydown={reset}>
        <span>Buy again</span>
      </div>
    </div>
  {/if}
</main>

<style>
  :root {
    --border-radius: 10px;
    --background-color: rgb(215, 215, 215);
    --background-color-ticket: rgb(237, 237, 237);
    --border-color: rgba(240, 240, 240, 0.5);
    --border-width: 0.5px;
    background-color: var(--background-color);
      font-family: "Inter", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
    --speed: 1;
  }
  header {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
    box-shadow: 0 0 10px -3px rgb(100,100,100);
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
    background-color: var(--background-color-ticket);
    border-radius: var(--border-radius);
    width: 92vw;
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
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .ticket {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    border: var(--background-color-ticket) 1px solid;
    border-radius: var(--border-radius);
    padding: 1rem 1rem 1rem 0;
    cursor: pointer;
  }

  .divider {
    position: relative;
    width: 100%;
    height: 1rem;
    padding-bottom: 4px;
    border-bottom: var(--border-width) solid var(--border-color);
  }
  .green-top {
    position: absolute;
    width: 100%;
    height: 9px;
    background-color: green;
  }
  .top-border {
    border-top: var(--border-width) solid var(--border-color);
  }
  .dots {
    width: 92%;
    border-bottom: 6px dotted rgb(240, 240, 240);
    position: absolute;

    left: 50%;
    transform: translate(-50%, 0);
    top: 6px;
  }
  .circle {
    --circle-size: 20px;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    position: absolute;
  }
  .right_circle {
    background-color: var(--background-color);
    right: -10px;
  }
  .left_circle {
    background-color: var(--background-color);
    left: -10px;
  }
  .description {
    justify-self: self-start;
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex-grow: 25;
  }
  .valid {
    color: grey;
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
    box-shadow: 0 0px 5px -5px var(--border-color);
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
    height: 5rem;
    padding-bottom: 0.5rem;
  }
  .ticket_type {
    font-weight: bold;
  }
  .remaining {
    background-color: rgb(1, 70, 0);
    color: rgb(191, 249, 186);
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
  }
  .code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .validity {
      margin-top: 1rem;
      margin-bottom: 1rem;
    display: grid;
    grid-template-areas:
      "from   to"
      "price  city";
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 90%;
    padding: 1rem;
  }

  .valid_from  { grid-area: from;  justify-self: start; }
  .valid_to    { grid-area: to;    justify-self: end; align-items: end; }
  .price       { grid-area: price; justify-self: start; }
  .valid_city  { grid-area: city;  justify-self: end;  align-items: end; }

  .flex-col {
      display: flex;
      flex-direction: column;
  }
  .flex-row {
      display: flex;
      flex-direction: row;
  }
  .valid-box {
      justify-content: space-between;
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
    font-weight: 400;
  }
  .normal {
    font-weight: 500;
  }
  .bold {
    font-weight: 700;
  }
  .xs-pb{
      padding-bottom: 0.25rem;
  }
  .s-pb{
      padding-bottom: 0.5rem;
  }
  .xs {
      font-size: 0.4rem;
  }
  .small {
      font-size: 11px;
  }
  .xm {
      font-size: 15px;
  }
  .medium {
      font-size: 1.5rem;
  }
  .lg {
      font-size: 2.2rem;
  }
  .ticket_section {
    padding-left: 1rem;
  }
  .black {
    color: rgb(47, 47, 47);
  }
  .code_time {
    color: rgb(184, 7, 31);
    font-weight: 500;
    animation: moveLeftRight var(--speed) linear infinite;
    position: relative;
  }
  @keyframes moveLeftRight {
    0%,
    100% {
      left: -40vw;
    }

    50% {
      left: 40vw;
    }
  }

  .buy {
    cursor: pointer;
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
    background-color: rgb(218, 0, 25);
    margin-top: 1rem;
  }

  .buy:hover {
    background-color: rgb(120, 0, 14);
  }
</style>
