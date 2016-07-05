import { Component } from '@angular/core';

@Component({
  selector: 'regular',
  template: `
  <h1>Regular Syntax</h1>
  
  <h2> Two way binding & interpolation</h2>
  <input [(ngModel)] = 'name'>
  {{name}}

  <h2> Local variable & event binding</h2>
  <input #localVar >
  {{local}}
  <button  (click)='handleLocal(localVar.value)' >Click</button>

  <h2> Property binding & event binding</h2> 
  <div [hidden]='hidden'>Hide & Show</div>
  <button (click)='toggleVisibility()'>{{hidden? 'Show' : 'Hide'}}</button>
  
  `
})

export class RegularComponent {
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

