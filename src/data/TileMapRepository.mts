import { Repository } from "../application/Repository.mjs";
import { TileMap } from "../domain/TileMap.mjs";
import { TileSheetRepository } from "./TileSheetRepository.mjs";

interface TileMapDto {
    id: string;
    width: number;
    height: number;
    tileSheetId: string;
    tileIds: number[][];
}

export class TileMapRepository implements Repository<TileMap> {
    #tileSheetRepository = new TileSheetRepository();
    async get(id: string): Promise<TileMap> {
        const json = require(`./assets/maps/${id}.json`) as TileMapDto,
            { width, height, tileSheetId, tileIds } = json,
            tileSheet = await this.#tileSheetRepository.get(tileSheetId),
            tiles = tileIds.map(row => row.map(id => tileSheet.tiles[id])),
            tileMap = new TileMap(id, width, height, tileSheet, tiles);

        return tileMap;
    }
}