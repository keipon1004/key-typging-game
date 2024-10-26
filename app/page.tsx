import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import TypingGame from '@/components/TypingGame';

export default function Home() {
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
            <TypingGame />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}