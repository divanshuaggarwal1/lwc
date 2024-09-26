import { LightningElement, track } from 'lwc';

export default class Pagetwo extends LightningElement {
    @track selectedRecordId = '';
    @track selectedRecordId1 = '';
    data = ''
    data1 = ''
    @track selectedValue = 'Account';
    currentStep = '2';

    channelOptions = [
        { label: 'Account', value: 'Account' },
        { label: 'Contact', value: 'Contact' },
    ];

    handleChannelChange(event) {
        this.selectedValue = event.detail.value;
        this.selectedRecordId = null;
        console.log('Selected channel:', this.selectedValue);
    }
    handleRecordChange(event) {
        console.log('this.handleChannelChange : ');

        this.selectedRecordId = event.detail.recordId;

        console.log('this.selectedRecordId : ', this.selectedRecordId);
        this.data = this.recordUrl();
    }

    handleRecordChange1(event) {
        this.selectedRecordId1 = event.detail.recordId;

        console.log('this.selectedRecordId1 inside handleRecordChange1: ', this.selectedRecordId1);
        this.data1 = this.recordUrl1();

    }
    recordUrl() {
        return this.selectedRecordId ? `/lightning/r/${this.selectedRecordId}/view` : '';
    }
    recordUrl1() {
        return this.selectedRecordId ? `/lightning/r/${this.selectedRecordId1}/view` : '';
    }
    handleNext() {
        this.currentStep = '3';
    }
    handlePrevious() {
        this.currentStep = '1';
    }
}





