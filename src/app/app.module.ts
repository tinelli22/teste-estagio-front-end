
import { ProdService } from './produtos/prod.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {DataScrollerModule} from 'primeng/datascroller';
import { CheckboxModule } from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { InformacoesComponent } from './informacoes/informacoes.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    DataScrollerModule,
    CheckboxModule,
    PanelModule,
    FormsModule,
    CardModule,
  ],
  providers: [
    ProdService,
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
