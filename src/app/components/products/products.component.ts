import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products : Products[] = [];
  public addProducts : Products[]  = [];
  

constructor( public productService: ProductsService){
 
}

ngOnInit(){
  
  for (let index = 0; index <= 10; index++) {
        this.productService.getProducts().subscribe((res)=>{
          this.products = [...this.products, 
            {
              id: res[index].id,
              title: res[index].title,
              description: res[index].description,
              price: res[index].price,
              image:res[index].image
            }
        ]       

        })
  }
  
}

    addProduct(id:number){
          let newArr = this.products.filter((e,i) => {            
            if(e.id ===id){
              this.addProducts.push(e)
              console.log(e, i);
            }
          })
          
          // solo tenemos elementos unicos
          let unique: any = [];
          this.addProducts.forEach(function (item) {
            if(!unique.includes(item)){
              unique.push(item);
            }
          });

          this.addProducts = unique;
          console.log(this.addProducts);
    }

}
