import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = '4d5799daf390ef78ccd53801e4154654338aa2f622fd62cd505324b63780531c';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);


export const notificationService = async(voterAddresses, slot) => {
    try {
        for (let i = 0, len = voterAddresses.length; i < len; i++){
          voterAddresses[i] = 'eip155:5:' + voterAddresses[i];
        }
        const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 4,
        identityType: 2,
        notification: {
          title: `Voting Reminder`,
          body: `Slot: ` + slot,
        },
        payload: {
          title: `Voting Reminder`,
          body: `Slot: ` + slot,
        },
        recipients: voterAddresses,
        channel: 'eip155:5:0xF026Bf4E05FF4289f51B9C5911445eE40578798b',
        env: 'staging'
    });
    } catch (err) {
        console.error('Error: ', err);
    }
}
