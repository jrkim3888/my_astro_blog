/**
 * 한국어 텍스트의 읽기 시간을 계산합니다.
 * 한국어는 평균 분당 500자, 영어는 분당 200단어 기준입니다.
 */
export function getReadingTime(content: string): string {
  const koreanChars = (content.match(/[\u3131-\uD79D]/g) || []).length;
  const englishWords = content
    .replace(/[\u3131-\uD79D]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const koreanMinutes = koreanChars / 500;
  const englishMinutes = englishWords / 200;
  const totalMinutes = Math.ceil(koreanMinutes + englishMinutes);

  return `${Math.max(1, totalMinutes)}분`;
}
