import { BookmarkCheck, Github } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./card";

const Projects = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h2 className="text-sky-400 font-semibold text-2xl text-center mb-8">Projetos</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <BookmarkCheck className="w-6 h-6 mr-2" />
              <span className="font-normal">Finalizado</span>
            </div>
            <CardTitle className="font-semibold pb-3">Pic-Pay-Simplificado</CardTitle>
            <CardDescription className="font-medium text-base">Aplicação desenvolvida em Spring, onde se resulta de transferência de saldo de um usuário para o outro.</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <a href="https://github.com/Marlon-Schafranski/Pic-Pay-Simplificado-Back-end.git" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</a>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <BookmarkCheck className="w-6 h-6 mr-2" />
              <span className="font-normal">Finalizado</span>
            </div>
            <CardTitle className="font-semibold pb-3">Links-Uteis</CardTitle>
            <CardDescription className="font-medium text-base">Este projeto é o que você está vendo neste momento.</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <a href="#" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</a>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <BookmarkCheck className="w-6 h-6 mr-2" />
              <span className="font-normal">Finalizado</span>
            </div>
            <CardTitle className="font-semibold pb-3">Links-Uteis</CardTitle>
            <CardDescription className="font-medium text-base">Este projeto é o que você está vendo neste momento.</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <a href="#" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
