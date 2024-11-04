export class stringHelper {
  static IsNullOrEmpty(value: string | null): boolean {
    return !value || value.length === 0;
  }
}