import { TileControl } from "./presentation/Tile/TileControl.mjs";

const tiles = [
    new TileControl(0),
    new TileControl(1),
    new TileControl(2)
]

tiles.forEach(tile => tile.render())