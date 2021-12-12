import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AboutProfileComponent } from "./pages/about-profile/about-profile.component";
import { AddressComponent } from "./pages/address/address.component";
import { HistoryComponent } from "./pages/history/history.component";
import { MainprofileComponent } from "./pages/mainprofile/mainprofile.component";
import { MeComponent } from "./pages/me/me.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { PurchaseComponent } from "./pages/purchase/purchase.component";

export const routes: Routes = [
  {
    path: "",
    component: AboutProfileComponent,
    children: [
      {
        path: "",
        component: MainprofileComponent,
      },
      {
        path: "me",
        component: MeComponent,
      },
      {
        path: "my-address",
        component: AddressComponent,
      },
      {
        path: "history",
        component: HistoryComponent,
      },
      {
        path: "messages",
        component: MessagesComponent,
      },
      {
        path: "purchase",
        component: PurchaseComponent,
      },
    ],
  },
];
@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
