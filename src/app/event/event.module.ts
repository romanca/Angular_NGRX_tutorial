import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './containers/event/event.component';
import { AddAttendeeComponent } from './components/add-attendee/add-attendee.component';



@NgModule({
  declarations: [
    EventComponent,
    AddAttendeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
