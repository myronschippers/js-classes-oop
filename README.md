# Webpack DEMO

A small demonstration of what the [webpack]() bundler is capable of. We'll also take a look at how it works and the basic structure of bundling in general.

## Setup

We began with an empty folder and only adding a `README.md` & `.gitignore` files initially.

*in `.gitignore`:*

```
/node_modules
.DS_Store
package-lock.json
```

### Installing Dependencies

In order to install the dependencies we need we initialized the `package.json` and then were able to start loading dependencies from `npm`.

*run in terminal:*

```
npm init
```

Press enter through all of the options until you get to the very end. Fill out anything that you already have the information for but remember we can always go back and change this information as needed. After the package is initialized we can begin to install dependencies.

1. Install webpack as our bundler.
    * run in terminal:

        ```
        npm install --save-dev webpack
        ```

1. Install the webpack CLI so that we can use a script to run webpack.
    * run from terminal:

        ```
        npm install --save-dev webpack-cli
        ```

1. To run the bundler we'll setup a build script in our `package.json`.
    * run from terminal:

        ```JS
        "scripts": {
            ...
            "build": "webpack --config webpack.config.js"
        }
        ```

1. The build script we just put in is calling to a configuration file we have not yet created. Let's go ahead and make our initial configuration.
    * make new file `webpack.config.js`:

    ```
    module.exports = {
        ///WEBPACK CONFIG
    }
    ```

### Configuration Settings

Webpack has many configuration option that we can set but there are only a couple that are absolutely required in order to run webpack and bundle all Front-End assets.