import { ShipmentSearchIndex } from "../src/Components/ShipmentSearchIndex";
import { ShipmentUpdate } from "../src/Components/ShipmentUpdate";
import { App } from "../src/App";

const shipmentSearchIndex = new ShipmentSearchIndex();
const shipmentUpdate = new ShipmentUpdate(shipmentSearchIndex);

const app = new App(shipmentUpdate);

/**
 * Test Case 2
 * Invoking updateMultiShipment which will update multiple records in the system concurrently.
 */
app.updateMultiShipment();