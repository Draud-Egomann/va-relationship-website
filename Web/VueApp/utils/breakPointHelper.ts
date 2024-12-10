export class breakPointHelper {
  static formatText(text: string, separationCount: number = 3): string {
    const sentences = text.split('.');
    let result = '';

    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];
      if (sentence.trim()) {
        // Retain the original spacing by appending directly
        result += sentence.trimEnd() + '.';

        if ((i + 1) % separationCount === 0 && i < sentences.length - 1) {
          result += '<br/><br/>';
        }
      }
    }
    return result;
  }
}