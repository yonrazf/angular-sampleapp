import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';
import { ShowAdminPortalComponent } from './show-admin-portal/show-admin-portal.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomComponent } from '@frontegg/types';

@NgModule({
  declarations: [AppComponent, ShowAdminPortalComponent, CustomHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    /** Import Frontegg Module **/
    FronteggAppModule.forRoot({
      contextOptions: {
        baseUrl: 'https://app-kcj0djtbjuee.frontegg.com',
        clientId: '',
        appId: '',
      },
      authOptions: {
        keepSessionAlive: true,
      },
      hostedLoginBox: false,
      themeOptions: {
        loginBox: {
          logo: {
            image:
              'https://en.wikipedia.org/wiki/Tabby_cat#/media/File:Cat_November_2010-1a.jpg',
          },
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
