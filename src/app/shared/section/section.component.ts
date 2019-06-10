import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(public _producto: ProductoService) { 
    
  }

  ngOnInit() {
  }

}
