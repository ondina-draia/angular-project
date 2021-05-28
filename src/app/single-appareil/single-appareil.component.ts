import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)!.name; //J'ai rajouté un "!". Comme on est certain qu'ils ne peuvent pas être null:
    this.status = this.appareilService.getAppareilById(+id)!.status; //le + c'est pour le cast en tant que nombre 
  }
}
