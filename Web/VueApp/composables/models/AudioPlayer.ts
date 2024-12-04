export class AudioPlayer extends ImageBaseItem {
  public Title: string;
  public AudioUrl: string;
  public Creator: string | null;

  constructor(
    title: string,
    audioUrl: string,
    creator: string | null = null,
    imageUrl: string | null = null,
    imageAltText: string = "",
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    super(imageUrl, imageAltText, imageClass, thumbnailUrl, thumbnailAltText, thumbnailClass);
    this.Title = title;
    this.AudioUrl = audioUrl;
    this.Creator = creator;
  }
}