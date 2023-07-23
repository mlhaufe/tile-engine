import { Presenter } from "../../application/Presenter.mjs";
import { Tile } from "../../domain/Tile.mjs";

export class TilePresenter implements Presenter<Tile> {
    constructor(public elContainer: HTMLElement) { }

    present({ id, size, url }: Tile): void {
        const htmlTile = Object.assign(document.createElement('img'), {
            src: url,
            width: size,
            height: size,
            alt: `tile ${id}`
        });
        this.elContainer.appendChild(htmlTile);
    }
}
