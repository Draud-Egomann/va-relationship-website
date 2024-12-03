export class Slide extends ImageBaseItem {
  public Text: string | null;

  constructor(
    text: string | null,
    imageUrl: string | null,
    imageAltText: string,
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    super(imageUrl, imageAltText, imageClass, thumbnailUrl, thumbnailAltText, thumbnailClass);
    this.Text = text;
  }
}