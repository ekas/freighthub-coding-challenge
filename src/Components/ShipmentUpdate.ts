import { ShipmentSearchIndex } from "./ShipmentSearchIndex";
import { ShipmentUpdateListenerInterface } from "../Interface/ShipmentUpdateListenerInterface";
import { ShipmentDataInterface } from "../Interface/ShipmentDataInterface";

export class ShipmentUpdate implements ShipmentUpdateListenerInterface {

  //Local Queue Implementation to Record all the incoming Updates
  private shipmentQueue: string[];

  /**Constructor with ShipmentSearchIndex Instance & Initializing shipmentQueue
   * @param ShipmentSearchIndex
   */
  constructor(private shipmentSearchIndex: ShipmentSearchIndex){
    this.shipmentQueue = [];
  }

  /** Implemented receiveUpdate method with custom TypeScript Interface.
   * Method checks if Shipment received for updation does already exist in Process. 
   * If not then adds it to the queue and calls updateShipment method.
   * But if exists then it returns.
   * @param ShipmentDataInterface
   */
  async receiveUpdate(shipmentData: ShipmentDataInterface) {
    console.log(`Shipment Receives an Update - ShipmentID: ${shipmentData.id}`);
    if(this.shipmentQueue.includes(shipmentData.id)){
      console.log(`Shipment ${shipmentData.id} already exists in the queue.`);
      return;
    }
    else{
      this.shipmentQueue.push(shipmentData.id);
    }

    try {
      await this.shipmentSearchIndex.updateShipment(shipmentData);
      console.log("Shipment Updated");
    } catch (error) {
      console.log("Shipment Updation Failed");
    }

    this.shipmentQueue = await this.shipmentQueue.filter(shipId => shipId !== shipmentData.id);
    console.log(`${this.shipmentQueue.length} Shipments left to be updated`)
  }
}