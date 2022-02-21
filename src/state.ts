import isMobile from "is-mobile";
import { createStore } from "solid-js/store";
import Game from "./game/Game";
import loadConfig from "./persistance/loadConfig";
import { BoardConfig, GameConfig } from "./types";

const mobile = isMobile();

const saved = loadConfig();

const initialBoardConfig: BoardConfig = {
  size: 1024,
  tiles: 8,
  boardStyle: "standard",
  piecesStyle: "tatiana",
  showBorder: !mobile,
  showExtraInfo: true,
  showMaterial: true,
  showMoveIndicator: true,
  showChecks: true,
  showCoords: true,
  flipped: false,
  anonymous: false,
};

const initialGameConfig: GameConfig = {
  titleScreen: true,
  format: "GIF",
  picSize: "M",
  animationSize: "M",
};

export type State = {
  boardConfig: BoardConfig;
  gameConfig: GameConfig;
  game: Game;
  pgn: string;
  fen: string;
  moves: string[];
  ply: number;
  mobile: boolean;
  activeTab: "game" | "load";
  playing: boolean;
};

const initialState: State = {
  boardConfig: {
    ...initialBoardConfig,
    ...saved.boardConfig,
    anonymous: false,
  },
  gameConfig: { ...initialGameConfig, ...saved.gameConfig },
  game: new Game(),
  pgn: "",
  fen: "",
  moves: [],
  ply: 0,
  mobile,
  activeTab: "load",
  playing: false,
};

const [state, setState] = createStore(initialState);

export { state, setState };