import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../../models/Categoria.Model';
import { CategoriaService } from '../../../Services/categoria.service';
import RespuestaModel from '../../../models/Respuesta.Model';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  Categorias: CategoriaModel[];
  constructor(
    public router:Router,  
    public activatedRouter: ActivatedRoute,
    public _CategoriaService: CategoriaService,
  ) {
    this.CargarCategorias();
   }

  ngOnInit() {
    // console.log('Debug');

  }
  CargarCategorias() {
    this._CategoriaService.ObtenerCategorias().subscribe(
      (resp: RespuestaModel ) => {
        this.Categorias = <CategoriaModel[]>resp.recordset;
        console.log(this.Categorias);
      }
    )
  }
}
