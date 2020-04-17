import {Component} from '@angular/core';

import {products} from '../products';

interface Style {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    styles: Style[] = [
        {value: '', viewValue: 'Todos'},
        {value: 'sertanejo', viewValue: 'Sertanejo'},
        {value: 'pop', viewValue: 'Pop'},
        {value: 'rock', viewValue: 'Rock'},
        {value: 'gospel', viewValue: 'Gospel'}
    ];
    selected = '';

    products = products.filter(p => {
        return p.date >= new Date();
    });

    share() {
        window.alert('The product has been shared!');
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
