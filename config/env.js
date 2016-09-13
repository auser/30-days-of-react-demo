// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
 // injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;
var NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path'),
      resolve = path.resolve,
      join = path.join;

const currentDir = resolve(__dirname);
const rootDir = join(currentDir, '..');

const dotenv = require('dotenv');

const globalDotEnv = dotenv.config({
  path: join(rootDir, '.env'),
  silent: true
});
const envDotEnv = dotenv.config({
  path: join(currentDir, `${NODE_ENV}.config.env`),
  silent: true
});

const allVars = Object.assign({}, {
  'NODE_ENV': NODE_ENV
}, globalDotEnv, envDotEnv);

const initialVariableObject =
  Object.keys(allVars)
  .reduce((memo, key) => {
    memo[`process.env.${key.toUpperCase()}`] = JSON.stringify(allVars[key]);
    return memo;
  }, {});

module.exports = Object
  .keys(process.env)
  .filter(key => REACT_APP.test(key))
  .reduce((env, key) => {
    env['process.env.' + key] = JSON.stringify(process.env[key]);
    return env;
  }, initialVariableObject);
