import { TileControl } from "./presentation/Tile/TileControl.mjs";
import { ApplicationControl } from "./presentation/ApplicationControl.mjs";

const tileEngine = new ApplicationControl(
    new TileControl(0),
    new TileControl(1),
    new TileControl(2)
);

tileEngine.start()
