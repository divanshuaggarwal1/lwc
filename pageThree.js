import { LightningElement, track } from 'lwc';
export default class PageThree extends LightningElement {
    currentStep = '3';
    @track ind;
    @track data = [
        {
            id: 1,
            name: '',
            type: '',
            decimal: '',
            length: '',
            filterable: false,
            externalId: false,
            sortable: false,
            disableDelete: true

        }
    ];
    fieldTypeOptions = [
        { label: 'Text', value: 'Text' },
        { label: 'Number', value: 'Number' },
        { label: 'Date', value: 'Date' }
    ];
    decimalOptions = [
        { label: '0', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' }
    ];
    handleAddRow() {
        const newId = this.data.length + 1;
        this.data = [
            ...this.data,
            {
                id: newId,
                name: '',
                type: '',
                decimal: '',
                length: '',
                filterable: false,
                externalId: false,
                sortable: false,
                disableDelete: false
            }
        ];
        this.setRowIndices();

    }
    handleInputChange(event) {
        // console.log("test::"+ event);
        const field = event.target.dataset.field;
        //  console.log("testfield::", field);

        const id = event.target.dataset.id;
        //  console.log("testid::"+ id);

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // console.log("testvalue::"+ value);


        this.data = this.data.map((row) => {
            if (row.id == id) {
                return { ...row, [field]: value };
            }
            return row;
        });
        // console.log("thistestvalue::", this.data );
        //console.log(`Row ${id} updated:`, this.data.find(row => row.id == id));
        // if (this.data[0].name && this.data[0].type && this.data[0].decimal && this.data[0].length) {
        //     console.log('First row data:', JSON.parse(JSON.stringify(this.data[0]))); // Log a copy
        // }
        // console.log('Updated data:', JSON.stringify(this.data, null, 2));
        if (this.data[0].name && this.data[0].type && this.data[0].decimal && this.data[0].length) {
            setTimeout(() => {
                console.log('First row data:', JSON.stringify(this.data[0], null, 2));
            }, 0);
        }

    }

    handleDeleteRow(event) {
        console.log("delete test::" + event);
        const id = event.target.dataset.id;
        this.data = this.data.filter((row) => row.id != id);
        this.setRowIndices();
        //this.data = this.data.filter((row) => row.id != id).map((row, idx) => ({
        //     ...row,
        //     index: idx + 1 // Recalculate index for remaining rows
        // }));
    }
    connectedCallback() {
        // Set initial index for rows
        this.setRowIndices();
    }

    // Set index for each row in the data
    setRowIndices() {
        this.data = this.data.map((row, index) => ({
            ...row,
            index: index + 1 // Calculate and assign the index for each row
        }));
    }

    handleNext() {
        this.currentStep = '4';
    }
    handlePrevious() {
        this.currentStep = '2';
    }

}