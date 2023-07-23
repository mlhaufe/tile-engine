import { ContainerControl } from "./ContainerControl.mjs";
import { StartApplication } from "../application/usecases/StartApplication.mjs";
import { HtmlPresenter } from "./HtmlPresenter.mjs";

class ApplicationPresenter implements HtmlPresenter {
    present(): void {
        const title = Object.assign(document.createElement('h1'), {
            textContent: 'Tile Engine'
        });
        document.body.appendChild(title);
    }
}

export class ApplicationControl extends ContainerControl {
    accessor presenter = new ApplicationPresenter();
    accessor useCase = new StartApplication(
        this.presenter,
        this.children.map(child => child.abstraction)
    );

    start() { this.useCase.execute(); }
}
