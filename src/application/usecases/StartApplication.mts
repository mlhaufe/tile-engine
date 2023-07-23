import { Command } from "../UseCase.mjs";
import { Presenter } from "../Presenter.mjs";
import { Control } from "../Control.mjs";

export class StartApplication implements Command<void> {
    constructor(
        private _presenter: Presenter<Control>,
        private _tiles: Control[]
    ) { }

    execute(): void {
        this._tiles.forEach(tile => this._presenter.present(tile));
    }
}
