import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from "./cards/cards.component";
import {RusultComponent} from "./rusult/rusult.component";

const routes: Routes = [
  {path: '', component: CardsComponent, pathMatch: "full"},
  {path: 'result', component: RusultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
