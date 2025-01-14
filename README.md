<img src="https://github.com/user-attachments/assets/07eb1691-7a8d-46f0-b0fe-69affe3ca1b3" width="45"/>

# ARTSNAP

# Getting Started

In file _.env_ in root project folder
```bash
API_URL=https://api.unsplash.com/
API_KEY=abc123
```
change _API_KEY_ to your API key from _unplash_ developers

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
