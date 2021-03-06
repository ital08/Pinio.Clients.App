import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRippleModule } from "@angular/material/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTreeModule } from "@angular/material/tree";
import { MatStepperModule } from "@angular/material/stepper";
import {
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatFormField,
  MatFormFieldModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
} from "@angular/material";
import { A11yModule } from "@angular/cdk/a11y";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

// Others

@NgModule({
  declarations: [],
  imports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatRippleModule,
    OverlayModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatStepperModule,
    MatPaginatorModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  exports: [
    MatSidenavModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatRippleModule,
    OverlayModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatStepperModule,
    MatFormFieldModule,
    A11yModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
  ],
})
export class MaterialModule {}
