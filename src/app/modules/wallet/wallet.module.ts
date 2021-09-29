import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveComponentModule } from '@ngrx/component';
import { WalletConnectButtonComponent, WalletConnectButtonDirective } from './components/connect-button';
import { WalletDisconnectButtonComponent, WalletDisconnectButtonDirective } from './components/disconnect-button';
import { WalletMultiButtonComponent } from './components/multi-button';
import {
  WalletDialogButtonComponent,
  WalletDialogButtonDirective,
  WalletDialogComponent,
  WalletExpandComponent,
  WalletListItemComponent
} from './components/dialog';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    ReactiveComponentModule,
    SharedModule,
  ],
  exports: [
    WalletConnectButtonComponent,
    WalletConnectButtonDirective,
    WalletDisconnectButtonComponent,
    WalletDisconnectButtonDirective,
    WalletMultiButtonComponent,
    WalletDialogButtonComponent,
    WalletDialogButtonDirective,
    WalletDialogComponent,
  ],
  declarations: [
    WalletConnectButtonComponent,
    WalletConnectButtonDirective,
    WalletDisconnectButtonComponent,
    WalletDisconnectButtonDirective,
    WalletMultiButtonComponent,
    WalletDialogButtonComponent,
    WalletDialogButtonDirective,
    WalletDialogComponent,
    WalletListItemComponent,
    WalletExpandComponent,
  ],
})
export class WalletModule {}
