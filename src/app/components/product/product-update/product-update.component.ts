import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{
 /* product:Product = {
    id: 0,
    name:'',
    price: 0

  }*/
  product!: Product;
  constructor(
    private productService:ProductService,
    private router: Router,
    private route:ActivatedRoute){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id !=null){
      this.productService.readById(id).subscribe(product =>{
        this.product = product
      });
    }
   
  }
  updateProduct():void{
    console.log(this.product);
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    })

  }
  cancel():void{
    this.router.navigate(['/products']);
  }
}