<template>
  <li>
    <base-card>
      <header>
        <h3>{{ storedResource.title }}</h3>
        <base-button mode="flat" @click="removeResource(storedResource.id)"
          >Delete</base-button
        >
      </header>
      <p>{{ storedResource.description }}</p>
      <nav>
        <a :href="storedResource.link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    storedResource: {
      id: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  },
  inject: ['removeResource'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
