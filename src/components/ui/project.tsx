import { BookmarkCheck, Construction, Github } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "./card";
import Link from "next/link";

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
            <CardTitle className="font-semibold pb-3">Fake-Api - Swagger</CardTitle>
            <CardDescription className="font-medium text-base">Aplicação back-end desenvolvida em Spring onde o usuario pode salva, buscar, atualizar e excluir produtos do banco de dados por meio de uma API de terceiro</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <Link href="https://github.com/Marlon-Schafranski/fake-api-us-tcc.git" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</Link>
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
              <Link href="https://github.com/Marlon-Schafranski/my-app.git" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <Construction className="w-6 h-6 mr-2" />
              <span className="font-normal">Em construção</span>
            </div>
            <CardTitle className="font-semibold pb-3">Nexo-Bank</CardTitle>
            <CardDescription className="font-medium text-base">Aplicação back-end que esta sendo desenvolvida em Spring onde sera um sistema de um banco digital .</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <Link href="https://github.com/Marlon-Schafranski/Nexo-Bank-Concertado-main-main.git" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</Link>
            </div>
          </CardFooter>
        </Card>


        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <Construction className="w-6 h-6 mr-2" />
              <span className="font-normal">Em construção</span>
            </div>
            <CardTitle className="font-semibold pb-3">Novo Portfolio</CardTitle>
            <CardDescription className="font-medium text-base">Este projeto sera meu novo portfolio profissional onde eu estarei colocando todo o meu conhecimento na area de TI. Esta sendo desenvolvido em Next.Js .</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <Link href="https://github.com/Marlon-Schafranski/new-portfolio.git" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <BookmarkCheck className="w-6 h-6 mr-2" />
              <span className="font-normal">Finalizado</span>
            </div>
            <CardTitle className="font-semibold pb-3">Pic-Pay-Simplificado</CardTitle>
            <CardDescription className="font-medium text-base">Aplicação back-end desenvolvida de Spring onde resulta em uma transferencia de saldo de uma usuario para um outro usuario</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <Link href="https://github.com/Marlon-Schafranski/Pic-Pay-Simplificado-Back-end.git" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-gray-300 rounded-xl hover:bg-sky-400">
          <CardHeader>
            <div className="flex items-center pb-4">
              <Construction className="w-6 h-6 mr-2" />
              <span className="font-normal">Em construção</span>
            </div>
            <CardTitle className="font-semibold pb-3">Pizzaria Chef Bonne</CardTitle>
            <CardDescription className="font-medium text-base">Projeto completo de uma pizzaria que esta sendo desenvolvido com React Native onde auxilia o cliente a fazer seu pedido, onde basicamento o usuario escolhe sua pizza, bebida ou lanche e pode ver no carrinho e envia seu pedido por meio o do Whatsapp </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-3">
              <Github className="w-6 h-6" />
              <Link href="#" className="font-medium text-base text-blue-600 hover:text-blue-800">Acessar repositório GitHub</Link>
            </div>
          </CardFooter>
        </Card>

      </div>

    </div>
  );
};

export default Projects;
