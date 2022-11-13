import PostCssPresetEnv from "postcss-preset-env";

// todo(maximsmol): add doiuse
// todo(maximsmol): add stylelint

export default {
  plugins: [
    PostCssPresetEnv({
      features: {
        "nesting-rules": true,
      },
    }),
    // todo(maximsmol): enable in production builds
    // require("cssnano"),
  ],
};
