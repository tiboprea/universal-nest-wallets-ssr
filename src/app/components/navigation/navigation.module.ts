import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveComponentModule } from '@ngrx/component';

import { NavigationComponent } from './navigation.component';
import { WalletModule } from '../../modules/wallet/wallet.module';

@NgModule({
    declarations: [NavigationComponent],
    imports: [CommonModule, MatIconModule, MatButtonModule, ReactiveComponentModule, WalletModule],
    providers: [],
    exports: [NavigationComponent],
})
export class NavigationModule {}
