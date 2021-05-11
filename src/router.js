import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Seller/Admin.vue";
import Overview from "./views/Seller/Overview.vue";
import Products from "./views/Seller/Products.vue";
import Invoice from "./form/Invoice.vue";
import ProductsList from "./sections/ProductList.vue";
import Orders from "./views/Seller/Orders.vue";
import Komplain from "./views/Seller/Komplain.vue";
import Ads from "./views/Seller/Promo.vue";
import Profile from "./views/Seller/Profile.vue";
import Search from "./views/Search.vue";
import Details from "./views/ProductsDetails.vue";
import AllCategory from "./views/AllCategory.vue";
import Category from "./views/Category.vue";
import UserProfile from "./views/UserProfile.vue";
import Wishlist from "./views/Wishlist.vue";
import ProductVirtual from "./views/ProductVirtual.vue";
import Store from "./views/Store.vue";
import Promo from "./views/Promo.vue";
import Upload from "./form/UploadForm.vue";
import Payment from "./views/Transaksi.vue";
import Seller from "./views/DashboardSeller.vue";
import Chat from "./form/chat.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "",
            component: () =>
                import ("./components/baseView.vue"),
            children: [{
                    path: "/product/:id",
                    name: "product",
                    component: Details
                },
                {
                    path: "/",
                    name: "home",
                    component: Home
                },
                {
                    path: "/search",
                    name: "search",
                    // component: Search
                    component: () =>
                        import ("./views/Product-all-view.vue")
                },
                {
                    path: "/zakat",
                    name: "zakat",
                    // component: Search
                    component: () =>
                        import ("./zakat/Index.vue")
                },
                {
                    path: "/bantuan",
                    name: "bantuan",
                    // component: Search
                    component: () =>
                        import ("./views/PusatBantuan.vue")
                },
                {
                    path: "/list",
                    name: "productList",
                    // component: ProductsList,
                    component: () =>
                        import ("./views/Product-all-view.vue")
                },
                {
                    path: "/virtual",
                    name: "produk virtual",
                    component: ProductVirtual
                },
                {
                    path: "/wishlist",
                    name: "wishlist",
                    component: Wishlist
                },
                {
                    path: "/promo",
                    name: "promo",
                    component: Promo
                },
                {
                    path: "/cart",
                    name: "cart",
                    component: () =>
                        import ('./views/Cart.vue')
                },

                {
                    path: "/payment",
                    name: "payment",
                    component: Payment
                },
                {
                    path: "/checkout",
                    name: "checkout",
                    component: () =>
                        import ( /* webpackChunkName: "about" */ "./views/Checkout.vue")
                },
                {
                    path: "/kategori/:name",
                    name: "kategori detail",
                    component: Category
                },
                {
                    path: "/invoice/:id",
                    name: "invoice",
                    component: Invoice
                },
                {
                    path: "/stores/:name",
                    name: "stores",
                    component: Store
                },
                {
                    path: "/chat",
                    name: "chatting",
                    component: Chat,
                },
                // 
                {
                    path: "/auth/verif",
                    name: "Verifikasi",
                    component: () =>
                        import ('./views/verif-auth.vue'),
                },
                {
                    path: "/seller",
                    name: "seller",
                    component: Seller
                },
            ]
        },

        {
            path: "/home",
            name: "homes",
            component: Home
        },
        {
            path: "/profile",
            name: "profile-user",
            props: true,
            component: UserProfile
        },
        {
            path: "/kategori",
            name: "kategori",
            component: AllCategory
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin,
            meta: { requiresAuth: true },
            children: [{
                    path: "overview",
                    name: "overview",
                    component: Overview
                },
                {
                    path: "products",
                    name: "products",
                    component: Products
                },
                {
                    path: "products/:id",
                    name: "products-edit",
                    component: Upload
                },
                {
                    path: "profile",
                    name: "profile",
                    component: Profile
                },
                {
                    path: "orders",
                    name: "orders",
                    component: Orders
                },
                {
                    path: "komplain",
                    name: "komplain",
                    component: Komplain
                },
                {
                    path: "ads",
                    name: "ads",
                    component: Ads
                },
                {
                    path: "ongkir",
                    name: "ongkir",
                    component: () =>
                        import ('./views/Seller/Ongkir.vue'),
                },
                {
                    path: "cashback",
                    name: "cashback",
                    component: () =>
                        import ('./views/Seller/Cashback.vue'),
                },
                {
                    path: "chat",
                    name: "chat",
                    component: () =>
                        import ( /* webpackChunkName: "about" */ "./form/chat.vue")
                },
                {
                    path: "upload",
                    name: "upload",
                    component: Upload
                },
            ]
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        // {
        //     path: "/chat-2",
        //     name: "chat-2",
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ "./form/beauty-chat.vue")
        // }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;