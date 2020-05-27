import { DOCUMENT } from '@angular/common';
import { Component, OnInit ,Inject,EventEmitter , Output , Input} from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  name: string ;
  email: string;
  @Output() sidenavToggle = new EventEmitter<void>();
  

  mySubscription: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private authService: AuthenticationService,
    private router: Router
    ) {
      
      
     }


  
    
  ngOnInit() {
    this.elem = document.documentElement;
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    console.log("helllooooooooooooooooooooooooo",this.name)

  }
  elem : any;
  isOpen = false;
  userActive = true;
  show_fullscreen = true;
  close_fullscreen = false;

  onToggleSidenav(){
  
    (this.isOpen) = !(this.isOpen);
    this.sidenavToggle.emit();
    
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
      this.show_fullscreen = false;
      this.close_fullscreen = true;
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
      this.show_fullscreen = false;
      this.close_fullscreen = true;
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
      this.show_fullscreen = false;
      this.close_fullscreen = true;
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
      this.show_fullscreen = false;
      this.close_fullscreen = true;
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
      this.show_fullscreen = true;
      this.close_fullscreen = false;
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
      this.show_fullscreen = true;
      this.close_fullscreen = false;
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
      this.show_fullscreen = true;
      this.close_fullscreen = false;
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
      this.show_fullscreen = true;
      this.close_fullscreen = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/about']);
  }
  // ngOnDestroy() {
  //   if (this.mySubscription) {
  //     this.mySubscription.unsubscribe();
  //   }
  // }
}
