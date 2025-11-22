import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Tendências de Moda para a Primavera 2024",
      excerpt: "Descubra as cores, estampas e silhuetas que vão dominar a próxima estação",
      author: "Boutique Elegance",
      date: "15 de Março, 2024",
      category: "Tendências",
      image: "/api/placeholder/800/500",
    },
    {
      id: "2",
      title: "Como Montar um Guarda-Roupa Cápsula Elegante",
      excerpt: "Aprenda a criar um guarda-roupa versátil com peças atemporais",
      author: "Boutique Elegance",
      date: "10 de Março, 2024",
      category: "Dicas de Estilo",
      image: "/api/placeholder/800/500",
    },
    {
      id: "3",
      title: "O Poder do Vestido Preto na Moda Feminina",
      excerpt: "Por que toda mulher precisa de um vestido preto clássico em seu armário",
      author: "Boutique Elegance",
      date: "5 de Março, 2024",
      category: "Essenciais",
      image: "/api/placeholder/800/500",
    },
    {
      id: "4",
      title: "Looks Executivos: Elegância no Ambiente Profissional",
      excerpt: "Dicas para se vestir com sofisticação e confiança no trabalho",
      author: "Boutique Elegance",
      date: "1 de Março, 2024",
      category: "Dicas de Estilo",
      image: "/api/placeholder/800/500",
    },
    {
      id: "5",
      title: "Promoção de Fim de Estação - Até 40% OFF",
      excerpt: "Aproveite descontos incríveis em peças selecionadas da coleção atual",
      author: "Boutique Elegance",
      date: "25 de Fevereiro, 2024",
      category: "Promoções",
      image: "/api/placeholder/800/500",
    },
    {
      id: "6",
      title: "Acessórios que Transformam Qualquer Look",
      excerpt: "Como usar acessórios para elevar seu estilo pessoal",
      author: "Boutique Elegance",
      date: "20 de Fevereiro, 2024",
      category: "Acessórios",
      image: "/api/placeholder/800/500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Blog & Novidades
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas tendências, dicas de estilo e promoções exclusivas
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-video md:aspect-auto bg-muted">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4 w-fit">
                {posts[0].category}
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{posts[0].date}</span>
                </div>
              </div>
              <Button variant="outline" className="w-fit group">
                Ler mais
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden group animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                  {post.category}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="ghost" className="p-0 h-auto font-semibold group">
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
