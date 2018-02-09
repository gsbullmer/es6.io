import User, { createURL, gravatar } from './src/user';

const greg = new User('Greg Bullmer', 'gsbullmer@gmail.com', 'gsbullmer.com');
const profile = createURL(greg.name);
const avatar = gravatar(greg.email);
console.log(profile, avatar);
