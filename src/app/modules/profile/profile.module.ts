import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { AvatarModule } from "ngx-avatar";
import { ProfileRoutingModule } from "./profile-routing.module";
import { AboutProfileComponent } from "./pages/about-profile/about-profile.component";
import { MeComponent } from "./pages/me/me.component";
import { HistoryComponent } from "./pages/history/history.component";
import { AddressComponent } from "./pages/address/address.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { MainprofileComponent } from "./pages/mainprofile/mainprofile.component";
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { ModalPurchaseComponent } from './modals/modal-purchase/modal-purchase.component';

@NgModule({
  declarations: [
    AboutProfileComponent,
    MeComponent,
    HistoryComponent,
    AddressComponent,
    MessagesComponent,
    MainprofileComponent,
    PurchaseComponent, ModalPurchaseComponent
  ],
  imports: [CommonModule, SharedModule, AvatarModule, ProfileRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [
    ModalPurchaseComponent],
})
export class ProfileModule { }
