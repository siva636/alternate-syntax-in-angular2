import { Component } from '@angular/core';

@Component({
  selector: 'alternate',
  template: `
  <h1>Alternate Syntax</h1>
  
  <h2> Two way binding & interpolation</h2>
  <input bindon-ngModel='name'>
  {{name}}

  <h2> Local variable & event binding</h2>
  <input ref-localVar >
  {{local}}
  <button  on-click='handleLocal(localVar.value)' >Click</button>

  <h2> Property binding & event binding</h2> 
  <div bind-hidden='hidden'>Hide & Show</div>
  <button on-click='toggleVisibility()'>{{hidden? 'Show' : 'Hide'}}</button>
  
  `
})

export class AlternateComponent {
  name: string = '';
  local: string = '';
  hidden: boolean = false;

  toggleVisibility() {
    this.hidden = !this.hidden;
  }

  handleLocal(local) {
    this.local = local;
  }

}

