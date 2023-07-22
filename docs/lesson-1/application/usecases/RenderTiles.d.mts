import { Tile } from "../../domain/Tile.mjs";
import { UseCase } from "../UseCase.mjs";
import { Presenter } from "../Presenter.mjs";
export declare class RenderTiles implements UseCase<unknown, void> {
    readonly presenter: Presenter<Tile>;
    readonly tiles: Tile[];
    constructor(presenter: Presenter<Tile>, tiles: Tile[]);
    execute(): void;
}
