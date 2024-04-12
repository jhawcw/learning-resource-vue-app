<template>
  <ul>
    <learning-resource
      v-for="storedResource in storedResources"
      :storedResource="storedResource"
      :key="storedResource.id"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

const StoredResources = {
  components: {
    LearningResource,
  },
  inject: ['storedResources'],
};

export default StoredResources;
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
