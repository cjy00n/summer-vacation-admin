export type Emotion = "괜찮아요" | "좋아요" | "기뻐요" | "화나요" | "슬퍼요";
export type Weather = "맑음" | "비" | "눈" | "흐림" | "천둥";

export default interface Diary {
  id: string;
  title: string;
  contents: string;
  date: Date;
  emotion: Emotion;
  weather: Weather;
  isPublic: 0 | 1;
  imageUrl: string;
  createdAt: Date;
  nickname: string;
  kakaoId: string;
  warning: boolean;
  reportNum: number;
  image: string;
}
