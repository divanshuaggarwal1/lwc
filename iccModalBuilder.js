import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class IccModelBuilder extends LightningModal  {   
       @api tableHeader  ;
        icChannelHeader = "Testing" ;
         @api tableDetails =
         {
          "headers": [
            {
              "label": "Connector Label"
            },
            {
              "label": "Values"
            }
          ],
          "rows": [
            {
              "label": "Master Label",
              "Value": "MS Dynamics",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "Developer Name",
              "Value": "MS Dynamics",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "EndpointURL",
              "Value": "https://api.businesscentral.dynamics.com/v2.0/{0}/Production/api/v2.0",
              "dataType": "url",
              "showUrl": true
            },
            {
              "label": "LogoURL",
              "Value": "MSDynamics.png",
              "dataType": "url",
              "showUrl": true
            },
            {
              "label": "PriorityNumber",
              "Value": 1,
              "dataType": "number",
              "showNumber": true
            },
            {
              "label": "AuthenticationType",
              "Value": "OAuth",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "Description",
              "Value": "MetadataforconnectionwithMSDynamics",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "IsActive",
              "Value": true,
              "dataType": "boolean",
              "showBoolean": true
            },
            {
              "label": "Authentication JSON",
              "dataType": "json",
              "Value": "[{\"authType\":\"MSDynamics\",\"label\":\"OAuth\",\"authFlowType\":\"MSDynamics\",\"Scope\":\"https://api.businesscentral.dynamics.com/.default\",\"AuthProviderUrl\":\"https://login.microsoftonline.com/{0}/oauth2/v2.0/token\",\"addTo\":\"\",\"description\":\"\",\"fields\":[{\"label\":\"Client Id\",\"name\":\"clientId\",\"value\":\"\",\"encrypted\":false,\"storeData\":false,\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"help\":\"Provide the Client Id\",\"dataSource\":\"\"},{\"label\":\"Client Secret\",\"name\":\"clientSecret\",\"value\":\"\",\"encrypted\":true,\"storeData\":false,\"dataType\":\"password\",\"isRequired\":true,\"validation\":\"\",\"help\":\"Provide the Client Secret\",\"dataSource\":\"\"},{\"label\":\"Tenant Id\",\"name\":\"tenantId\",\"value\":\"\",\"encrypted\":false,\"storeData\":false,\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"help\":\"Provide the Tenant Id\",\"dataSource\":\"\"},{\"label\":\"Company Id\",\"name\":\"companyId\",\"value\":\"\",\"encrypted\":false,\"storeData\":true,\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"help\":\"Provide the Company Id\",\"dataSource\":\"\"}]}]",
              "showJSON": true
            }
          ]
        }

        @api tableServiceDetails = {
          "headers": [
            {
              "label": "Service Label"
            },
            {
              "label": "Values"
            }
          ],
          "rows": [
            {
              "label": "Master Label",
              "Value": "MS Dynamics",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "Developer Name",
              "Value": "Create_Customer",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "Description",
              "Value": "",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "HelpLink",
              "Value": "Servicetocreateacustomer",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "ImplementationClass",
              "Value": "MSDynamicsCreateCustomerHandler",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "IsActive",
              "Value": true,
              "dataType": "boolean",
              "showBoolean": true
            },
            {
              "label": "Method",
              "Value": "POST",
              "dataType": "text",
              "showText": true
            },
            {
              "label": "VersionNumber",
              "Value": 1,
              "dataType": "number",
              "showNumber": true
            },
            {
              "label": "HasParentService",
              "Value": true,
              "dataType": "boolean",
              "showBoolean": true
            },
            {
              "label": "Default Mapping JSON",
              "dataType": "json",
              "showJSON": true,
              "Value": "[{\"Name\":\"Create Customer\",\"Channel_Name__c\":\"Create_Customer\",\"EndpointURL__c\":\"callout:{0}/companies({1})/customers\",\"Method__c\":\"POST\",\"Request_Data_Separator__c\":\"|\",\"Request_Header__c\":\"Accept=application/json\\nContent-Type=application/json\",\"Body_Content_Type__c\":\"JSON\",\"Body_Type__c\":\"raw\",\"Request_Payload__c\":\"{\\\"displayName\\\":\\\"{0}\\\",\\\"type\\\":\\\"Company\\\",\\\"addressLine1\\\":\\\"\\\",\\\"addressLine2\\\":\\\"\\\",\\\"city\\\":\\\"{1}\\\",\\\"state\\\":\\\"\\\",\\\"country\\\":\\\"\\\",\\\"postalCode\\\":\\\"\\\",\\\"phoneNumber\\\":\\\"{2}\\\",\\\"email\\\":\\\"{3}\\\",\\\"website\\\":\\\"\\\",\\\"taxLiable\\\":false,\\\"taxAreaId\\\":\\\"00000000-0000-0000-0000-000000000000\\\",\\\"taxRegistrationNumber\\\":\\\"\\\",\\\"currencyId\\\":\\\"00000000-0000-0000-0000-000000000000\\\",\\\"currencyCode\\\":\\\"INR\\\",\\\"paymentTermsId\\\":\\\"00000000-0000-0000-0000-000000000000\\\",\\\"shipmentMethodId\\\":\\\"00000000-0000-0000-0000-000000000000\\\",\\\"paymentMethodId\\\":\\\"00000000-0000-0000-0000-000000000000\\\",\\\"blocked\\\":\\\" \\\"}\",\"Service_Name__c\":\"Create_Customer\",\"Integration_Actions__r\":{\"totalSize\":1,\"done\":true,\"records\":[{\"Data_Separator__c\":\"|\",\"Handler_Name__c\":\"Create_Customer\",\"Mapping__c\":\"{\\\"customerNumber\\\":\\\"/number\\\",\\\"externalId\\\":\\\"/id\\\"}\",\"Order__c\":1,\"Type__c\":\"Callback Response\",\"Mapping_Type__c\":\"Key Value Pair\"}]}}]"
            },
            {
              "label": "ServiceInputJSON",
              "dataType": "json",
              "showJSON": true,
              "Value": "[{\"addTo\":\"RequestBody\",\"fields\":[{\"id\":1,\"label\":\"Display Name\",\"name\":\"displayName\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"invocableVarName\":\"displayName\",\"help\":\"Specifies the customer's name. This name will appear on all sales documents for the customer.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":2,\"label\":\"City\",\"name\":\"city\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"invocableVarName\":\"city\",\"help\":\"Please provide the city name\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":3,\"label\":\"Phone Number\",\"name\":\"phoneNumber\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"invocableVarName\":\"phoneNumber\",\"help\":\"Specifies the customer's telephone number.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":4,\"label\":\"Email\",\"name\":\"email\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":true,\"validation\":\"\",\"invocableVarName\":\"email\",\"help\":\"Specifies the customer's email address.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":5,\"label\":\"Type\",\"name\":\"type\",\"value\":\"\",\"dataType\":\"picklist\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"type\",\"help\":\"Specifies the type of customer, can be - Company or Person.\",\"dataMapper\":true,\"dataSource\":{\"source\":\"LOCAL\",\"redirectUri\":\"\",\"params\":[],\"type\":\"LOCAL\",\"values\":{\"Company\":\"Company\",\"Person\":\"Person\"}}},{\"id\":6,\"label\":\"Address Line 1\",\"name\":\"addressLine1\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"addressLine1\",\"help\":\"Please provide the address line 1\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":7,\"label\":\"Address Line 2\",\"name\":\"addressLine2\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"addressLine2\",\"help\":\"Please provide the address line 2\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":8,\"label\":\"State\",\"name\":\"state\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"state\",\"help\":\"Please provide the state name\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":9,\"label\":\"Country\",\"name\":\"country\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"country\",\"help\":\"Please provide the country name\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":10,\"label\":\"Postal Code\",\"name\":\"postalCode\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"postalCode\",\"help\":\"Please provide the postal code\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":11,\"label\":\"Website\",\"name\":\"website\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"website\",\"help\":\"Please provide the customer's website.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":12,\"label\":\"Tax Liable\",\"name\":\"taxLiable\",\"value\":\"false\",\"dataType\":\"boolean\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"taxLiable\",\"help\":\"Specifies if the customer is liable for tax.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":13,\"label\":\"Tax Area Id\",\"name\":\"taxAreaId\",\"value\":\"00000000-0000-0000-0000-000000000000\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"taxAreaId\",\"help\":\"Please provide the tax area ID.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":14,\"label\":\"Tax Registration Number\",\"name\":\"taxRegistrationNumber\",\"value\":\"\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"taxRegistrationNumber\",\"help\":\"Please provide the tax registration number\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":15,\"label\":\"Currency Id\",\"name\":\"currencyId\",\"value\":\"00000000-0000-0000-0000-000000000000\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"currencyId\",\"help\":\"Please provide the currency ID.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":16,\"label\":\"Currency Code\",\"name\":\"currencyCode\",\"value\":\"INR\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"currencyCode\",\"help\":\"Please provide the currency code.\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":17,\"label\":\"Payment Terms Id\",\"name\":\"paymentTermsId\",\"value\":\"00000000-0000-0000-0000-000000000000\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"paymentTermsId\",\"help\":\"Please provide the payment terms ID\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":18,\"label\":\"Shipment Method Id\",\"name\":\"shipmentMethodId\",\"value\":\"00000000-0000-0000-0000-000000000000\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"shipmentMethodId\",\"help\":\"Please provide the shipment method ID\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":19,\"label\":\"Payment Method Id\",\"name\":\"paymentMethodId\",\"value\":\"00000000-0000-0000-0000-000000000000\",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"paymentMethodId\",\"help\":\"Please provide the payment method ID\",\"dataMapper\":true,\"dataSource\":\"\"},{\"id\":20,\"label\":\"Blocked\",\"name\":\"blocked\",\"value\":\" \",\"dataType\":\"text\",\"isRequired\":false,\"validation\":\"\",\"invocableVarName\":\"blocked\",\"help\":\"Please provide the blocked status of the customer.\",\"dataMapper\":true,\"dataSource\":\"\"}]}]"
            }
          ]
        }


      //   get jsonRow() {
      //     const jsonRow = this.tableDetails.rows.find(row => row.dataType === 'json');
      //     console.log('Found JSON Row:', jsonRow); // Debugging statement
      //     return jsonRow ? JSON.stringify(JSON.parse(jsonRow.Value), null, 2) : null;
      // }
      get jsonDataRows() {
        return this.tableDetails.rows
            .filter(row => row.dataType === 'json')  // Filter only JSON rows
            .map(row => {
                    return {
                        label: row.label,
                        value: row.Value  // Parse and prettify the JSON
                    };
               
            });
    }
    
    get serviceJsonDataRows() {
        return this.tableServiceDetails.rows
            .filter(row => row.dataType === 'json')  // Filter only JSON rows
            .map(row => {
                    return {
                        label: row.label,
                        value: row.Value  //  JSON
                    };
              
            });
    }
        
    }
  


