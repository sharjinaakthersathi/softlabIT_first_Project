import { Component, EventEmitter, Input, Output } from '@angular/core';
import { second_sec_db } from 'src/app/core/db/second-section.db';


@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
})
export class SecondSectionComponent {
 items: any[] = second_sec_db;
 @Output passDataEvent = new EventEmitter();

  onLikeCount(){
    console.log('Liked:');
  }
}
