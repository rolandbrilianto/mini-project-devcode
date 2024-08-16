<template>
  <HeaderBackground>
    <HeaderTitle />
  </HeaderBackground>
  <h1 class="text-3xl font-bold underline text-center">Hello world!</h1>
  <activityItem />
  <activityAddButton />
</template>

<script setup>
import HeaderBackground from "@/components/header-background.vue";
import HeaderTitle from "@/components/header-title.vue";
import activityItem from "@/components/activity-item.vue";
import activityAddButton from "@/components/activity-add-button.vue";
</script>
