export interface CropServiceInterface {
  cropFile(
    file: Buffer,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Promise<string>;

  cropLink(
    file: string,
    left: number,
    top: number,
    width: number,
    height: number,
  ): Promise<string>;
}
