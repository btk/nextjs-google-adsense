# Nextjs Google AdSense

Structure of this package is based on [nextjs-google-analytics](https://github.com/MauricioRobayo/nextjs-google-analytics). Credits to [@MauricioRobayo](https://github.com/MauricioRobayo).

**Google AdSense for Next.js**

This package optimizes script loading using [Next.js `Script` tag](https://nextjs.org/docs/basic-features/script), which means that it will **only work on apps using Next.js >= 11.0.0**.

## Installation

```
npm install --save nextjs-google-adsense
# or
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

You can also add the `publisherId` as environment variable as `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`. The environment variable will override the prop if both are set.

This component will inject the script for AdSense units to be rendered with Next.js's Script `afterInteractive` strategy.

## Usage

You can use automatic placements by Google AdSense or add manual ad units using this package.

### Auto Ads (Recommended)
After initializing the AdSense, most effective way for ad unit placements is [Auto Ads](https://support.google.com/adsense/answer/9261307?hl=en). Gives the best results for most use cases. Let Google's $B AI do the placement.

In order to activate Auto Ads, you need to login your Google AdSense panel and enable it for the particular domain name you are using for your Next.js project.

> Google AdSense Panel > Ads (Sidebar) > By site (Tab) > Press Edit icon for your domain > Ad Settings > Expand Auto Ads and enable it > Enable Optimize exiting units

Additionally, options like Anchor ads and Side rails can be managed under "Ad Formats" accordion menu and you don't need to make any changes in your Next.js project for it.

Note that, Auto Ads might take a while to show up, and optimize itself depending on user behaviour.

### Manual Ad Unit Placement

In order to place ads manually, use `<ResponsiveAdUnit />` in any of your `pages/` files or components.

Create a new Display ad unit;

> Google AdSense Panel > Ads (Sidebar) > By ad unit (Tab) > Display ads > Name your unit, Choose "Responsive" > Create

```js
// pages/index.js (or any component)
import { ResponsiveAdUnit } from "nextjs-google-adsense";

export default function Home() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>Welcome to my homepage. This is hero text</p>

      <ResponsiveAdUnit
        publisherId="pub-XXXXXXXXXXXXXXXX"
        slotId="XXXXXXXXXX"
        type="after-home-hero"/>

      <p>This is my home page content</p>
      <p>Way more content here</p>

      <ResponsiveAdUnit
        publisherId="pub-XXXXXXXXXXXXXXXX"
        slotId="XXXXXXXXXX"
        type="end-of-homepage"/>
    </>
  );
};

export default Home;
```

Copy your `data-ad-slot="XXXXXXXXXX"` value into the component as `slotId` prop. You can omit `publisherId` if you defined `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` environment variable. The environment variable will override the prop if both are set.

 The **ad unit automatically gets re-rendered when the route changes**. The `type` prop id used as `key` when there are multiple ad units in the page addition to the current `router.asPath` string. You can add a slug defining the unit's position on the page in order to differentiate a unit from others. Additionally you can re-render the ad unit by changing `type` prop after page load.

`ResponsiveAdUnit` also accepts `style` prop.

// TODO: Add "fixed" unit type, passing it for now since it is not prefered a lot.

## Debugging your Google AdSense

// TODO: Add some steps here in order to debug it, feel free to PR. (Use gtag console and `debug={true}` prop for `<GoogleAdSense/>`)

## Notes

Ignore `AdSense head tag doesn't support data-nscript attribute.` warning.

## Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## LICENSE

This software and maintainers are **not affiliated** with Google AdSense, Next.js or Vercel. And authors offer no warranties.

[MIT](./LICENSE.md)
