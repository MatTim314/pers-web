
<div class='inner'>
    <div class="horizontal-line"></div>
    <div class='vertical-line'></div> 
</div>

<style>
    .horizontal-line{
  position: absolute;
  background-color:black;
  width: 7%;
  height: 70%;
  border-radius: 4px;
}

.vertical-line{
     position: absolute;
  background-color:black;
  width: 70%;
  height: 7%;
  border-radius: 4px;
}

.inner {
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: rotate(45deg);
  border: 1px black solid;
}
</style>