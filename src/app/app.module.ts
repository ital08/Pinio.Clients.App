import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContentlayoutComponent } from "./layout/contentlayout/contentlayout.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { SubNavComponent } from "./layout/sub-nav/sub-nav.component";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthlayoutComponent } from "./layout/authlayout/authlayout.component";
import { AvatarModule } from "ngx-avatar";
import { MatAutocomplete, MatAutocompleteModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentlayoutComponent,
    SubNavComponent,
    NotFoundComponent,
    AuthlayoutComponent,
  ],
  imports: [
    //avatar
    AvatarModule,
    // angular
    BrowserModule,

    // 3rd party

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
