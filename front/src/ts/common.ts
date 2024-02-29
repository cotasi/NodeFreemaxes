export interface Busts1 {
    bus_com: any;
    bus_name: any;
    bus_stop: any;
    bus_type: any;
    region_bus_num: any;
    region_num: any;
}

export interface Busts2 {
    region_num:any;
    region_name: any;
}

export interface Businesss {
    business_id:number,
    business_name: string,
    business_program: string
}

export interface Mainform {
    form_id: number,
    form_name: string,
    form_tel: string,
    form_email: string,
    form_text: string
}

export interface Store1 {
    store_id: any,
    store_type: any
}

export interface Store2 {
    store_id: number,
    store_new_id: number,
    store_product_path: string,
    store_product_name: string,
    store_product_price: string,
    store_product_sales: string,
    store_product_issale: boolean
}

export interface Storeall {
    store_id: any,
    store_type: any,
    store_detail: Store2[]
}

export interface Menuall {
    menu_id: any,
    menu1: any,
    menuen: any,
    href1: any,
    menu2:{ menu_id: any,
            submenu_id: any,
            name: any,
            href: any }
}

export interface Sub {
    submenu_id: any,
    menu_id: any,
    name: any,
    href: any
}