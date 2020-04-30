import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor() { }
  
  /**
   * Get the compressed version path of a pictures
   * @param path The patch of the picture we want the compressed version for
   */
  getCompressedPath(path: String) {
    return path.concat("-compressed.jpg");
  }
}
