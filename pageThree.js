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
    // decimalOptions = [
    //     { label: '0', value: '0' },
    //     { label: '1', value: '1' },
    //     { label: '2', value: '2' },
    //     { label: '3', value: '3' },

    // ];
    decimalOptions= [];
  
        generateDecimalOptions(){  
            for(let i=0; i<18; i++){
                this.decimalOptions.push({label: i.toString(), value: i.toString()})
            }
        }

    


    // handleAddRow() {
    //     const lastRow = this.data[this.data.length - 1];
    
    //     const isRowEmpty = !lastRow.name && !lastRow.type && !lastRow.decimal && !lastRow.length;
    //     const isNameFilled = !!lastRow.name; 
    
    //     if (isRowEmpty || isNameFilled) {
    //         const newId = this.data.length + 1;
    //         this.data = [
    //             ...this.data,
    //             {
    //                 id: newId,
    //                 name: '',
    //                 type: '',
    //                 decimal: '',
    //                 length: '',
    //                 filterable: false,
    //                 externalId: false,
    //                 sortable: false,
    //                 disableDelete: false
    //             }
    //         ];
    //         this.setRowIndices();
    //     } else {
    //         console.log('Cannot add a new row. Please fill the "Name" field or clear the current row.');
    //     }
    // }
    

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
                    disableDelete: false,
                    isDecimalDisabled: false,
                    isLengthDisabled: false

                }
            ];
            this.setRowIndices();
       
    }

    // handleInputChange(event) {
    //     // console.log("test::"+ event);
    //     const field = event.target.dataset.field;
    //     //  console.log("testfield::", field);

    //     const id = event.target.dataset.id;
    //     //  console.log("testid::"+ id);

    //     const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    //     // console.log("testvalue::"+ value);


    //     this.data = this.data.map((row) => {
    //         if (row.id == id) {
    //             return { ...row, [field]: value };
    //         }
    //         return row;
    //     });

    //     if (this.data[0].name && this.data[0].type && this.data[0].decimal && this.data[0].length) {
    //         setTimeout(() => {
    //             console.log('First row data:', JSON.stringify(this.data[0]));
    //         }, 0);
    //     }

    // }

    handleInputChange(event) {
        const field = event.target.dataset.field;
        const id = event.target.dataset.id;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.data = this.data.map((row) => {
            if (row.id == id) {
                const updatedRow = { ...row, [field]: value };

                if (updatedRow.type === 'Text' || updatedRow.type === 'Date/Time' || updatedRow.type === 'Date' || updatedRow.type === 'Time' || updatedRow.type === 'TextArea'|| updatedRow.type === 'URL'|| updatedRow.type === 'Phone'|| updatedRow.type === 'Checkbox') {
                    updatedRow.isDecimalDisabled = true;
                } else {
                    updatedRow.isDecimalDisabled = false;
                }

                if (updatedRow.type === 'Date/Time' || updatedRow.type === 'Date' || updatedRow.type === 'Time' || updatedRow.type === 'TextArea' || updatedRow.type === 'URL'|| updatedRow.type === 'Phone'|| updatedRow.type === 'Checkbox') {
                    updatedRow.isLengthDisabled = true;
                } else {
                    updatedRow.isLengthDisabled = false;
                }

                // updatedRow.isDecimalDisabled = updatedRow.type === 'Text';
                // updatedRow.isDecimalDisabled = updatedRow.type === 'Date/Time';
                // updatedRow.isLengthDisabled = updatedRow.type === 'Date/Time';
                // updatedRow.isDecimalDisabled = updatedRow.type === 'Date';
                // updatedRow.isLengthDisabled = updatedRow.type === 'Date';
                // updatedRow.isDecimalDisabled = updatedRow.type === 'Time';
                // updatedRow.isLengthDisabled = updatedRow.type === 'Time';




                return updatedRow;
            }
            return row;
        });
        if (this.data[0].name && this.data[0].type && this.data[0].decimal && this.data[0].length) {
                    setTimeout(() => {
                        console.log('First row data:', JSON.stringify(this.data[0]));
                    }, 0);
                }
    }



    handleDeleteRow(event) {
        const id = event.target.dataset.id;

        if (this.data.length === 1) {
            this.data = this.data.map((row) => {
                if (row.id == id) {
                    return {
                        ...row,
                        name: '',
                        type: '',
                        decimal: '',
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
    // setRowIndices() {
    //     this.data = this.data.map((row, index) => ({
    //         ...row,
    //         index: index + 1,
    //         isDecimalDisabled: row.type === 'Text' ,
    //         isDecimalDisabled: row.type === 'Date/Time' ,
    //         isLengthDisabled: row.type ==='Date/Time',
    //           isDecimalDisabled: row.type === 'Date' ,
    //         isLengthDisabled: row.type ==='Date',
    //           isDecimalDisabled: row.type === 'Time' ,
    //         isLengthDisabled: row.type ==='Time'

    //     }));
    // }
    setRowIndices() {
        this.data = this.data.map((row, index) => ({
            ...row,
            index: index + 1
        }));
    }

    handleNext() {
        const lastRow = this.data[this.data.length - 1];
        const isNameFilled = !!lastRow.name; 
        if ( isNameFilled) {
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
                            disableDelete: false,
                            isDecimalDisabled: false,
                            isLengthDisabled: false

                        }
                    ];
                    this.setRowIndices();
                    console.log('Activated');

                } else {
                    console.log('Cannot Activate. Please fill the "Name" field or delete the current row.');
                }
    }
    handlePrevious() {
        this.currentStep = '2';
    }

}
