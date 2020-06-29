import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ArchiveService} from '../archive.service';
import { User } from '../user';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archive: any;
  currentUser: any;
  constructor(private authService: AuthService, private archiveService: ArchiveService) {}

  ngOnInit(): void {
    setTimeout(() => { this.currentUser = this.authService.getCurrentUser(); }, 700);
    this.archiveService.getArchive().subscribe(data => {
      setTimeout(() => { this.archive = data.filter(x => x.User_Benutzername === this.currentUser.Benutzername) }, 1000);
    });
    
  }

}
