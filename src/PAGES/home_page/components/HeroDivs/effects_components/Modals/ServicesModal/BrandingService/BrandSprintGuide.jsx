import React from "react";
import ExpandableCard from "../components/ExpandableCard";

function BrandSprintGuide() {
  return (
    <ExpandableCard
      header="10 Day Sprint Process"
      custombackgroundColor="#000000"
      color="#fdfdfd"
      disableExpand={true}
      icon={
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="2 2 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
          />
        </svg>
      }
      onIconClick={() => {
        window.open(
          "https://library.gv.com/the-three-hour-brand-sprint-3ccabf4b768a",
          "_blank"
        );
      }}
    ></ExpandableCard>
  );
}

export default BrandSprintGuide;
