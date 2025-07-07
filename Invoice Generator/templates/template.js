const invoice = {
    business: {
        company: "Example Ltd",
        address: "123, Salsbury Lane, Leeds, UK, SP2B 2FE",
        phone: "+44 64 7829 1800 0106",
        registration: "12345678",
        VAT: "GB123456789",   
    },

    customer: 
        {
          name: "John Doe",
          billingAddress: "456, Doe Street, Birmingham, UK, B2 3AF"  
        },

    details:
        {
          UniqueID: "INV-001-2025",
          InvoiceDate: "01-08-2025",
          PaymentDueDate: "01-09-2025"  
        },
        
    goodOrService:
        {
          Description: "Developing an app to generate invoices as a PDF",
          Quantity: "20",
          UnitPrice: "500",
          TotalPrice: "10,000",  
          BeforeVat: "10,000",
          Vat: "2,000",
          TotalAmountDue: "12,000",
          Terms: "Payment should be made Within 30 days",
        },

    bankDetails:
        {
          AccountNumber: "12345678",
          SortCode: "12-34-56",
          Reference: "Invoice INV-001-2025"
        }
};
