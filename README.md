# Welcome to the Munchie Fashion 🚀🔥

## Getting Set Up

We've already installed all necessary dependencies for you, so you shouldn't have to worry about that.

To start the dev server:

```sh
yarn start
```

## Deployed Build

https://expo.io/@2wce/munchie-fashion

## Pipelines

We are using Github Actions to build & publish expo builds and it requires the following secret:

### **Secrets**

Repo > Settings > Secrets > New secret

| Name       | Value      |
| ---------- | ---------- |
| EXPO_TOKEN | **\*\*\*** |

You can find this list in the `.env.example` file as well.

## Themeing

We realise that your app most likely has it's own brand colors, so in order to update these you can go ahead and change the values for `primary` and `secondary` in the `theme.ts` file. After you've made this change, go ahead and update the `logo` key to reference your project's specific logo and your app should already be looking pretty good! You're also able to change some of the other color keys, but these are quite generic and shouldn't need to be changed.

## Components

There are already a whole selection of components for you to utilize. If you find that you need to create some more custom components please follow the naming convention of the already build components. Remember to export all components from the `index.ts` at the root of the components folder. This will allow for easy umbrella imports from the `components` directory.

## Containers

You will obviously need to add some more containers throughout the life of your project, so please also follow the layout of the already built containers. There are some useful pre-defined layouts located in the `layouts` directory. Please make use of these to enforce consitency throughout the app.

## Test Thresholds

Jest has been configured to only pass if a minumum line coverage threshold of **75%** is met. Please ensure that for each component / container that you add, you are writing sufficent test cases for that specific component. **Do not lower the coverage threshold if your tests aren't passing**. Rather add some more test cases! There should be plenty of examples of how to write tests for specific use cases throughout the app already.
