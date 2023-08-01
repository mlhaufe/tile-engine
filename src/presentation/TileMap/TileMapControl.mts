import { Control } from "../../application/Control.mjs";
import { LoadTileMap } from "../../application/usecases/LoadTileMap.mjs";
import { TileMapRepository } from "../../data/TileMapRepository.mjs";
import { TileMapPresenter } from "./TileMapPresenter.mjs";

export class TileMapControl extends Control {
    override accessor presenter = new TileMapPresenter(document.body);
    override accessor repository = new TileMapRepository();
    override accessor useCase = new LoadTileMap(this.presenter, this.repository);

    constructor(readonly mapId: string) { super() }

    render() { this.useCase.execute(this.mapId); }
}