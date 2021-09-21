import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PdfComponent } from './pdf/pdf.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'card', component: PdfComponent},
  {path: 'table/:id', component: TablesComponent},
  {path: 'order', component: OrderComponent},
  {path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
