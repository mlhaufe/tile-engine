import { Presenter } from "../../application/Presenter.mjs";
import { Tile } from "../../domain/Tile.mjs";

export class TilePresenter implements Presenter<Tile> {
    present({ id, size, url }: Tile): void {
        const htmlTile = Object.assign(document.createElement('img'), {
            src: url,
            width: size,
            height: size,
            alt: `tile ${id}`
        });
        this;
        document.body.appendChild(htmlTile);
    }
}
