import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from "./cards/cards.component";
import {RusultComponent} from "./rusult/rusult.component";
import {CardsEasyComponent} from "./cards-easy/cards-easy.component";
import {ResultEasyComponent} from "./result-easy/result-easy.component";

const routes: Routes = [
  {path: '', component: CardsComponent, pathMatch: "full"},
  {path: 'result', component: RusultComponent},
  {path:'card-easy',component:CardsEasyComponent},
  {path:'result-easy',component:ResultEasyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
