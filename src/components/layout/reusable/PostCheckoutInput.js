import React, { useState } from "react";
import WarningSvg from "../../assets/WarningSvg";
import CheckSvg from "../../assets/CheckSvg";
import PencilSvg from "../../assets/PencilSvg";

function PostCheckoutInput(props) {
  const { error, orderState } = props;

  const [clicked, setClicked] = React.useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div id="addressSection AccordionParent" className="sc-cfQIsQ dNczxK">
        <div id="addressSection AccordionButton" className="sc-jDfIjF czXqCR">
          <button
            style={{ cursor: props.dropdown ? "pointer" : "default" }}
            onClick={handleClicked}
            id="OrderPlacedPageGridCell"
            className="sc-hQIyOC bVOsmc"
          >
            <div id="SummarisedSection" className="sc-hgRfpC foWCkQ">
              <div id="SectionLeftContainer" className="sc-fiSPbx khYJsg">
                {error.true &&
                error.msg_code ==
                  "shipping_not_available_for_selected_address" ? (
                  <WarningSvg />
                ) : (
                  <CheckSvg />
                )}
              </div>
              <div id="SectionRightContainer" className="sc-lgholE hxAOwI">
                <h4
                  id="SmallBodyText"
                  color="rgba(0, 0, 0, 0.7)"
                  className="sc-dGQEGF sc-iuxOeI mLSed jKvjvD"
                >
                  {props.title}
                </h4>
                {props.children}
              </div>
            </div>
          </button>
          <div style={{ marginTop: 30, marginRight: 8 }}>
            {props.dropdown && <PencilSvg handleClicked={handleClicked} />}
          </div>
        </div>
        {props.dropdown && clicked && <>{props.dropdown}</>}
      </div>
    </div>
  );
}

export default PostCheckoutInput;
