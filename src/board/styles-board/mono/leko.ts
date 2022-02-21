import { Style } from "../../../types";

const style: Style = {
  name: "Leko",
  category: "mono",
  background: {
    type: "solid",
    data: {
      color: "transparent",
    },
  },
  dark: {
    type: "solid",
    data: {
      color: "#919caf",
    },
  },
  light: {
    type: "solid",
    data: {
      color: "#c0c2d0",
    },
  },
  moveIndicator: {
    type: "hueShift",
    data: -90,
  },
  border: {
    type: "solid",
    data: {
      color: "#58606e",
    },
  },
  coords: {
    onLight: "#58606e",
    onDark: "#dbe8ff",
    onBorder: "#dbe8ff",
  },
};

export default style;