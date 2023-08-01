import { Tile } from "./Tile.mjs";
import { TileSheet } from "./TileSheet.mjs";

export class TileMap {
    constructor(
        readonly id: string,
        readonly width: number,
        readonly height: number,
        readonly tileSheet: TileSheet,
        readonly tiles: Tile[][]
    ) {
        const ts = tiles.flat();
        if (ts.length < 1)
            throw new Error("TileMap must have at least one tile");
        if (ts.some(tile => !tileSheet.tiles.includes(tile)))
            throw new Error("TileMap cannot contain tiles not in its tileSheet");
        if (ts.length !== width * height)
            throw new Error("TileMap must have width * height tiles");
    }
}