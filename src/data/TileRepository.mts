import { Repository } from "../application/Repository.mjs";
import { Tile } from "../domain/Tile.mjs";

export class TileRepository implements Repository<Tile> {
    get(id: number): Tile {
        const size = 64,
            url = require(`./assets/${id}-${size}.png`)
        return new Tile(id, size, url);
    }
}