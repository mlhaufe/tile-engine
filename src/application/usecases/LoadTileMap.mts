import { Command } from "../UseCase.mjs";
import { Presenter } from "../Presenter.mjs";
import { Repository } from "../Repository.mjs";
import { TileMap } from "../../domain/TileMap.mjs";

export class LoadTileMap implements Command<string> {
    constructor(
        readonly presenter: Presenter<TileMap>,
        readonly repository: Repository<TileMap>
    ) { }

    async execute(id: string): Promise<void> {
        const tileMap = await this.repository.get(id);
        this.presenter.present(tileMap);
    }
}