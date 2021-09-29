import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniversalInterceptorService } from './interceptors/universal-interceptor.service';
import { WalletIconComponent } from './components';
import { ObscureAddressPipe, SanitizeUrlPipe } from './pipes';

const declarations = [
  WalletIconComponent,
  ObscureAddressPipe,
  SanitizeUrlPipe,
];

@NgModule({
  imports: [CommonModule],
  providers: [UniversalInterceptorService],
  declarations,
  exports: [
    ...declarations,
  ]
})
export class SharedModule {}
