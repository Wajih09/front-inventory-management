import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrl: './bouton-action.component.scss'
})
export class BoutonActionComponent {

  @Input()
  isImporterVisible = true;

  @Input()
  isExporterVisible = true;

  @Input()
  isNouveauVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
}
