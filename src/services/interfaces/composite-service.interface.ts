export interface CompositeServiceInterface {
  compositeFile(
    file1: Buffer,
    file2: Buffer,
    left: number,
    top: number,
  ): Promise<string>;
  compositeLink(
    file1: string,
    file2: string,
    left: number,
    top: number,
  ): Promise<string>;
}
