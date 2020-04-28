import { NgModule } from '@angular/core';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card'
import { MatGridListModule} from '@angular/material/grid-list'
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    FormsModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule  { }
