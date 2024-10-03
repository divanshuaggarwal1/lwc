import { LightningElement, track } from 'lwc';
import saveFieldData from '@salesforce/apex/DataTable.saveFieldData';
export default class PageThree extends LightningElement {
    currentStep = '3';
    @track ind;
     cardTitle = 'Data Virtualization - dd Object Configuration';

    @track data = [
        {
            id: 1,
            name: '',
            fieldType: '',
            decimalValue: '',
            length: '',
            filterable: false,
            externalId: false,
            sortable: false,
            disableDelete: false,
            isDecimalDisabled: false,
            isLengthDisabled: false

        }
    ];
    fieldTypeOptions = [
        { label: 'Text', value: 'Text' },
        { label: 'Number', value: 'Number' },
        { label: 'Date/Time', value: 'Date/Time' },
        { label: 'Date', value: 'Date' },
        { label: 'Time', value: 'Time' },
        { label: 'TextArea', value: 'TextArea' },
        { label: 'Checkbox', value: 'Checkbox' },
        { label: 'URL', value: 'URL' },
        { label: 'Phone', value: 'Phone' },
        { label: 'Percent', value: 'Percent' }
    ];
    decimalOptions= [];
  
        generateDecimalOptions(){  
            for(let i=0; i<18; i++){
                this.decimalOptions.push({label: i.toString(), value: i.toString()})
            }
        }
    
    handleAddRow() {    
            const newId = this.data.length + 1;
            this.data = [
                ...this.data,
                {
                    id: newId,
                    name: '',
                    fieldType: '',
                    decimalValue: '',
                    length: '',
                    filterable: false,
                    externalId: false,
                    sortable: false,
                    disableDelete: false,
                    isDecimalDisabled: false,
                    isLengthDisabled: false

                }
            ];
            this.setRowIndices();
       
    }

    handleInputChange(event) {
        const field = event.target.dataset.field;     
          console.log("value::::" ,field);

        const id = event.target.dataset.id;
        console.log("value::::" ,id);
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
       console.log("value::::" ,JSON.stringify(value));
        this.data = this.data.map((row) => {
            if (row.id == id) {
                const updatedRow = { ...row, [field]: value };

                if (updatedRow.fieldType === 'Text' || updatedRow.fieldType === 'Date/Time' || updatedRow.fieldType === 'Date' || updatedRow.fieldType === 'Time' || updatedRow.fieldType === 'TextArea'|| updatedRow.fieldType === 'URL'|| updatedRow.fieldType === 'Phone'|| updatedRow.fieldType === 'Checkbox') {
                    updatedRow.isDecimalDisabled = true;
                } else {
                    updatedRow.isDecimalDisabled = false;
                }

                if (updatedRow.fieldType === 'Date/Time' || updatedRow.fieldType === 'Date' || updatedRow.fieldType === 'Time' || updatedRow.fieldType === 'TextArea' || updatedRow.fieldType === 'URL'|| updatedRow.fieldType === 'Phone'|| updatedRow.fieldType === 'Checkbox') {
                    updatedRow.isLengthDisabled = true;
                } else {
                    updatedRow.isLengthDisabled = false;
                }

                return updatedRow;
            }
            return row;
        });
               
    }



    handleDeleteRow(event) {
        const id = event.target.dataset.id;

        if (this.data.length === 1) {
            this.data = this.data.map((row) => {
                if (row.id == id) {
                    return {
                        ...row,
                        name: '',
                        fieldType: '',
                        decimalValue: '',
                        length: '',
                        filterable: false,
                        externalId: false,
                        sortable: false,
                        isDecimalDisabled: false,
                        isLengthDisabled: false

                    };
                }
                return row;
            });
        } else {
            this.data = this.data.filter((row) => row.id != id);
            this.setRowIndices();
        }
    }

    connectedCallback() {
        this.setRowIndices();
        this.generateDecimalOptions();
    }

    setRowIndices() {
        this.data = this.data.map((row, index) => ({
            ...row,
            index: index + 1
        }));
    }

        handleNext() {
            console.log('this.data = ',this.data);
            let allRowsData = [];
            let isAllRowsValid = true;
            this.data.forEach(row => {
                if (!row.name && !row.fieldType) {
                   isAllRowsValid = false; 
                }
            });
            if (isAllRowsValid && this.data.length > 0) {
                console.log('All filled rows data:', JSON.stringify(this.data));
                    saveFieldData({ fieldData: JSON.stringify(this.data) })
                    .then((result) => {
                        console.log('Apex result:', result);
                        this.currentStep = 'next';
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } else {
                console.log('Cannot Activate. Please fill all required fields for each row or delete invalid rows.');
            }
        }
    handlePrevious() {
        this.currentStep = '2';
    }

}
