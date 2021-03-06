require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });

module.exports = {
    distDir: "build",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/
            },
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    addAttributesToSVGElement: {
                                        attributes: [{ "aria-hidden": "true" }]
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        });

        return config;
    }
};
