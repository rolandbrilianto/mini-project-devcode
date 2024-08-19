<template>
  <button
    data-cy="activity-add-button"
    class="bg-main-blue rounded-full flex items-center justify-center w-[100px] h-[37px] sm:w-[156px] sm:h-[54px] text-xs sm:text-lg font-semibold text-white pt-[13px] pl-3.5 pb-[13px] pr-3.5"
  >
    <img alt="plus" :src="plus" class="w-3 h-3 sm:w-6 sm:h-6" />
    <span> </span>
    <span class="text-xs ml-[2px] sm:text-lg">Tambah</span>
  </button>
</template>
<script setup>
import plus from "../assets/plus.svg";
</script>
