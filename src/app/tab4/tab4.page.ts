import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {
  username: string = 'Nom d\'utilisateur';
  bio: string = 'Winter is coming.'; // Citation de série

  constructor(public photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }
}
