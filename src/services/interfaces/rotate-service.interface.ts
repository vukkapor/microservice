export interface RotateServiceInterface {
  rotateFile(file: Buffer, angle: number): Promise<string>;
  rotateLink(file: string, angle: number): Promise<string>;
}
