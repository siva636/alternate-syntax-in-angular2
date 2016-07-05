import { Component } from '@angular/core';
import {RegularComponent} from './regular.component';
import {AlternateComponent} from './alternate.component'


@Component({
    selector: 'app',
    template: `
    <regular></regular>
    <hr/>
    <alternate></alternate>
    `,
    directives: [RegularComponent, AlternateComponent]
})

export class AppComponent {
}