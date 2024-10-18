import { LightningElement, track, api } from 'lwc';

export default class IccDatatable extends LightningElement {
   
    @api tableDetails;
    @api tableServiceDetails;
    @api tableHeader;

}