const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    activate: {
      type: 'boolean',
    },
  },
};

class HelloWorldPlugin {
  constructor(options = {}) {
    validate(schema, options);
    this.options = options;
  }

  apply(compiler) {
    if (!this.options.activate) return;
    // Tap into compilation hook which gives compilation as argument to the callback function
    compiler.hooks.compilation.tap('PluginDemo', compilation => {
      // Now we can tap into various hooks available through compilation
      compilation.hooks.optimize.tap('PluginDemo', () => {
        console.log('Assets are being optimized.');
      });
    });

    compiler.hooks.done.tap(
      'PluginDemo',
      (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        // console.log(stats);
      }
    );
  }
}

module.exports = HelloWorldPlugin;