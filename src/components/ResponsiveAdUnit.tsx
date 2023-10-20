import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { isPublisherId, isSlotId } from "../utils";

declare const window: any;

type ResponsiveAdUnitProps = {
  publisherId?: string;
  slotId: string;
  type?: string;
  style?: any;
};

const initAd = () => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};

/**
 * @param publisherId - Google AdSense publisher ID
 * @param slotId - Google AdSense slot ID
 * @param type - Google AdSense ad unit type, you can literally put text here, default is "default-ad-unit-type"
 * @param style - CSS style object
 */
export function ResponsiveAdUnit({
  publisherId,
  slotId,
  type = "default-ad-unit-type",
  style = {}
}: ResponsiveAdUnitProps): JSX.Element | null {

  useEffect(() => {
    initAd();
  })

  const _publisherId =
      process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? publisherId;

  if(!_publisherId || !slotId){
    console.error("nextjs-google-adsense: publisherId or slotId can't be empty for the unit");
    return null;
  } else if (!isPublisherId(_publisherId) || !isSlotId(slotId)) {
    console.error("nextjs-google-adsense: invalid publisherId or slotId found for the unit");
    return null;
  }

  style.display = "block";

  const router = useRouter()

  return (
    <div key={router.asPath.replace(/\//g, "-") + "-" + slotId + "-" + type} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={`ca-${_publisherId}`}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
