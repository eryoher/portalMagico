import { combineReducers } from 'redux';
import authReducer from './auth'
import carouselReducer from './carousel';
import productsReducer from './products';
import campaignReducer from './campaigns'
import projectsReducer from './projects';
import ofertasReducer from './ofertas';
import categoriesReducer from  './categories';
import promotionsReducer from './promotions';
import userReducer from './Users';
import commonReducer from './common';
import paymentsReducer from './payments';
import inventoryReducer from './inventories';

const rootReducer = combineReducers({
    carousel: carouselReducer,
    products: productsReducer,
    campaigns: campaignReducer,
    projects: projectsReducer,
    deals: ofertasReducer,
    categories: categoriesReducer,
    promotions: promotionsReducer,
    auth:authReducer,
    users: userReducer,
    common:commonReducer,
    payments:paymentsReducer,
    inventories:inventoryReducer
});

export default rootReducer;
