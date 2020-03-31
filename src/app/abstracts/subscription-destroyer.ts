import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class SubscriptionDestroyer implements OnDestroy {
    protected subscriptions: Subscription[] = [];

    public ngOnDestroy(): void {
        this.subscriptions.forEach(s => s && s.unsubscribe());
    }
}
