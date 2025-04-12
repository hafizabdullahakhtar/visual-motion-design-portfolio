// Replace with your actual SVG code for left and right arrows
const leftArrowSVG = (
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="M5 12h14M5 12l4-4m-4 4 4 4"
    />
  </svg>
);

const rightArrowSVG = (
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="M19 12H5m14 0-4 4m4-4-4-4"
    />
  </svg>
);

const ArrowIcon = ({ direction }) => {
  return (
    <div
      className="arrow-icon"
      style={{ display: "flex", alignItems: "center" }}
    >
      {direction === "left"
        ? leftArrowSVG
        : direction === "right"
        ? rightArrowSVG
        : null}
    </div>
  );
};

export default ArrowIcon;
