import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BlankComponent } from './layouts/blank/blank.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ConfigModule, ConfigService } from './shared/services/config.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { errorInterceptor } from './shared/interceptors/error.interceptor';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
// import { tokenInterceptor } from './shared/interceptors/token.interceptor';

@NgModule({
  declarations: [AppComponent, BlankComponent, LayoutComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [
    ConfigService,
    ConfigModule.init(),
    // provideHttpClient(withInterceptors([errorInterceptor, tokenInterceptor])),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
