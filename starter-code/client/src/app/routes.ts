import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { DetailListComponent } from './detail-list/detail-list.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent},
    { path: 'detail/:id', component: DetailListComponent},
    // { path: '**', redirectTo: '' }
];