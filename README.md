# Nextjs Google Analytics

Structure of this package is based on [nextjs-google-analytics](https://github.com/MauricioRobayo/nextjs-google-analytics).

**Google AdSense for Next.js**

This package optimizes script loading using [Next.js `Script` tag](https://nextjs.org/docs/basic-features/script), which means that it will **only work on apps using Next.js >= 11.0.0**.

## Installation

```
npm install --save nextjs-google-adsense
yarn add nextjs-google-adsense
```

## Initializing AdSense

Add the `GoogleAdSense` component with the `publisherId` prop set to your Publisher ID (optained from Google Adsense panel) to your [custom App](https://nextjs.org/docs/advanced-features/custom-app) file:

```js
// pages/_app.js
import { GoogleAdSense } from "nextjs-google-adsense";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAdSense publisherId="pub-XXXXXXXXXXXXXXXX" />
      <Component {...pageProps} />
    </>
  );
};

export default App;
```

This component will inject the script for AdSense units to be rendered with Next.js's Script `afterInteractive` strategy.

## Usage

You can use automatic placements by Google AdSense or add manual ad units using this package.

### Auto Ads
**Recommended** After initializing the AdSense, most effective way for ad unit placements is [Auto Ads](https://support.google.com/adsense/answer/9261307?hl=en). Gives the best results for most use cases. Let Google's $B AI do the placement.

In order to activate Auto Ads, you need to login your Google AdSense panel and enable it for the particular domain name you are using for your Next.js project.

> Google AdSense Panel > Ads (Sidebar) > By Side (Tab) > Press Edit icon for your domain > Ad Settings > Expand Auto Ads and enable it > Enable Optimize exiting units


### Manual Ad Unit Placement

In order to place ads manually, use `<ResponsiveAdUnit />` in any of your `pages/` files or components

```js
// pages/index.js
import { ResponsiveAdUnit } from "nextjs-google-adsense";

export default function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <ResponsiveAdUnit />
    </>
  );
};

export default Home;
```


## Debugging your Google AdSense

// TODO: Add some steps here in order to debug it, feel free to PR.

## TypeScript

The module is written in TypeScript and type definitions are included.

## Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## LICENSE

This software and maintainers are **not affiliated** with Google AdSense, Next.js or Vercel. And authors offer no warranties.

[MIT](./LICENSE.md)
