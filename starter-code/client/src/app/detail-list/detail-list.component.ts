import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  detail:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private journalService:JournalService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    });
  }
  
  getEntryDetails(id) {
    this.journalService.get(id)
      .subscribe((detail) => {
        this.detail = detail;
      });
  }

}
