<script setup>
defineProps({
  totalCounters: {
    type: [Object, Array]
  }
})
</script>

<template>
  <div class="m-3 bg-baseball-blue3 p-2">
    <!--pitches counter -->
    <div class="grid grid-cols-2 bg-white balls-count relative shadow-lg">
      <div class="grid items-center text-baseball-red font-baseball-300 text-[16px] ml-1">Total Pitches
        :
      </div>
      <div class="ball-number grid items-center justify-items-end h-full
              justify-evenly  text-baseball-darkblue font-baseball-800 text-[1.5em] ">
        {{ totalCounters.pitches }}
      </div>
    </div>
    <!-- pitches total-->
    <div class="grid grid-cols-2 bg-white balls-count relative shadow-lg mt-3">
      <div class="grid items-center text-baseball-red font-baseball-300 text-[16px] ml-1">Pitches
        vrs Batters :
      </div>
      <div class="ball-number grid items-center justify-items-end h-full
              justify-evenly  text-baseball-darkblue font-baseball-800 text-[1.5em] ">
        {{ totalCounters.pitchesVsBatters }}
      </div>
    </div>
    <div class="mt-6 text-2xl ">
      Counts:
    </div>
    <!--              counter balls-->
    <div class="grid grid-cols-2 bg-white balls-count relative shadow-lg mt-3">
      <div class="grid items-center text-baseball-red font-baseball-300 text-[16px] ml-1">Balls
        :
      </div>
      <div class="ball-number grid items-center justify-items-end h-full
              justify-evenly  text-baseball-darkblue font-baseball-800 text-[1.5em] ">
        {{ totalCounters.balls }}
      </div>
    </div>
    <!--              counter strike-->

    <div class="grid grid-cols-2 bg-white balls-count relative shadow-lg mt-3">
      <div class="grid items-center text-baseball-red font-baseball-300 text-[16px] ml-1">Strike
        :
      </div>
      <div class="ball-number grid items-center justify-items-end h-full
              justify-evenly  text-baseball-darkblue font-baseball-800 text-[1.5em] ">
        {{ totalCounters.strike }}
      </div>
    </div>

  </div>
</template>

<style>
.balls-count {
  border-left: solid red 2px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.ball-number {
  @apply bg-baseball-gray7;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
