import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({

    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/trade-for-me',
            name: 'trade',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/TradeForMe.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "trader" */ './views/Login.vue')
        },


        {
            path: '/traders',
            name: 'traders',

            component: () => import(/* webpackChunkName: "trader" */ './views/Traders.vue')
        },
        {
            path: '/nbot-5.0',
            name: 'nbot',

            component: () => import(/* webpackChunkName: "trader" */ './views/Nbot.vue')
        },
        {
            path: '/profile/:id',
            name: 'profile',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "trader" */ './views/Profile.vue')
        },

        {
            path: '/form',
            name: 'form',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Form.vue')
        },
        {
            path: '/xxx',
            name: 'admin',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "admin" */ './views/admin/Admin.vue'),
            children: [
                {
                    path: '/all-traders',
                    name: 'allTraders',
                    component: () => import(/* webpackChunkName: "admin" */ "./views/admin/AllTraders.vue"),
                },
                {
                    path: '/add-traders',
                    name: 'addTrader',
                    component: () => import(/* webpackChunkName: "admin" */ "./views/admin/AddTraders.vue"),
                },
                {
                    path: '/comments/:id',
                    name: 'comments',
                    component: () => import(/* webpackChunkName: "admin" */ "./views/admin/comments.vue"),
                },
                {
                    path: '/users/:id',
                    name: 'users',
                    component: () => import(/* webpackChunkName: "admin" */ "./views/admin/AdminUsers.vue"),
                },
                {
                    path: '/viewTrader/:id',
                    name: 'viewTrader',
                    component: () => import(/* webpackChunkName: "admin" */ "./views/admin/viewTrader"),
                },
                {
                    path: '/edit-trader/:id',
                    name: 'editTrader',
                    component: () => import(/* webpackChunkName: "admin" */ "./views/admin/UpdateTraders.vue"),
                },
            ]

        },
        {
            path: '/*',
            name: '404',
            component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
        },

    ]
})
