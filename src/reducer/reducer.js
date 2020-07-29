import {ADD_FEATURE, REMOVE_FEATURE} from '../actions/featureActions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://images.hgmsites.net/hug/2019-ford-mustang_100654175_h.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 Engine', price: 1500 },
        { id: 2, name: 'Racing Detail Package', price: 1500 },
        { id: 3, name: 'Premium Sound System', price: 500 },
        { id: 4, name: 'Rear Spoiler', price: 250 }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price + action.payload.price,
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter((item) => {
                    return item.id !== action.payload.id
                })
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price - action.payload.price,
                    features: state.car.features.filter((item) => {
                        return item.id !== action.payload.id
                    })
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        default: 
            return state
    }        
} 