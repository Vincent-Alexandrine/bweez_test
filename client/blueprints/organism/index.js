module.exports = {
  fileMapTokens() {
    // Return custom tokens to be replaced in your files
    return {
      __organism__: options => {
        // logic to determine value goes here
        const { options: opt } = options.entity;
        const p = opt._[2];
        const path = p ? p : undefined;

        // if undefined -> /src/components
        // else -> /src/components/PATH
        return path
          ? `${options.settings.getSetting('componentsPath')}/${path}/Organisms`
          : options.settings.getSetting('organismPath');
      }
    };
  },
};
