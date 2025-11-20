import { Routes } from '@angular/router';
import { Cart } from './pages/cart/cart';
import { Payment } from './pages/payment/payment';

export const routes: Routes = [
    {
        path: '',
        component: Cart,
        title: "Giỏ hàng"
    },
    {
        path: 'payment',
        component: Payment,
        title: "Thanh toán"
    }
];
