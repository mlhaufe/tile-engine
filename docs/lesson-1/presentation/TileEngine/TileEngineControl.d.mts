import { ContainerControl } from "../ContainerControl.mjs";
import { TileEnginePresenter } from "./TileEnginePresenter.mjs";
import { RenderTiles } from "../../application/usecases/RenderTiles.mjs";
export declare class TileEngineControl extends ContainerControl {
    accessor presenter: TileEnginePresenter;
    accessor useCase: RenderTiles;
    start(): void;
}
