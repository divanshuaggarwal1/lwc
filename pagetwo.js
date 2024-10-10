import { LightningElement, track } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import getRecordName from '@salesforce/apex/DataTable.getRecordName';
import RemoveLWCCss from '@salesforce/resourceUrl/RemoveLWCCss';
export default class Pagetwo extends LightningElement {
    @track records = {}; // Initialize an empty object
    
    @track selectedValue = 'lwapic__Integration_Channel__c';
    currentStep = 2;

    channelOptions = [
        { label: 'Integration Channel', value: 'lwapic__Integration_Channel__c' },
        { label: 'ETL', value: 'lwapic__ETL__c' },
    ];

    renderedCallback() {
        loadStyle(this, RemoveLWCCss);
    }

    handleChannelChange(event) {
        this.selectedValue = event.detail.value;
        this.clearRecordData(); 
        console.log('Selected channel:', this.selectedValue);
    }
    handleRecordChange(event) {
        try{
        const index = event.target.dataset.index; // Retrieve the index from the data attribute
        const recordId = event.detail.recordId; // Get the selected recordId
        // const objectName = this.selectedValue; // Get the selected recordName
        let objectName = 'lwapic__Integration_Channel__c';
         // For record 1, use the selected channel
         if (index === '1') {
            objectName = this.selectedValue;
        }
       this.records[`data${index}`] = this.recordUrl(recordId);

        if (recordId && objectName) {
            getRecordName({ recordId: recordId, objectName: objectName })
            .then(recordName => {
                console.log(`Index: ${index}, Record ID: ${recordId}, Record Name: ${recordName}`);
                this.records[`recordId${index}`] = recordId;
                this.records[`recordName${index}`] = recordName;


                const filteredRecords = this.prepareFilteredJson();

                const recordChangeEvent = new CustomEvent('recordchange', {
                    detail: {
                        records: filteredRecords
                    }
                });
                this.dispatchEvent(recordChangeEvent);
                
                console.log('Dispatched records:', filteredRecords);
            })
            .catch(error => {
                console.error('Error fetching record name:', error);
            });        
        }
    }
    catch(e) {
        console.error('error from page 2 :' , e.message);
    }
    }
prepareFilteredJson() {
    const selectedChannel = this.selectedChannelType(); // Either 'ETL' or 'IntegrationChannel'
    
    return {
        [selectedChannel]: this.records.recordName1, 
        "recordName2": this.records.recordName2,
        "recordName3": this.records.recordName3,
        "recordName4": this.records.recordName4,
        "recordName5": this.records.recordName5
    };
}


 selectedChannelType() {
        if (this.selectedValue === 'lwapic__ETL__c') {
            return 'ETL';
        } else if (this.selectedValue === 'lwapic__Integration_Channel__c') {
            return 'IntegrationChannel';
        }
    }   
    
    recordUrl(recordId) {
        // Create the URL dynamically based on the recordId
        return recordId ? `/lightning/r/${recordId}/view` : '';
    }

    clearRecordData() {
        // Clear the records object dynamically
        this.records = {};
        console.log('Cleared all record data');
    }
}
