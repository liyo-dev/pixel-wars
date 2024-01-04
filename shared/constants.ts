export const WIDTH = 50;
export const HEIGHT = 60;

export const PIXEL_SIZE = 32;

export const COLORS_NAMES = {
  red: "#f56c6c",
  green: "#6cf56e",
  blue: "#6cccf5",
  yellow: "#f5f06c",
  brightBlue: "#6c75f5",
  pink: "#f56ce5",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const COLORS = Object.values(COLORS_NAMES);

export const KEYS = {
  tiles: "tiles",
} as const;

export const CHANNELS = {
  PIXEL_UPDATE: "pixel-update",
};
