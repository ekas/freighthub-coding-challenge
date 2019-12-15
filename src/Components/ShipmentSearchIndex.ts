import { ShipmentDataInterface } from "../Interface/ShipmentDataInterface"

async function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

async function randomDelay() {
    const randomTime = Math.round(Math.random() * 1000)
    return sleep(randomTime)
}

export class ShipmentSearchIndex {
    async updateShipment(shipmentData: ShipmentDataInterface) {
        const startTime = new Date()
        await randomDelay()
        const endTime = new Date()
        console.log(`update ${shipmentData.id}@${
            startTime.toISOString()
            } finished@${
            endTime.toISOString()
            }`
        )

        return { startTime, endTime }
    }
}