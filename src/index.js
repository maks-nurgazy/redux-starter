import configureStore from './store/configureStore';
import {bugAdded,bugResolved, getUnresolvedBugs,assignBugUser,getUserBugs} from './store/bugs';
import {productAdded} from './store/products';
import {userAdded} from './store/users';


const store = configureStore();

store.dispatch(userAdded({name: 'Maksatbek'}));
store.dispatch(userAdded({name: 'Beknur'}));
store.dispatch(userAdded({name: 'Doolat'}));

store.dispatch(bugAdded({description: 'Bug one'}));

store.dispatch(bugAdded({description: 'Bug two'}));

store.dispatch(assignBugUser({userId:1,bugId:2}));

store.dispatch(bugAdded({description:'Bug three'}));



store.dispatch(productAdded({
    name: 'Carrot'
}));



const userBugs = getUserBugs(2)(store.getState());
console.log(userBugs);
