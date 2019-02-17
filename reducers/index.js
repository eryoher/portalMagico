import { combineReducers } from 'redux';
import carouselReducer from './carousel';
import productsReducer from './products';
import campaignReducer from './campaigns'
import projectsReducer from './projects';
import ofertasReducer from './ofertas';
import categoriesReducer from  './categories';
import promotionsReducer from './promotions';

const rootReducer = combineReducers({
    carousel: carouselReducer,
    products: productsReducer,
    campaigns: campaignReducer,
    projects: projectsReducer,
    deals: ofertasReducer,
    categories: categoriesReducer,
    promotions: promotionsReducer
});

export default rootReducer;
