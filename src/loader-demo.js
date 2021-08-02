const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    activate: {
      type: 'boolean',
    },
  },
};

module.exports = function (source) {
  const options = getOptions(this);
  // console.log(this);
  // console.log(source);
  validate(schema, options);

  if (options.activate) {
    return source.replace('x', 'y');
  } else {
    return source;
  }
}
