import React from "react";

function FooterComponent() {
  return (
    <div>
      <div id="BackFooterButtonContainer" className="bmMrrA">
        <div id="BackFooterButtonInnerContainer" className="eRnxLG">
          <h4 id="BackFooterButtonIcon" className="gMIgWT gjwnNJ">
            ←
          </h4>
          <h4 id="BackFooterButtonText" className="gMIgWT jRpanj">
            BACK TO STORE
          </h4>
        </div>
      </div>
      <span id="Marginer" className="ieymd"></span>
      <div id="HorizontalLine" className="jrJNwj"></div>
      <div
        id="RowWrapper"
        padding="5px"
        justifycontent="space-between"
        className="hMyymS row"
      >
        {/* <div id="PoweredByWrapper" className="eAzkqc">
          <h4 id="TinyBodyText" className="fXziTs czrHSx">
            Powered by veryfast
          </h4>
          <img
            size={14}
            src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/logo_29-09-21.png"
            className="iCBYsR"
          />
        </div> */}
        <div id="TermsAndPrivacyWrapper" className="jpdVsB">
          <h4 id="TinyLinkText" className="gMIgWT czrHSx cQzbjF">
            Terms
          </h4>
          <span id="Marginer" className="idvxqK"></span>
          <h4 id="TinyLinkText" className="gMIgWT czrHSx cQzbjF">
            Privacy
          </h4>
        </div>
      </div>
      <span id="Marginer" className="ieypQ"></span>
    </div>
  );
}

export default FooterComponent;
