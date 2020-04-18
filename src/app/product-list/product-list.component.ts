import {Component, OnInit} from '@angular/core';

import * as data_json from '../../products.json';

interface Style {
    value: string;
    viewValue: string;
}

interface Product {
    name: string,
    time: string,
    date: string,
    description: string,
    link: string,
    estilo: string,
    iniciado: boolean,
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    styles: Style[] = [
        {value: '', viewValue: 'Todos'},
        {value: 'sertanejo', viewValue: 'Sertanejo'},
        {value: 'pop', viewValue: 'Pop'},
        {value: 'rock', viewValue: 'Rock'},
        {value: 'gospel', viewValue: 'Gospel'}
    ];
    selected = '';

    products;

    ngOnInit(): void {
        let employee: Product[] = (data_json as any).default;
        let agora = new Date();
        this.products = employee.filter(p => {
            let date = new Date(p.date);
            date.setHours(date.getHours() + 3);
            return date >= agora;
        });
        this.products.forEach(p => {
            let date = new Date(p.date);
            p.iniciado = agora > date;
            if (date.getMinutes() == 0) {
                p.time = date.getHours() + "h";
            } else {
                p.time = date.getHours() + ":" + date.getMinutes() + "h";
            }
        })
    }
}
