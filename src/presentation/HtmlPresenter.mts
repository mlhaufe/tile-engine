import { Presenter } from "../application/Presenter.mjs";

export interface HtmlPresenter<T> extends Presenter<HTMLElement, T> {
    readonly element: HTMLElement;
}
