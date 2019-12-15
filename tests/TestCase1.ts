import { ShipmentSearchIndex } from "../src/Components/ShipmentSearchIndex";
import { ShipmentUpdate } from "../src/Components/ShipmentUpdate";
import { App } from "../src/App";

const shipmentSearchIndex = new ShipmentSearchIndex();
const shipmentUpdate = new ShipmentUpdate(shipmentSearchIndex);

const app = new App(shipmentUpdate);

/**
 * Test Case 1
 * Invoking updateOneShipment multiple times to check it Shipment is only updated once
 * and throws a message on second turn that it is already being processed.
 */
app.updateOneShipment();
app.updateOneShipment();