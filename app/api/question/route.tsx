import { NextResponse } from "next/server";

const questions = [
  {
    ja: 'すし',
    romaji: ['sushi', 'susi']
  },
  {
    ja: 'りんご',
    romaji: ['ringo', 'rinngo']
  },
  {
    ja: 'こんにちは',
    romaji: ['konnichiha', 'konnnitiha', 'konnitiha']
  }
];

// 質問リストを取得するAPI
export function GET() {
  return NextResponse.json(questions);
}