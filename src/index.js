import configureStore from './store/configureStore';
import {bugAdded,bugResolved} from './store/bugs';


const store = configureStore();

const unsubscribe = store.subscribe(()=>{
    console.log('store changed', store.getState());
})

store.dispatch(bugAdded({description: 'Bug one'}));

store.dispatch(bugAdded({description: 'Bug Lat'}));

unsubscribe();  

store.dispatch(bugAdded({description:'Bug two'}));

store.dispatch(bugResolved({id:2}));

console.log(store.getState());

