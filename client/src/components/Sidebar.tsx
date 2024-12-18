import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  product: {
    title: string;
    image: string;
    subtitle: string;
    tags: string[];
  };
}

export default function Sidebar({ product }: SidebarProps) {
  return (
    <aside className="w-[300px] border-r border-gray-200 p-8 space-y-6">
      <div>
        <img 
          src="/stackline_logo.svg" 
          alt="Stackline" 
          className="h-8 w-auto [&_path]:fill-gray-900" 
        />
      </div>
      
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4 text-center">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-40 h-40 object-contain mx-auto"
            />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge 
                key={tag}
                variant="secondary"
                className="rounded-full text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}