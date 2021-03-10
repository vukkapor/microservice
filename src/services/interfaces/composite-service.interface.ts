export interface CompositeServiceInterface {
  compositeFile(file1: Buffer, file2: Buffer): Promise<string>;
  compositeLink(file1: string, file2: string): Promise<string>;
}
