<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resources
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js Documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };

      this.storedResources.unshift(newResource);
      console.log(this.storedResources);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      // this.storedResources = this.storedResources.filter(
      //   (res) => res.id !== resId
      // );

      this.storedResources.splice(
        this.storedResources.findIndex((ele) => ele.id === resId),
        1
      );
      console.log(this.storedResources);
    },
  },
};
</script>
