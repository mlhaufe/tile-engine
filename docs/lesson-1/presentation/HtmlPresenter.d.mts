import { Presenter } from "../application/Presenter.mjs";
export declare abstract class HtmlPresenter<T> extends Presenter<T> {
    abstract get element(): HTMLElement;
}
