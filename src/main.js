import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

app.component('base-dialog', BaseDialog);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
// createApp({
//   components: {
//     App,
//   },
// }).mount('#app');
