import { ShipmentDataInterface } from "./ShipmentDataInterface";

export interface ShipmentUpdateListenerInterface {
  receiveUpdate(shipmentData: ShipmentDataInterface)
}