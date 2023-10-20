import React from "react";
import Script, { ScriptProps } from "next/script";
import { isPublisherId } from "../utils";

type GoogleAdSenseProps = {
  publisherId?: string;
  strategy?: ScriptProps["strategy"];
  async?: boolean;
  debug?: boolean;
};

/**
 * @param publisherId - Google AdSense publisher ID
 * @param strategy - Next.js Script strategy, default is "afterInteractive"
 * @param async - Next.js Script async
 * @param debug - Google AdSense debug mode
 */
export function GoogleAdSense({
  publisherId,
  strategy = "afterInteractive",
  async = true,
  debug = false,
}: GoogleAdSenseProps): JSX.Element | null {
  const _publisherId =
    process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? publisherId;

  if (!_publisherId) {
    console.error(
      "nextjs-google-adsense: publisherId can't be empty for GoogleAdSense component"
    );
    return null;
  } else if (!isPublisherId(_publisherId)) {
    console.error(
      "nextjs-google-adsense: publisherId is not in the correct format. It should be like this: pub-xxxxxxxxxxxxxxxx, there is a total of 16 digits behind pub-"
    );
    return null;
  }

  return (
    <>
      <Script
        async={async}
        id="nextjs-google-adsense"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${_publisherId}${
          debug ? `google_console=1` : ``
        }`}
        strategy={strategy}
      />
    </>
  );
}
