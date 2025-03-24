import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
products:any[]=[];
constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (data)=> {this.products=data
      },
      
    );
    
  }


}
