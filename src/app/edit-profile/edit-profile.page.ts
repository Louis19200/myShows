import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: false,  // AJOUTE CETTE LIGNE
})
export class EditProfilePage implements OnInit {

  constructor(
    public photoService: PhotoService,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async selectAvatar(index: number) {
    const selectedPhoto = this.photoService.photos[index];
    this.photoService.photos.splice(index, 1);
    this.photoService.photos.push(selectedPhoto);
  }
}
