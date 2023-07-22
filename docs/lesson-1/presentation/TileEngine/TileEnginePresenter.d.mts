import { HtmlPresenter } from "../HtmlPresenter.mjs";
import { Tile } from "../../domain/Tile.mjs";
export declare class TileEnginePresenter extends HtmlPresenter<Tile> {
    get element(): HTMLElement;
    present(tile: Tile): void;
}
