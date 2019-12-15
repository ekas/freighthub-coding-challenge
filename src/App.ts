import { ShipmentUpdate } from "./Components/ShipmentUpdate";
import { ShipmentDataInterface } from "./Interface/ShipmentDataInterface";

import data from "./Data/sampleData.json"

export class App {

  //Indroducing 2 private variables for holding data from local JSON.
  private oneShipment: ShipmentDataInterface;
  private multiShipment: ShipmentDataInterface[];

  /**Constructor with ShipmentUpdate Instance & Initializing data in
   * @param ShipmentUpdate
   */
  constructor(private shipmentUpdate: ShipmentUpdate) {
    this.oneShipment = data[0];
    this.multiShipment = data;
  }

  /**Async method to update One Shipment record.
   */
  async updateOneShipment() {
    await this.shipmentUpdate.receiveUpdate(this.oneShipment);
  }

  /**Async implementation of a map function to update Multiple Shipment records concurrently.
   */
  updateMultiShipment() {
    this.multiShipment.map(async (shipmentData) => {
      await this.shipmentUpdate.receiveUpdate(shipmentData);
    });
  }
}