import { Component } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { PrimeNGConfig } from 'primeng/api';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
   margin:40,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:7000,
    lazyLoad:true,
    loop:true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true

  }

  slidesStore:[]=[]
  constructor(private primengConfig: PrimeNGConfig,private _AuthService:AuthService,private _ActivatedRoute:ActivatedRoute) {
    const currest = this._ActivatedRoute.snapshot.routeConfig?.path
    this._AuthService.route.next(currest)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  Aos.init();
  Aos.refresh()
  }
  slides:Array<any> = [
    {
      src:'./assets/images/baby.png'
      ,text:'اقرأى عن النمو الجسدى والتغذيه السليمه للطفل فى مرحله المراهقه و المشكلات الصحيه الشائعه'
    },
    {
      src:'./assets/images/bab1.png'
      ,text:'اقرأى عن العنايه الفوريه بالمولود الجديد و التغذيه السليمه و المشاكل الصحيه الشائعه لحديثى الولاده.'
    },
    {
      src:'./assets/images/bab2.png',
      text:'اقرأى عن النمو الجسدى الطبيعى للرضيع و النشاط البدنى من الولاده حتى سن 12 شهرا.'
    },
    {
      src:'./assets/images/bab3.png',
      text:'اقرأى عن ارشادات الفطام و اتغذيه السليمه من سن سنه المشاكل الصحيه الشائعه'
    },
    {
      src:'./assets/images/bab4.png',
      text:'اقرأى عن العنايه الفوريه بالمولود الجديد و التغذيه السليمه و المشاكل الصحيه الشائعه لحديثى الولاده.'
      
    },
  ]

}
