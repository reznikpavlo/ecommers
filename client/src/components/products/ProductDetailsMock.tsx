/*
Changes to data: 
1) Added name field;
2) Added description Field;
3) Changed attachments field from [{ image: "link" }] to ["link"]
*/

export const productDetailsMock = {
    id: "prod_id",
    name: "Asus",
    description: "Asus X55A Laptop 2 GB RAM, 4 Intel Cores", 
    category: "Electronics",
    attachments: ["link"],
    delivery: {
        handlingTime: "2 days",
        shippingRates: {
            id: "shipping_rate_id"
        },
        additionalInfo: "Shipping processed MON to FRI",
        /** Format: date-time */
        shipmentDate: "08/08/2024 03:05:15 PM"
    },
    publication: {
        duration: "2 months",
        /** Format: date-time */
        endAt: "08/08/2024 03:05:15 PM",
        /** Format: date-time */
        startAt: "08/08/2024 03:05:15 PM",
        status: "Active",
        republish: false,
        endedBy: ""
    },
    language: "EN",
    validation: {
        error: [], //array of strings
        warnings: [], //array of strings
        /** Format: date-time */
        validationDate: "08/08/2024 03:05:15 PM"
    },
    saleAfterService: {
        warranty: {
            id: "warranty_id"
        },
        returnPolicy: {
            id: "return_policy_id"
        },
        userWarranty: {
            id: "user_warranty_id"
        }
    },
    stock: {
        avaiable: 21,
        unit: "stuck"
    },
    contact: {
        id: "contact_id"
    },
    locations: {
        id: "location_id",
        city: "Edmonton",
        country: "CA",
        postCode: "R21 3U7",
        province: "Alberta"
    },
    tax: { rates: { rate: 15, country: "CA", province: "Alberta" } }
};