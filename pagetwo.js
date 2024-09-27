// import { LightningElement, track } from 'lwc';

// export default class Pagetwo extends LightningElement {
//     @track selectedRecordId = '';
//     @track selectedRecordId1 = '';
//     data = ''
//     data1 = ''
//     @track selectedValue = 'Account';
//     currentStep = '2';

//     channelOptions = [
//         { label: 'Account', value: 'Account' },
//         { label: 'Contact', value: 'Contact' },
//     ];

//     handleChannelChange(event) {
//         this.selectedValue = event.detail.value;
//         this.selectedRecordId = null;
//         console.log('Selected channel:', this.selectedValue);
//     }
//     handleRecordChange(event) {
//         console.log('this.handleChannelChange : ');

//         this.selectedRecordId = event.detail.recordId;

//         console.log('this.selectedRecordId : ', this.selectedRecordId);
//         this.data = this.recordUrl();
//     }

//     handleRecordChange1(event) {
//         this.selectedRecordId1 = event.detail.recordId;

//         console.log('this.selectedRecordId1 inside handleRecordChange1: ', this.selectedRecordId1);
//         this.data1 = this.recordUrl1();

//     }
//     recordUrl() {
//         return this.selectedRecordId ? `/lightning/r/${this.selectedRecordId}/view` : '';
//     }
//     recordUrl1() {
//         return this.selectedRecordId ? `/lightning/r/${this.selectedRecordId1}/view` : '';
//     }
//     handleNext() {
//         this.currentStep = '3';
//     }
//     handlePrevious() {
//         this.currentStep = '1';
//     }
// }
import { LightningElement, track } from 'lwc';

export default class Pagetwo extends LightningElement {
    @track selectedRecordId = '';
    @track selectedRecordId1 = '';
    @track selectedRecordId2 = '';
    @track selectedRecordId3 = '';
    @track selectedRecordId4 = '';
    data = ''
    data1 = ''
    data2 = ''
    data3 = ''
    data4 = ''
    @track selectedValue = 'Account';
        currentStep = '2';

    channelOptions = [
        { label: 'Account', value: 'Account' },
        { label: 'Contact', value: 'Contact' },
    ];

    handleChannelChange(event) {
        this.selectedValue = event.detail.value;
        // this.selectedRecordId = null;
        // console.log('Selected channel:', this.selectedValue);
        this.selectedRecordId = ''; 
        this.data = ''; 
        console.log('Selected channel:', this.selectedValue);
        console.log('Cleared selected record ID and URL');
        setTimeout(() => {
            this.selectedRecordId = ''; 
        }, 0);
    }
    handleRecordChange(event) {
        console.log('this.handleChannelChange : ');
        this.selectedRecordId = event.detail.recordId;
        console.log('this.selectedRecordId : ', this.selectedRecordId);
        this.data = this.recordUrl();
    }
    recordUrl() {
        return this.selectedRecordId ? `/lightning/r/${this.selectedRecordId}/view` : '';
    }

    handleRecordChange1(event) {
        this.selectedRecordId1 = event.detail.recordId;
        console.log('this.selectedRecordId1 inside handleRecordChange1: ', this.selectedRecordId1);
        this.data1 = this.recordUrl1();
    } 
    recordUrl1() {
        return this.selectedRecordId1 ? `/lightning/r/${this.selectedRecordId1}/view` : '';
    }

    handleRecordChange2(event) {
        this.selectedRecordId2 = event.detail.recordId;
        console.log('this.selectedRecordId2 inside handleRecordChange2: ', this.selectedRecordId2);
        this.data2 = this.recordUrl2();
    } 
    recordUrl2() {
        return this.selectedRecordId2 ? `/lightning/r/${this.selectedRecordId2}/view` : '';
    }

    handleRecordChange3(event) {
        this.selectedRecordId3 = event.detail.recordId;
        console.log('this.selectedRecordId3 inside handleRecordChange3: ', this.selectedRecordId3);
        this.data3 = this.recordUrl3();
    } 
    recordUrl3() {
        return this.selectedRecordId3 ? `/lightning/r/${this.selectedRecordId3}/view` : '';
    }

    handleRecordChange4(event) {
        this.selectedRecordId4 = event.detail.recordId;
        console.log('this.selectedRecordId4 inside handleRecordChange4: ', this.selectedRecordId4);
        this.data4 = this.recordUrl4();
    } 
    recordUrl4() {
        return this.selectedRecordId4 ? `/lightning/r/${this.selectedRecordId4}/view` : '';
    }
    handleNext() {
        this.currentStep = '3';
    }
    handlePrevious() {
        this.currentStep = '1';
    }
    renderedCallback() {
        if (this.channelChanged) {
            let recordPicker = this.template.querySelector('lightning-record-picker');
            if (recordPicker) {
                recordPicker.value = ''; 
                this.channelChanged = false; 
            }
        }
    }
}










