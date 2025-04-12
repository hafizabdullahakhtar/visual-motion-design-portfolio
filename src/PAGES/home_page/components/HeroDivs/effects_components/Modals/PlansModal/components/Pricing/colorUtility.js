// utils/colorUtils.js
export function darkenHexColor(hex, percent) {
  // Remove the leading #
  hex = hex.replace(/^#/, "");

  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Calculate the adjustment
  const adjust = (color) =>
    Math.max(0, Math.min(255, Math.floor(color * (1 - percent / 100))));

  // Apply the adjustment
  r = adjust(r);
  g = adjust(g);
  b = adjust(b);

  // Convert RGB back to HEX
  const toHex = (color) => color.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function lightenHexColor(hex, percent) {
  // Remove the leading #
  hex = hex.replace(/^#/, "");

  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Calculate the adjustment
  const adjust = (color) =>
    Math.max(
      0,
      Math.min(255, Math.floor(color + (255 - color) * (percent / 100)))
    );

  // Apply the adjustment
  r = adjust(r);
  g = adjust(g);
  b = adjust(b);

  // Convert RGB back to HEX
  const toHex = (color) => color.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
