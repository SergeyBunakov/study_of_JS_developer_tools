import fetchUser from './profile/gateway';
import { printProfile } from './profile/index';

fetchUser('facebook')
    .then(userData => printProfile({
        name: userData.name,
        company: userData.location,
    }));

