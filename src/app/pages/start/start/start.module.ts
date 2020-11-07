import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, StartRoutingModule, MatIconModule, MatTableModule],
})
export class StartModule {}
