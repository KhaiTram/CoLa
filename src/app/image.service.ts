import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService { 
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(description: string) {    
        return Imagesdelatils.slice(0).find(Images => Images.description == description)    
    }    
}    
const Imagesdelatils = [    
      { "description": "Desinfektionsmittel", "Produktkategorie_ID": 2, "url": "assets/Images/Desinfektionsmittel.jpeg" },
      { "description": "Druckpapier", "Produktkategorie_ID": 3, "url": "assets/Images/Druckpapier.jpg" },
      { "description": "Eier", "Produktkategorie_ID": 1, "url": "assets/Images/Eier.jpeg" },
      { "description": "Fleisch", "Produktkategorie_ID": 1, "url": "assets/Images/Fleisch.jpeg" },
      { "description": "Hefe", "Produktkategorie_ID": 1, "url": "assets/Images/Hefe.jpg" },
      { "description": "Ibuprofen", "Produktkategorie_ID": 4, "url": "assets/Images/Ibuprofen.jpg" },
      { "description": "Klopapier", "Produktkategorie_ID": 2, "url": "assets/Images/Klopapier.jpg" },
      { "description": "Mehl", "Produktkategorie_ID": 1, "url": "assets/Images/Mehl.jpg" },
      { "description": "Mundschutz", "Produktkategorie_ID": 4, "url": "assets/Images/Mundschutz.jpg" },
      { "description": "Nudeln", "Produktkategorie_ID": 1, "url": "assets/Images/Nudeln.jpg" },
]    