import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from '../header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    declarations: [
        HeaderComponent,
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatToolbarModule
    ]
})

export class CoreModule { }