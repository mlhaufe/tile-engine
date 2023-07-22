import { Control } from "../application/Control.mjs";
export declare abstract class ContainerControl extends Control<void> {
    #private;
    constructor(...children: Control<any>[]);
    get children(): Control<any>[];
    addChild(child: Control<any>): void;
    removeChild(child: Control<any>): void;
}
