import React from "react";
import Script, { ScriptProps } from "next/script";

type GoogleAdSenseProps = {
  publisherId?: string;
  strategy?: ScriptProps["strategy"];
};

export function GoogleAdSense({
  publisherId,
  strategy = "afterInteractive",
}: GoogleAdSenseProps): JSX.Element | null {

  if(!publisherId){
    // TODO: check the format of publisherId here, some peeps new to adsense might enter a wrong id here.
    console.error("publisherId can't be empty");
    return null;
  }

  return (
    <>
      <Script
        id="nextjs-google-adsense"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
        strategy={strategy} />
    </>
  );
}
