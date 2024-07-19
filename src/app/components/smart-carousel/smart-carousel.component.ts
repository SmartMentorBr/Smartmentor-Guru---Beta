import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SwiperOptions } from 'swiper';
import {SwiperComponent} from 'ngx-useful-swiper';

@Component({
  selector: 'smart-carousel',
  templateUrl: './smart-carousel.component.html',
  styleUrls: ['./smart-carousel.component.scss']
})
export class SmartCarouselComponent implements OnInit {
  
  // @ViewChild("swipe") divView: ElementRef;
  @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;
  public options = [
    {
      desc: "Faça o cadastro e adicione o briefing do seu desafio. Escolha o segmento e a área de atuação. Não se preocupe, as suas informações estão seguras.",
      active: true
    },
    {
      desc: "Iremos pesquisar pela solução em nosso banco de dados, e também em nossa rede de mentores. Você será informado do prazo para receber sua solução.",
      active: false
    },
    {
      desc: "Você receberá um aviso de que a sua solução foi encontrada, junto com ela você receberá também a lista de mentores que ajudaram na solução.",
      active: false
    },
    {
      desc: "Dessa forma você pode agendar pessoalmente uma mentoria com esse profissional e evoluir ainda mais o seu negócio.",
      active: false
    },
  ]
  public config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 30
  };
  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    // this.divView.nativeElement.addEventListener('touchstart', (evt)=> {console.log(evt)});
  }

  changeStep(idx) {
    // this.usefulSwiper.swiper.
    // this.options.map((option, optIdx) => {
    //   option.active = false;
    //   if(idx == optIdx) option.active = true;
    // })
  }
}
