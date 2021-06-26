import { LightningElement, wire } from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';

export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';
    error = undefined;
    searchOptions;

    @wire(getBoats, { boatTypeId: '$selectedBoatTypeId' })
    boatTypes({ error, data }) {
        if (data) {
            console.log("Data: ", data)
        } else if (error) {
            console.error("@wire Error: ", error)
        }
    }
}