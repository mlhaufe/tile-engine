import { Presenter } from "./Presenter.mjs";
import { UseCase } from "./UseCase.mjs";
import { ContainerControl } from "../presentation/ContainerControl.mjs";

export abstract class Control<A> {
    accessor parent: ContainerControl | null = null;
    accessor presenter: Presenter<any> | null = null;
    accessor abstraction: A | null = null;
    accessor useCase: UseCase<any, any> | null = null;
}
