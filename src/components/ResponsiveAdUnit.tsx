import React from 'react';

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
    const { style, path, slotId, publisherId } = this.props;

    style.display = "block";

    return (
      <div key={path + "-" + slotId} style={style}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3602356900147773"
          data-ad-slot={String(slotId)}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}
