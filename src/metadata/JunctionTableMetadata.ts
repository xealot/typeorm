import {TableMetadata} from "./TableMetadata";

/**
 * This metadata interface contains all information about junction table.
 */
export class JunctionTableMetadata extends TableMetadata {

    // ---------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------

    constructor(name: string) {
        super(undefined, name);
    }

}