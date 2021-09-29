import { Component, Input } from '@angular/core';
import { Wallet } from '@solana/wallet-adapter-wallets';

@Component({
    selector: 'wallet-list-item',
    template: `
        <ng-container *ngIf="wallet">
            <p>{{ wallet.name }}</p>

            <ng-container *ngIf="wallet">
                <img [src]="wallet.icon | sanitizeUrl" alt="" />
            </ng-container>
        </ng-container>
    `,
    styles: [
        `
            :host {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            p {
                margin: 0;
            }
        `,
    ],
})
export class WalletListItemComponent {
    @Input() wallet: Wallet | null = null;
}
