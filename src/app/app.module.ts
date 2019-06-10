import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//rutas
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionComponent } from './shared/section/section.component';
import { SectionPortafiolioComponent } from './paginas/section-portafiolio/section-portafiolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { PortaItemComponent } from './paginas/porta-item/porta-item.component';
import { AppRouting } from './app-routing.module';
import { SearchComponent } from './paginas/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SectionPortafiolioComponent,
    AboutComponent,
    PortaItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
