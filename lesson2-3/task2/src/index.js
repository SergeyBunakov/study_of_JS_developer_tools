import { printProfile } from './profile';

const userData = {
    name: 'John',
    age: 18,
};

const profile = {
    ...userData,
    company: 'Gromcode',
}

printProfile(profile);