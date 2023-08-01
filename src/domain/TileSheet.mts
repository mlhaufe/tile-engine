import { Tile } from "./Tile.mjs";

export class TileSheet {
    constructor(
        readonly id: string,
        readonly tileSize: number,
        readonly tiles: Tile[]
    ) { }
}