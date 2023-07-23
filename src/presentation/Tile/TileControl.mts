import { Control } from "../../application/Control.mjs";
import { RenderTile } from "../../application/usecases/RenderTile.mjs";
import { TileRepository } from "../../data/TileRepository.mjs";
import { TilePresenter } from "./TilePresenter.mjs";

export class TileControl extends Control {
    override accessor presenter = new TilePresenter();
    override accessor repository = new TileRepository();
    override accessor useCase = new RenderTile(this.presenter, this.repository);

    constructor(readonly id: number) { super() }

    render() { this.useCase.execute(this.id); }
}
