import { Component, OnInit } from '@angular/core';
import { GameTemplateComponent } from "../game-template.component";

@Component({
  selector: 'app-llamas',
  templateUrl: './llamas.component.html',
  styleUrls: ['./llamas.component.scss']
})
export class LlamasComponent extends GameTemplateComponent implements OnInit {
  readonly IMGS_TO_SELECT = [
    'https://www.mercurynews.com/wp-content/uploads/2019/02/05075011.jpg',
    'http://learnphotoediting.org/wp-content/uploads/llama-pictures-north-canterbury-llama-farmer-judy-webs-hunt-for-the-real-llamas.jpg',
    'http://images-cf.localist.com/photos/30954/original/3610b709ac1b5d61e8d7b7c4310a39b5e57f708c.jpg',
    'https://s.w-x.co/llamablood.jpg',
    'https://spectator.imgix.net/content/uploads/2016/05/iStock_000076568217_Large.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=620&h=413',
    'https://www.thatsfarming.com/uploads/news/resizeExact_1200_800/10655-alpaca.jpg',
    'https://i2.wp.com/petssumo.com/wp-content/uploads/2018/05/Llama-animal-.png?resize=661%2C443&ssl=1',
    'https://i.pinimg.com/originals/d7/d3/ec/d7d3ec275b71dab2fc4368f9fe707436.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1ZVXu1egDRXSV7K9itkayqdSOHv9ABW4jOMZoVDcK3QZdE87',
    'https://st2.depositphotos.com/1091515/9070/i/950/depositphotos_90700844-stockafbeelding-hoofd-van-schattig-wit-alpaca.jpg',
    'https://twistedsifter.files.wordpress.com/2012/05/alpacas-with-the-best-hair-ever.jpg',
    'https://s3.r29static.com//bin/entry/d3a/720x864,85/1965128/image.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuqA1oHy4XBaq1B617e1wCbQq17zaLVNZmiDICaVmmLtvFypL',
    'http://vdsm.americadaily.net/wp-content/uploads/2018/07/5624215-llama.jpg',
  ];

  score = 0;
  gameImages = [];
  selectedImages = [];

  constructor() {
    super()
  }

  ngOnInit() {
    this.init();
  }

  init = () => {
    let shuffled_images = this.shuffle(this.IMGS_TO_SELECT);
    for (var i = 0; i < 8; i++) {
      this.gameImages.push(shuffled_images[i]);
      this.gameImages.push(shuffled_images[i]);
    }
    this.gameImages = this.shuffle(this.gameImages);
  };

  shuffle = function (array) {
    return array.sort(() => Math.random() - 0.5);
  };

  setScored = (img1, img2) => {
    img1.onclick = null;
    img2.onclick = null;
    img1.className = "scored";
    img2.className = "scored";
    this.score = this.score + 1;
    if (this.score >= 8) {
      this.gameFinished.emit(true);
    }
  };

  areTheSame = function (img1, img2) {
    return img1.src == img2.src;
  };

  selectImg = (img) => {
    if (img.className == "hidden") {
      img.className = "scored";
      this.selectedImages.push(img);
      if (this.selectedImages.length == 2 && this.areTheSame(this.selectedImages[0], this.selectedImages[1])) {
        this.setScored(this.selectedImages[0], this.selectedImages[1]);
        this.selectedImages = [];
      } else if (this.selectedImages.length == 2) {
        this.selectedImages[0].className = "hidden";
        this.selectedImages[1].className = "hidden";
        this.selectedImages = [];
      }
    }
  };

}
