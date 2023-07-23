import { Control } from "../../application/Control.mjs";
import { Presenter } from "../../application/Presenter.mjs";
import { Repository } from "../../application/Repository.mjs";
import { UseCase } from "../../application/UseCase.mjs";
import { TileRepository } from "../../data/TileRepository.mjs";
import { Tile } from "../../domain/Tile.mjs";
import { HtmlPresenter } from "../HtmlPresenter.mjs";

class RenderTileUseCase implements UseCase<number, void> {
    constructor(
        private _repository: Repository<Tile>,
        private _presenter: Presenter<Tile>
    ) {}

    execute(id: number): void {
        const tile = this._repository.get(id);
        this._presenter.present(tile);
    }

}

class TilePresenter implements HtmlPresenter<Tile> {
    present({ id, size, url }: Tile): void {
        const tile = Object.assign(document.createElement('img'), {
            src: url,
            width: size,
            height: size,
            alt: `tile ${id}`
        })
        this
        document.body.appendChild(tile);
    }
}

export class TileControl extends Control {
    override accessor presenter = new TilePresenter();
    override accessor useCase = new RenderTileUseCase(
        new TileRepository(),
        this.presenter
    );

    constructor(readonly id: number) { super() }
}
