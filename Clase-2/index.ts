// INTERFACES  VS  TIPOS

type paymentMethodType = `Debito` | `Credito` | `Efectivo`;

interface IProductoBase {          //declaro una interface que va a contener atributos varios
    price: number;
    paymentMethod: `Debito` | `Credito` | `Efectivo`;
    nameClient: string;
}   

type ProductoBaseType = {         // declaro tipo de interface, llamando al tipo declarado arriba(ALT 124 |)
    price: number;
    paymentMethod: paymentMethodType;
    nameClient: string;
}  

// HERENCIA (HEREDAR ENTRE INTERFACE Y TIPO)

interface IFisica extends IProductoBase{           // ASI ESTAMOS HEREDANDO, TRAEMOS LO QUE TIENE IProductoBase
    ProductName : string;                         // SUMADO LO QUE LE AGREGAMOS DENTRO
    ClientAddres : string;
    Quantity : number;
}

type VirtualType = ProductoBaseType & {              // & CONVINO OBLIGATORIAMENTE
    TemplateName:string;                     // ACA CONVINO 
    Format: `jpg` | `png` | `pdf`;           // SELECTOR SE LLAMA ESTO
}

class ProductoVirtual implements VirtualType {
    price: number = 500;
    paymentMethod: paymentMethodType = `Efectivo`;
    nameClient: string = `Gaelito`;
    TemplateName: string = `Folleto`;
    Format: "jpg" | "png" | "pdf" = `pdf`;
}

class ProductoFisico implements IFisica {
    price: number = 500;
    paymentMethod: paymentMethodType = `Efectivo`;
    nameClient: string = `Gaelito`;
    ProductName: string = `Folleto`;
    Quantity: number = 10;
    ClientAddres: string = `Vergara 2764`;
}
