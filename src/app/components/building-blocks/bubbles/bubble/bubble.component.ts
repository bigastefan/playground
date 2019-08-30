import { Component, OnInit } from '@angular/core';
import { Bubble } from 'src/app/models/bubble';
import { Store } from '@ngxs/store';
import { AddBubble, DeleteBubble, AddToUnread, DeleteFromUnread } from 'src/app/store/bubble-store/bubble-actions';
import { RootState } from 'src/app/store/rootstate';
@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  content: string;
  bubbles: Bubble[] = [];
  unreadBubbles: Bubble[] = [];

  constructor(private store: Store) { }

  ngOnInit() {
    // Prepraviti tako da se uzimaju samo poslednjih X notifikacija
    this.store.select((state: RootState) => state.bubble.selectedBubbles).subscribe((allBubbles) => {
      this.bubbles = allBubbles;
    });
    this.store.select((state: RootState) => state.bubble.unreadBubbles).subscribe((allBubbles) => {
      this.unreadBubbles = allBubbles;
    });
  }

  addBubble() {
    const bubble = new Bubble(this.content);
    this.store.dispatch(new AddBubble(bubble));
    this.store.dispatch(new AddToUnread(bubble));
  }

  deleteBubble(bubble: Bubble) {
    this.store.dispatch(new DeleteBubble(bubble));
  }

  openBubble(bubble: Bubble) {
    this.store.dispatch(new DeleteFromUnread(bubble));
  }

}
