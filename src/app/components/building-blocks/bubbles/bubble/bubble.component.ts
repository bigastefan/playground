import { Component, OnInit } from '@angular/core';
import { Bubble } from 'src/app/models/bubble';
import { Store } from '@ngxs/store';
import { AddBubble, DeleteBubble } from 'src/app/store/bubble-store/bubble-actions';
import { RootState } from 'src/app/store/rootstate';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  b1 = new Bubble('Bubble 1 !');

  bubbles: Bubble[] = [];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select((state: RootState) => state.bubble.selectedBubbles).subscribe((allBubbles) => {
      this.bubbles = allBubbles;
    });
  }

  addBubble() {
    this.store.dispatch(new AddBubble(this.b1));
  }

  deleteBubble(bubble: Bubble) {
    this.store.dispatch(new DeleteBubble(bubble));
  }

}
