import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClient, provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {jwtInterceptor} from "./shared/interceptor/jwt.interceptor";
import {AdminAuthGuard} from "./shared/guard/admin-auth-guard";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {loggingInterceptor} from "./shared/interceptor/error.interceptor";
import {UserAuthGuard} from "./shared/guard/user-auth-guard";


export function HttpLoaderFactory(http: HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor,loggingInterceptor])),

    AdminAuthGuard,
    UserAuthGuard,
    provideAnimationsAsync(),
    TranslateModule.forRoot({
     loader:{
       provide: TranslateLoader,
       useFactory: HttpLoaderFactory,
       deps:[HttpClient]
     }
    }).providers!
  ]

};
