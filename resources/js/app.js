import './bootstrap';
import { createApp } from 'vue'; // vueプラグイン
import { createRouter, createWebHistory } from 'vue-router';

// vue インスタンス生成
const app = createApp({});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/tasks' // '/tasks' へ転送
        },
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
        {
            path: '/tasks/create',
            name: 'task.create',
            component: TaskCreateComponent
        },
        {
            path: '/tasks/:taskId',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        },
    ]
});

// ※デフォルト作成されるコンポーネントを定義
import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import HeaderComponent from './components/HeaderComponent.vue';
app.component('header-component', HeaderComponent);

import TaskListComponent from './components/TaskListComponent.vue';
// app.component('task-list-component', TaskListComponent);

import TaskShowComponent from './components/TaskShowComponent.vue';
// app.component('task-show-component', TaskShowComponent);

import TaskCreateComponent from './components/TaskCreateComponent.vue';
// app.component('task-create-component', TaskCreateComponent);

import TaskEditComponent from './components/TaskEditComponent.vue';
// app.component('task-edit-component', TaskEditComponent);

app.use(router);
// 設定したURL(ルーティング)を内包し、id=appをレンダリング
app.mount('#app');