const loaderUtils =  require('loader-utils');
// console.log(loaderUtils);

// process.exit(1);
const loader = function(source) {
  const options = loaderUtils.getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return `export default ${ JSON.stringify(source) }`;
};
module.exports = loader;