import React from 'react';
import Script, { ScriptProps } from "next/script";
import { useRouter } from 'next/router'

declare const window: any;

const initAd = () => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};

export class ResponsiveAdUnit extends React.Component <any, any> {
  componentDidMount() {
    initAd();
  }

  shouldComponentUpdate(nextProps: any) {
    const { props: { path } } = this;
    return nextProps.path !== path;
  }

  componentDidUpdate() {
    initAd();
  }

  render() {
    const { style, type, slotId, publisherId } = this.props;

    const _publisherId =
        process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? publisherId;

    if(!_publisherId || !slotId){
      console.error("nextjs-google-adsense: publisherId or slotId can't be empty for the unit");
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
          data-ad-slot={String(slotId)}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}
