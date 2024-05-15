import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { BannerComponent } from './banner/banner.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { FourSectionComponent } from './four-section/four-section.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
// import { BannerPartComponent } from './banner-part/banner-part.component';
// import { CardComponent } from './card/card.component';
// import { CardPartComponent } from './card-part/card-part.component';
// import { FifthSectionComponent } from './fifth-section/fifth-section.component';

// import { HeaderModule } from 'src/app/core/db/footer/header.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SectionThreeComponent,
    FourSectionComponent,
    FifthSectionComponent,
    // BannerPartComponent,
    CardComponent,
    // CardPartComponent

    // FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FooterModule,
    // CardComponent,
    // CardPartComponent,

    // HeaderModule
  ],
})
export class HomeModule {}
