import { Tile } from "../../domain/Tile.mjs";
import { Command } from "../UseCase.mjs";
import { Presenter } from "../Presenter.mjs";
import { Repository } from "../Repository.mjs";

export class RenderTile implements Command<number> {
    constructor(
        readonly presenter: Presenter<Tile>,
        readonly repository: Repository<Tile>
    ) { }

    execute(id: number): void {
        const tile = this.repository.get(id);
        this.presenter.present(tile);
    }
}
