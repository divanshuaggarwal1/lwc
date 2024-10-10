// import { LightningElement } from 'lwc';

// export default class PageOne extends LightningElement {
//     formData = {
//         object: '',
//         source: '',
//         service: '',
//         Description: ''
//     };

//     handleInputChange(event) {
//         try {
//             console.log('Input changed:', event.target.name, 'Value:', event.target.value);
//             const { name, value } = event.target;

//             if ((name === 'object' || name === 'source') && value.includes(' ')) {
//                 // If a space is found, show an error message and return (prevent updating formData)
//                 event.target.setCustomValidity('No spaces are allowed in the object or source name.');
//                 event.target.reportValidity();
//                 return;
//             } else {
//                 // Clear any previous error if validation passes
//                 event.target.setCustomValidity('');
//                 event.target.reportValidity();
//             }


//             this.formData = {
//                 ...this.formData,
//                 [name]: value
//             };
//             const objectDataEvent = new CustomEvent('objectdatachange', {
//                 detail: this.formData
//             });
    
//             this.dispatchEvent(objectDataEvent);
//             // console.log('Data dispatched to parent:', this.formData);

//         } catch (e) {
//             console.error('Error from page 1:', e.message);
//         }
//     }
 
// }
import { LightningElement } from 'lwc';

export default class PageOne extends LightningElement {
    formData = {
        object: '',
        source: '',
        service: '',
        Description: ''
    };

    // Define input fields directly
    inputFields = [
        { label: 'Data virtualization object name', name: 'object', placeholder: 'Enter virtualization object name', type: 'text', required: true },
        { label: 'Data virtualization source name', name: 'source', placeholder: 'Enter virtualization source name', type: 'text' },
        { label: 'Data virtualization Service name', name: 'service', placeholder: 'Enter virtualization Service name', type: 'text' }
    ];

   get inputFieldsWithValues() {
        return this.inputFields.map(field => ({
            ...field,
            value: this.formData[field.name] 
        }));
    }

    handleInputChange(event) {
        console.log("its tsets",event);
        this.formData.object= event.detail.value
        console.log("itsform", this.formData.object);

        const name = event.target.name;
        const value = event.target.value;

        if ((name === 'object' || name === 'source') && value.includes(' ')) {
            event.target.setCustomValidity('No spaces are allowed in the object or source name.');
            event.target.reportValidity();
            return;
        }

        event.target.setCustomValidity('');
        event.target.reportValidity();

        // this.formData[name] = value;
        this.formData = { ...this.formData, [name]: value };

        const objectDataEvent = new CustomEvent('objectdatachange', {
            detail: this.formData
        });
        this.dispatchEvent(objectDataEvent);
    }
}
