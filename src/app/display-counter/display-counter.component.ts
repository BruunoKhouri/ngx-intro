import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss']
})
export class DisplayCounterComponent {

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = this.store.select('app')
    .pipe(
      map(e => e.counter)
    );


}
