export class Card extends ImageBaseItem {
  public Title: string;
  public Text: string;

  constructor(
    title: string,
    text: string,
    imageUrl: string | null = null,
    imageAltText: string = "",
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    super(imageUrl, imageAltText, imageClass, thumbnailUrl, thumbnailAltText, thumbnailClass);
    this.Title = title;
    this.Text = text;
  }
}