export default interface Diary {
  id: string;
  nickname: string;
  kakaoId: string;
  warning: boolean;
  reportNum: number;
  contents: string;
  date: Date;
  image: string;
  title: string;
}
