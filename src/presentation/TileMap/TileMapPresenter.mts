import { Presenter } from "../../application/Presenter.mjs";
import { TileMap } from "../../domain/TileMap.mjs";

export class TileMapPresenter implements Presenter<TileMap> {
    constructor(public elContainer: HTMLElement) { }

    present({ height, width, tiles }: TileMap): void {
        const canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d")!,
            tileSize = tiles[0][0].size;

        Object.assign(canvas, {
            width: width * tileSize,
            height: height * tileSize
        });

        tiles.forEach((row, y) =>
            row.forEach(({ image }, x) =>
                ctx.drawImage(image, x * tileSize, y * tileSize)
            )
        )

        this.elContainer.appendChild(canvas);
    }
}