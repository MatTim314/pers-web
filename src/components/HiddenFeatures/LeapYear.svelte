<script>
  $: inputYear = "";

  function isCorrectYear(year) {
    return year != "" && year != null && Number.isInteger(year);
  }

  function isLeapYear(year) {
    // Check for the Julian calendar leap years
    if (year < 1582) {
      return year % 4 === 0;
    }

    // Gregorian calendar rules
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  }
</script>

<div class="wrapper">
  <h1>Leap year checker</h1>

  <input
    inputmode="numeric"
    placeholder="Enter a year e.g. 2004"
    type="number"
    bind:value={inputYear}
  />

  {#if isCorrectYear(inputYear)}
    <div>
      {inputYear} is
      {#if !isLeapYear(inputYear)}
        not
      {/if}
      a leap year
    </div>
  {/if}
</div>

<style>
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    text-align: center;
    font-size: 2rem;
    outline: none;
    border: none;
    border-bottom: 10px black dotted;
    padding: 1rem;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    font-size: 2rem;
  }
</style>
