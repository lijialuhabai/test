import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [

        //实时轨迹
        {
            path: '/current_route',
            name: 'current_route',
            component: () => import(/* webpackChunkName: "addScheme" */ '../views/currentRoute.vue')
        },
        //重点活动
        {
            path: '/key_activity',
            name: 'key_activity',
            component: () => import(/* webpackChunkName: "addScheme" */ '../views/keyActivity.vue')
        },
        //发展历程
        {
            path: '/progress_history',
            name: 'progress_history',
            component: () => import(/* webpackChunkName: "addScheme" */ '../views/progressHistory.vue')
        },
        //站点管理
        {
            path: '/station_manage',
            name: 'station_manage',
            component: () => import(/* webpackChunkName: "addScheme" */ '../views/stationManage.vue')
        },
    ]
})

export default router;
