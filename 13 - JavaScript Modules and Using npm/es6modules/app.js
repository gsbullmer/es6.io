import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import api, { apiKey, url } from './src/config';

const ages = [1, 1, 4, 52, 12, 4];

console.log(apiKey, url, api);
console.log(uniq(ages));
