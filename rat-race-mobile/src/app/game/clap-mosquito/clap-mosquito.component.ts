import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {MosquitoComponent} from "./mosquito/mosquito.component";
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-clap-mosquito',
  templateUrl: './clap-mosquito.component.html',
  styleUrls: ['./clap-mosquito.component.scss']
})
export class ClapMosquitoComponent extends GameTemplateComponent implements OnInit, AfterViewInit {

  mosquitos = [];
  mosquitoComponents: MosquitoComponent[] = [];
  handVisible = false;
  idSequence = 0;
  clapSound: any;
  bounds: any;

  @ViewChild('hand') hand: ElementRef;
  @ViewChildren(MosquitoComponent) mosquitoComponentQueryList: QueryList<MosquitoComponent>;


  constructor(private el: ElementRef) {
    super();
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('document:mousedown', ['$event'])
  asd(e: MouseEvent) {
    this.calculateHandPosition(e);
    let sound = this.clapSound.cloneNode();
    sound.volume = 0.2;
    sound.play();
    this.handVisible = true;
  }

  @HostListener('touchend', ['$event'])
  @HostListener('document:mouseup', ['$event'])
  zxc(e: MouseEvent) {
    this.calculateHandPosition(e);
    this.handVisible = false;
  }

  ngOnInit() {
    this.clapSound = new Audio();
    this.clapSound.volume = 0.2;
    this.clapSound.src = "../../../assets/clap.mp3";
    this.clapSound.load();

    this.bounds = {
      width: window.innerWidth - 50,
      height: window.innerHeight - 50
    };
    for (let i = 0; i < 10; i++) {
      this.mosquitos.push(this.generateRandomPosition());
    }
  }

  private calculateHandPosition(e: MouseEvent) {
    if (e.target['className'] == 'snake') {
      this.hand.nativeElement.style.left = e.target['style'].left;
      this.hand.nativeElement.style.top = e.target['style'].top;
      let clickedElem: MosquitoComponent = this.findElementById(e.target['id']);
      clickedElem.kill();
      this.checkGameFinished();
    } else if (e.target['className'] == 'blood') {
      this.hand.nativeElement.style.left = e.target['style'].left;
      this.hand.nativeElement.style.top = e.target['style'].top;
    } else {
      let x = e.layerX ? e.layerX : (e['touches'] && e['touches'][0] ? e['touches'][0].clientX : 0);
      let y = e.layerY ? e.layerY : (e['touches'] && e['touches'][0] ? e['touches'][0].clientY : 0);
      this.hand.nativeElement.style.left = x + "px";
      this.hand.nativeElement.style.top = y + "px";
    }
  }

  ngAfterViewInit(): void {
    this.mosquitoComponentQueryList.forEach(snake => {
      this.mosquitoComponents.push(snake);
    });
  }

  generateRandomPosition() {
    return {
      left: this.getRandomArbitrary(0, this.bounds.width),
      top: this.getRandomArbitrary(0, this.bounds.height),
      id: this.idSequence++
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  findElementById(snakeId) {
    return this.mosquitoComponents.find(e => e.initialPos.id == snakeId)
  }

  private checkGameFinished() {
    if (this.mosquitoComponents.every((e: MosquitoComponent) => e.isKilled == true)) {
      this.gameFinished.emit(true);
    }
  }
}
