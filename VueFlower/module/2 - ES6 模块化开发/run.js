import { name, double } from './data.js';

console.log('这是来自 DATA 的 ' + name );

import comeFromDefaultFunc from './data_default.js';

comeFromDefaultFunc(double(2));