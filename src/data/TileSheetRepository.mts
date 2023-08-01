import { TileSheet } from "../domain/TileSheet.mjs";
import { Repository } from "../application/Repository.mjs";
import { Tile } from "../domain/Tile.mjs";

export class TileSheetRepository implements Repository<TileSheet> {
    accessor defaultTileSize: number = 70;

    async #loadTiles(size: number, url: string) {
        const response = await fetch(url),
            blob = await response.blob(),
            image = await createImageBitmap(blob),
            { width, height } = image,
            tiles = await Promise.all(
                Array.from({ length: width / size * height / size }, async (_, i) => {
                    const x = i % (width / size) * size,
                        y = Math.floor(i / (width / size)) * size,
                        img = await createImageBitmap(image, x, y, size, size);
                    return new Tile(i, size, img)
                })
            )
        image.close(); // No need to keep the image in memory after we've created the tiles
        return tiles
    }

    async get(id: string) {
        const size = this.defaultTileSize,
            url = require(`./assets/sheets/${id}-${size}.png`),
            tiles = await this.#loadTiles(size, url);
        return new TileSheet(id, size, tiles)
    }

    async getBySize(id: string, size: number) {
        const url = require(`./assets/sheets/${id}-${size}.png`),
            tiles = await this.#loadTiles(size, url);
        return new TileSheet(id, size, tiles)
    }
}