<template>
  <div class="role-card">
    <h3 class="text text--h3 text--serif">{{ role.title }}</h3>
    <div class="member-group">
      <div v-for="member in role.relation" :key="member.id" class="member">
        <img class="member-img" :src="member.url" :alt="member.name" />
        <p class="text text--p">{{ member.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  role: {
    type: Object,
    required: true,
    // Example structure: 
    // { title: 'Team Lead', relation: [{ id: 1, name: 'Alice', url: '...' }, ...] }
  }
})
</script>

<style scoped>
.role-card {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center
}

.member-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.member {
  text-align: center;
  padding: 1rem;
  width: 10rem;
}

.member-img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
}
</style>
