import { Presenter } from "./Presenter.mjs";
import { UseCase } from "./UseCase.mjs";
import { ContainerControl } from "../presentation/ContainerControl.mjs";
import { Repository } from "./Repository.mjs";

export abstract class Control {
    accessor parent: ContainerControl | undefined
    accessor presenter: Presenter<any> | undefined
    accessor abstraction: any | undefined
    accessor repository: Repository<any> | undefined
    accessor useCase: UseCase<any, any> | undefined
}
