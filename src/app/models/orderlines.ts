export class Orderlines {

    OrderLineid: number;
    OrderLineItemName: string;
    itemPrice: number;
    OrderLineamount: number;
    totalPriceOrder: number;
    itemImage: string; 

    constructor(){
       this.OrderLineid=0;
       this.OrderLineItemName= '';
       this.itemPrice=0;
       this.OrderLineamount=0;
       this.totalPriceOrder=0;
       this.itemImage='';
       
    }
}
