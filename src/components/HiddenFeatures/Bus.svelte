<script>
  import { text } from "svelte/internal";

  function getRandomCharacterString(str_len) {
    const characters = "1234567890abcdefghijklmnopqrstuvwxyz1234567890";
    let randomString = "";

    for (let i = 0; i < str_len; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }
  function formatDate(date) {
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-")
      .replace(/\,/g, " ");
  }

  function formatHour(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  let date = new Date();
  let currentTime = formatHour(date);
  date.setMinutes(date.getMinutes() + 60);
  let oneHourMore = formatHour(date);
  date.setMinutes(date.getMinutes() - 20);
  let fortyMinutesMore = formatHour(date);
  let formatedDate = formatDate(date);
  let randomChars = getRandomCharacterString(8);
  let elevenRandomChars = getRandomCharacterString(11);
  let textValue = `DPMK, a.s.\nSMS prestupny CL 1,50 EUR\nPlatnost od ${formatedDate} ${currentTime} do ${oneHourMore} hod.\n${randomChars}`;
  let textValueBA = `DPB, a.s. \nPrestupny 40 min. CL 1,20EUR\n Platnost od ${formatedDate} ${currentTime} do ${fortyMinutesMore} hod. \n${elevenRandomChars}\nDakujeme, ze vyuzivate MHD. Setrite tym zivotne prostredie.`;
  function copy() {
    navigator.clipboard.writeText(textValue);
  }
  function copySecond() {
    navigator.clipboard.writeText(textValue);
  }
  function renew() {
    let randomChar = getRandomCharacterString(8);
    textValue = `DPMK, a.s.\nSMS prestupny CL 1,50 EUR\nPlatnost od ${formatedDate} ${currentTime} do ${oneHourMore} hod.\n${randomChar}`;
    return textValue;
  }
  function renewBA() {
    let elevenRandomChars = getRandomCharacterString(11);
    textValueBA = `DPB, a.s. \nPrestupny 40 min. CL 1,20EUR\n Platnost od ${formatedDate} ${currentTime} do ${fortyMinutesMore} hod. \n${elevenRandomChars}\nDakujeme, ze vyuzivate MHD. Setrite tym zivotne prostredie.`;
    return textValueBA;
  }
</script>

<div class="stack">
  <p>{textValue}</p>
  <button on:click={copy}>Copy</button>
  <button
    on:click={() => {
      textValue = renew();
    }}>New code</button
  >
  <p>{textValueBA}</p>
  <button on:click={copy}>CopyBL</button>
  <button
    on:click={() => {
      textValueBA = renewBA();
    }}>New code BA</button
  >
</div>
