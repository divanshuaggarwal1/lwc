import { api, LightningElement, track } from 'lwc';
import saveFieldData from '@salesforce/apex/DataTable.saveFieldData';
export default class PageThree extends LightningElement {
    currentStep = '3';
    @track ind;
    @track fieldData = [
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
    decimalOptions = [];


    generateDecimalOptions() {
        for (let i = 0; i < 18; i++) {
            this.decimalOptions.push({ label: i.toString(), value: i.toString() })
        }
    }

    handleAddRow() {
        const newId = this.fieldData.length + 1;
        //console.log("tesing progress2", this.fieldData);
        this.fieldData = [
            ...this.fieldData,
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
        //console.log("tesing progress3", this.fieldData);

        this.setRowIndices();

    }

    handleInputChange(event) {
        try{

        
        const field = event.target.dataset.field;

        const id = event.target.dataset.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
       // console.log("tesing progress4", this.fieldData);
       // console.log(`id : ${id}`);
        this.fieldData = this.fieldData.map((row) => {
            if (row.id == id) {
                //console.log(`field : ${field}`);
                //console.log(`value : ${value}`);
                const updatedRow = { ...row, [field]: value };


                if (updatedRow.fieldType === 'Text' || updatedRow.fieldType === 'Date/Time' || updatedRow.fieldType === 'Date' || updatedRow.fieldType === 'Time' || updatedRow.fieldType === 'TextArea' || updatedRow.fieldType === 'URL' || updatedRow.fieldType === 'Phone' || updatedRow.fieldType === 'Checkbox') {
                    updatedRow.isDecimalDisabled = true;
                } else {
                    updatedRow.isDecimalDisabled = false;
                }

                if (updatedRow.fieldType === 'Date/Time' || updatedRow.fieldType === 'Date' || updatedRow.fieldType === 'Time' || updatedRow.fieldType === 'TextArea' || updatedRow.fieldType === 'URL' || updatedRow.fieldType === 'Phone' || updatedRow.fieldType === 'Checkbox') {
                    updatedRow.isLengthDisabled = true;
                } else {
                    updatedRow.isLengthDisabled = false;
                }
                //console.log(`this.fieldData :: ${JSON.stringify(this.fieldData)}`);
                //console.log(`updatedRow : ${JSON.stringify(updatedRow)}`);
                return updatedRow;
            }

            return row;
        });
        // Send a copy of the updated fieldData
        this.dispatchEvent(new CustomEvent('fielddatachange', { 
            detail: [...this.fieldData]  
        }));
    }catch(e) {
        console.error('error :' , e.message);
    }
    }



    handleDeleteRow(event) {
        const id = event.target.dataset.id;

        if (this.fieldData.length === 1) {
            this.fieldData = this.fieldData.map((row) => {
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
            this.fieldData = this.fieldData.filter((row) => row.id != id);
            this.setRowIndices();
        }
    }

    connectedCallback() {
        this.setRowIndices();
        this.generateDecimalOptions();
    }

    setRowIndices() {
        this.fieldData = this.fieldData.map((row, index) => ({
            ...row,
            index: index + 1
        }));
    }

}
