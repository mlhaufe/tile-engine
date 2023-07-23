import { Entity } from "../domain/Entity.mjs";

export interface Repository<E extends Entity<any>> {
    get(id: E['id']): E;
}