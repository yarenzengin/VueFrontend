import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import { createStore } from 'vuex';

const app = createApp(App);


const store = createStore({
    state() {
        return {
            cart: [],
            cartTotal: 0,
        };
    },
    getters: {
        getCounter(state) {
            return state.cartTotal;
        },
        stateSayacIncrement(state, getter) {
            if (getter.getCounter >= 1000) {
                const discount = state.cartTotal * 0.1;
                state.cartTotal -= discount;
            }
            return getter.getCounter;
        },
    },
    mutations: {
        addRemoveCart(state, payload) {
            payload.toAdd ?
                state.cart.push(payload.product) :
                state.cart = state.cart.filter(obj => obj.id !== payload.product.id);

            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);

            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateCart(state, payload) {
            const product = state.cart.find(o => o.id === payload.product.id);
            if (product) {
                product.qty = payload.product.qty;
            }

            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);

            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        loadCartFromLocalStorage(state) {
            const cartData = JSON.parse(localStorage.getItem('cart'));
            const cartTotalData = JSON.parse(localStorage.getItem('cartTotal'));

            if (cartData) {
                state.cart = cartData;
            }

            if (cartTotalData) {
                state.cartTotal = cartTotalData;
            }
        },
    },
});

app.use(router);
app.use(store);
store.commit('loadCartFromLocalStorage');
app.mount('#app');

