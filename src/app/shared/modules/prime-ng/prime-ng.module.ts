import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { ChartModule } from 'primeng/chart';
import { NgModule } from '@angular/core';

const primeNgModules = [
  DropdownModule,
  InputTextModule,
  SkeletonModule,
  ChartModule
];
@NgModule({
  declarations: [],
  imports: [
    ...primeNgModules
  ],
  exports: [
    ...primeNgModules
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeNgModule { }
