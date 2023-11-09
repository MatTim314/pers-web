<script>
  let active = false;
  let date = new Date();
  let ticket = false;
  let time = getCurrentTime();
  let remaining_time = formatTime(5000);
  date.setMinutes(date.getMinutes() - 5);
  let fromDate = formatDate(date);
  date.setMinutes(date.getMinutes() + 20);
  const targetTime = Date.now() + 60 * 15 * 1000;
  let toDate = formatDate(date);
  let backgroundColor = ticket ? "white" : "--var(background-color)";
  document.body.style.backgroundColor = ticket
    ? "white"
    : "--var(background-color)";
  let interval = setInterval(() => {
    time = getCurrentTime();
    remaining_time = formatTime(getRemainingTime(date));
  }, 1000);

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
  <h2>Public transport ticket{ticket ? " details" : "s"}</h2>
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
      <div class="header ticket_section">
        <span class="ticket_type">Jízdenka přestupní 19 Kč</span>
        <span class="remaining">Active (remaining {remaining_time})</span>
      </div>
      <div class="divider top-green">
        <div class="green-top top-border" />
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="code ticket_section">
        <span class="code_header light">Transport ticket control code</span>
        <span class="code_text black"
          >{getRandomSixDigitNumber()}/{getRandomSixCharacterString()}</span
        >
        <span class="code_time">{time}</span>
      </div>
      <div class="divider">
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="validity ticket_section black">
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
      <div class="divider">
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
      </div>
      <div class="receipt ticket_section black">
        <p class="light">Platí v zónach 100 + 101 mimo vlak</p>
        <p class="light">
          Receipt can be downloaded at <span class="link"
            >smsjizdenky.dpmb.cz</span
          >
        </p>
      </div>
      <div class="divider top-border">
        <div class="right_circle circle" />
        <div class="dots" />
        <div class="left_circle circle" />
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
    --background-color: rgb(215, 215, 215);
    --background-color-ticket: rgb(237, 237, 237);
    --border-color: rgba(240, 240, 240, 0.5);
    --border-width: 0.5px;
    font-family: "Inter", sans-serif;
  }
  header {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
    box-shadow: 0 0 5px 0 rgb(126, 126, 126);
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
    width: 90%;
    border-bottom: 6px dotted rgb(240, 240, 240);
    position: absolute;
    left: 18px;
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
    box-shadow: 0 4px 5px -5px var(--border-color);
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
    background-color: rgb(1, 70, 0);
    color: rgb(191, 249, 186);
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    font-size: small;
    font-weight: 500;
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
    font-size: 13px;
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
    font-family: "Inter", sans-serif;
  }
  .black {
    color: rgb(47, 47, 47);
  }
  .code_time {
    color: rgb(184, 7, 31);
    font-weight: 500;
    animation: moveLeftRight 1s linear infinite;
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
</style>
