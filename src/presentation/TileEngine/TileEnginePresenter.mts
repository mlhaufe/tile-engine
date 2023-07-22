import { HtmlPresenter } from "../HtmlPresenter.mjs";
import { Tile } from "../../domain/Tile.mjs";

export class TileEnginePresenter extends HtmlPresenter<Tile> {
    get element(): HTMLElement { return document.body }

    present(tile: Tile): void {
        const img = document.createElement("img");
        img.src = require(`../../data/assets/${tile.id}-${tile.size}.png`)
        this.element.appendChild(img);
    }
}
