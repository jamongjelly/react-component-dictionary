const CracoAlias = require("craco-alias");
const ReactHotReloadPlugin = require("craco-plugin-react-hot-reload");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                tsConfigPath: "tsconfig.json",
            },
        },
        {
            plugin: ReactHotReloadPlugin,
        },
    ],
};
