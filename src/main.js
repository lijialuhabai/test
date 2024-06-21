import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)

app.use(router).use(ElementPlus,Antd ).mount('#app')
