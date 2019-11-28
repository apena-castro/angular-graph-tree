import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { AppComponent } from './app.component';
import { TreeNodeComponent } from './tree-node.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports:      [
     CommonModule, 
     OrganizationChartModule,
     BrowserModule, 
     BrowserAnimationsModule,
     FormsModule,   
     ToastModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule ],
  declarations: [ AppComponent, TreeNodeComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
