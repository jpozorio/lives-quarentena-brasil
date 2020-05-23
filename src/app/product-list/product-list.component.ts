import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

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
        {value: 'axe', viewValue: 'axe'},
        {value: 'dj', viewValue: 'dj'},
        {value: 'forro', viewValue: 'forro'},
        {value: 'funk', viewValue: 'funk'},
        {value: 'gospel', viewValue: 'gospel'},
        {value: 'mpb', viewValue: 'mpb'},
        {value: 'outros', viewValue: 'outros'},
        {value: 'pop', viewValue: 'pop'},
        {value: 'rap', viewValue: 'rap'},
        {value: 'reggae', viewValue: 'reggae'},
        {value: 'rock', viewValue: 'rock'},
        {value: 'samba-pagode', viewValue: 'samba/pagode'},
        {value: 'sertanejo', viewValue:'sertanejo'},
    ];
    selected = '';

    products;

    constructor(private http: HttpClient, private datePipe: DatePipe) {
        this.getJSON().subscribe(data => {
            let employee = data;
            let agora = new Date();
            this.products = employee.sort((a, b) => {
                return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
            });

            // this.products = this.products.filter(p => {
            //     let date = new Date(p.date);
            //     date.setHours(date.getHours() + 8);
            //     return date >= agora;
            // });
            this.products.forEach(p => {
                let date = new Date(p.datetime);
                p.iniciado = agora > date;
                if (date.getMinutes() == 0) {
                    p.time = date.getHours() + "h";
                } else {
                    p.time = date.getHours() + ":" + date.getMinutes() + "h";
                }
            })
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get('lives');
    }

    transformDate(date): string {
        return this.datePipe.transform(new Date(date), 'dd/MM/yyyy HH:mm'); //whatever format you need.
    }

}
