import React from "react";
import Script, { ScriptProps } from "next/script";

type GoogleAdSenseProps = {
  publisherId: string;
  strategy?: ScriptProps["strategy"];
  debug?: boolean;
};

export function GoogleAdSense({
  publisherId,
  strategy = "afterInteractive",
  debug = false
}: GoogleAdSenseProps): JSX.Element | null {
  const _publisherId =
      process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? publisherId;

  if(!_publisherId){
    // TODO: check the format of publisherId here, some peeps new to adsense might enter a wrong id here.
    console.error("nextjs-google-adsense: publisherId can't be empty for GoogleAdSense component");
    return null;
  }

  return (
    <>
      <Script
        id="nextjs-google-adsense"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${_publisherId}${debug ? `google_console=1`: ``}`}
        strategy={strategy} />
    </>
  );
}
