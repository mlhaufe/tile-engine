import { Tile } from "../../domain/Tile.mjs";
import { Command } from "../UseCase.mjs";
import { Presenter } from "../Presenter.mjs";
import { Repository } from "../Repository.mjs";

export class RenderTile implements Command<number> {
    constructor(
        readonly presenter: Presenter<Tile>,
        readonly repository: Repository<Tile>
    ) { }

    async execute(id: number): Promise<void> {
        const tile = await this.repository.get(id);
        this.presenter.present(tile);
    }
}
