import { DOCUMENT } from '@angular/common';
import { Component, OnInit ,Inject,EventEmitter , Output , Input} from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
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
      
      // this.router.routeReuseStrategy.shouldReuseRoute = function () {
      //   return false;
      // };
      
      // this.mySubscription = this.router.events.subscribe((event) => {
      //   if (event instanceof NavigationEnd) {
      //     // Trick the Router into believing it's last link wasn't previously loaded
      //     this.router.navigated = false;
      //   }
      // });
     }


  
    
  ngOnInit() {
    this.elem = document.documentElement;
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    console.log("helllooooooooooooooooooooooooo",this.name)

  }
  elem : any;
  isOpen = false;
  onToggleSidenav(){
  
    (this.isOpen) = !(this.isOpen);
    this.sidenavToggle.emit();
    
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
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
