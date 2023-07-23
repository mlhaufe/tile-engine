import { Presenter } from "../../application/Presenter.mjs";
import { Tile } from "../../domain/Tile.mjs";
export declare class TilePresenter implements Presenter<Tile> {
    present({ id, size, url }: Tile): void;
}
