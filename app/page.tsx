import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import TypingGame from '@/components/TypingGame';

interface Question {
  ja: string;
  romaji: string[];
}

async function fetchQuestions(): Promise<Question[]> {
  const res = await fetch('http://localhost:3000/api/question', {
    cache: 'no-store', // キャッシュを無効にするオプション
  });
  if (!res.ok) {
    throw new Error('Failed to fetch questions');
  }
  return res.json();
}

const Home = async () => {
  const questions = await fetchQuestions();

  return (
    <main style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', marginBottom: '2rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>日本語タイピング練習</CardTitle>
          </CardHeader>
          <CardContent>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
              表示される日本語をローマ字で入力してください。
            </p>
            <TypingGame questions={questions} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Home;