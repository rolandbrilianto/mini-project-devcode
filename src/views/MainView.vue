<template>
  <HeaderBackground>
    <HeaderTitle />
  </HeaderBackground>
  <div class="mt-8 mx-5 sm:mx-[80px] lg:mx-[220px]">
    <div class="flex justify-between items-center">
      <activityTitle />
      <activityAddButton />
    </div>
    <div
      v-if="activityExist"
      class="grid grid-cols-2 gap-y-4 justify-items-center mt-7 lg:grid-cols-4 md:grid-cols-3"
    >
      <activityItem />
      <activityItem />
      <activityItem />
      <activityItem />
      <activityItem />
    </div>
    <div class="flex items-center justify-center h-[70vh]" v-else>
      <activityEmptyState class="mx-auto sm:mt-10" />
    </div>
  </div>
</template>

<script setup>
import HeaderBackground from "@/components/header-background.vue";
import activityEmptyState from "@/components/activity-empty-state.vue";
import HeaderTitle from "@/components/header-title.vue";
import activityItem from "@/components/activity-item.vue";
import activityAddButton from "@/components/activity-add-button.vue";
import activityTitle from "@/components/activity-title.vue";
import { ref, computed } from "vue";

const activityExist = ref(true);
</script>
