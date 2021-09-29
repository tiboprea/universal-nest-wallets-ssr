import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConnectionStore, WALLET_CONFIG, WalletStore } from '@danmt/wallet-adapter-angular';
import {
  getBloctoWallet,
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet, getSolletExtensionWallet, getSolletWallet,
  getTorusWallet
} from '@solana/wallet-adapter-wallets';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'speakers',
        loadChildren: () => import('./modules/speakers/speakers.module').then(m => m.SpeakersModule)
    }
], { relativeLinkResolution: 'legacy' }),
    SharedModule,
    NavigationModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: WALLET_CONFIG,
      useValue: {
        wallets: [
          getPhantomWallet(),
          getSolflareWallet(),
          getSlopeWallet(),
          getTorusWallet({
            options: { clientId: 'Get a client ID @ https://developer.tor.us' },
          }),
          getSolletWallet(),
          getSolletExtensionWallet(),
        ],
        autoConnect: true,
      },
    },
    WalletStore,
    ConnectionStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
