import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhaseBlockComponent } from './phase-block/phase-block.component';
import { PaintBlockComponent } from './paint-block/paint-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PhaseBlockComponent, PaintBlockComponent],
})
export class TricksModule {}
