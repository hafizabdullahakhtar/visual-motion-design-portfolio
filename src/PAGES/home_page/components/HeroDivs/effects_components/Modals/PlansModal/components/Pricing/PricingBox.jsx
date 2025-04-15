import React from "react";
import "./PricingBox.css";
import { lightenHexColor, darkenHexColor } from "./colorUtility";
import ActionButton from "../../../../../../ActionButton/ActionButton";

function PricingBox({ pricingTag, price, priceUnit, description, color }) {
  // Darken the color by 20%
  const darkerColor = darkenHexColor(color, 10);
  const lighterColor = lightenHexColor(color, 70);
  const moredarkerColor = darkenHexColor(color, 50);

  return (
    <div
      className="pricing"
      style={{
        backgroundColor: lighterColor,
        border: `1px solid ${darkerColor}`,
      }}
    >
      <div className="pricingtag" style={{ backgroundColor: color }}>
        {pricingTag}
      </div>

      {price ? (
        <>
          <div className="price">
            {price}
            <span>{priceUnit}</span>
          </div>
          <div className="pricing_description">{description}</div>
        </>
      ) : (
        <div className="price action_area">
          <ActionButton
            text="Get Pricing"
            isPrimary={true}
            buttonColor={moredarkerColor}
          />
        </div>
      )}
    </div>
  );
}

export default PricingBox;
