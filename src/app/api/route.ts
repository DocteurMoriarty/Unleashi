import { NextResponse } from 'next/server';
import { articles } from './data';

export async function GET() {
  try {
    return NextResponse.json(articles);  
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la récupération des articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const article = await request.json();  
    const newArticle = {
      id: articles.length + 1, 
      title: article.title,  
    };

    articles.push(newArticle); 

    return new NextResponse(JSON.stringify(newArticle), {
      headers: { "Content-Type": "application/json" },
      status: 201,  
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Erreur lors de l\'ajout de l\'article' }), {
      headers: { "Content-Type": "application/json" },
      status: 500, 
    });
  }
}
