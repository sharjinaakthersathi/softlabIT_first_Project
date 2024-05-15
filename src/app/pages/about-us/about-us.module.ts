import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    SecondSectionComponent,
    FirstSectionComponent,
    NavbarComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FooterModule
  ]
})
export class AboutUsModule { }
