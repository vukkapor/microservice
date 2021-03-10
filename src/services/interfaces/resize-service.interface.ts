export interface ResizeServiceInterface {
  resizeFile(file: Buffer, width: number, height: number): Promise<string>;
  resizeLink(file: string, width: number, height: number): Promise<string>;
}
