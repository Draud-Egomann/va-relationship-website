export class ImageBaseItem {
  public ImageUrl: string | null;
  public ImageAltText: string | null;
  public ImageClass: string | null;
  public ThumbnailUrl: string | null;
  public ThumbnailAltText: string | null;
  public ThumbnailClass: string | null;

  constructor(
    imageUrl: string | null,
    imageAltText: string | null = null,
    imageClass: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null,
    thumbnailClass: string | null = null
  ) {
    this.ImageUrl = imageUrl;
    this.ImageAltText = imageAltText;
    this.ImageClass = imageClass;
    this.ThumbnailUrl = thumbnailUrl;
    this.ThumbnailAltText = thumbnailAltText;
    this.ThumbnailClass = thumbnailClass;
  }
}