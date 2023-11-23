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
        year: "numeric"
      })
      .replace(/\//g, "-")
      .replace(/\,/g, " ");
  }

  function formatHour(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`
  }

  let date = new Date()
  let currentTime = formatHour(date)
  date.setMinutes(date.getMinutes() + 60);
  let oneHourMore = formatHour(date)
  let formatedDate = formatDate(date)
  let randomChars = getRandomCharacterString(8)
  let textValue = `DPMK, a.s. SMS prestupny CL 1,50 EUR Platnost od ${formatedDate} ${currentTime} do ${oneHourMore} hod. ${randomChars}`
  function copy() {
    navigator.clipboard.writeText(textValue)
}
function renew(){
  let randomChar = getRandomCharacterString(8)
  textValue = `DPMK, a.s. SMS prestupny CL 1,50 EUR Platnost od ${formatedDate} ${currentTime} do ${oneHourMore} hod. ${randomChar}`
  return textValue
}
</script>



<div class="stack">
  <p>{textValue}</p>
    <button on:click={copy}>Copy</button>
    <button on:click={() => {textValue=renew()}}>New code</button>
</div>