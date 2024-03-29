import { BookUser, ChevronRight, Github, Linkedin } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import Link from "next/link";


const Links = () => {
    return (
        <Card className="flex flex-col justify-center items-center border-none p-16">
       <Link href="https://github.com/Marlon-Schafranski"><Button className="w-80 h-20 justify-center rounded-full shadow-lg bg-gray-300 hover:bg-sky-400 mb-4">
                    <div className="flex items-center justify-start ml-4 w-full">
                        <div className=" flex items-center justify-sta gap-3">
                            <Github />
                            <p className="font-semibold text-gray-950">GitHub</p>
                        </div>
                    </div>
                    <ChevronRight  className="mr-4"/>
                    
            </Button></Link>  



            <Link href="https://www.linkedin.com/in/marlon-schafranski-b48882282/"><Button className="w-80 h-20 justify-center rounded-full shadow-lg bg-gray-300 hover:bg-sky-400 mb-4">
                    <div className="flex items-center justify-start ml-4 w-full ">
                        <div className=" flex items-center justify-sta gap-3">
                            <Linkedin />
                            <p className="font-semibold text-gray-950">LinkedIn</p>
                        </div>
                    </div>
                    <ChevronRight className="mr-4" />
            </Button></Link>

            <Link href="https://marlonschafranski.netlify.app/"><Button className="w-80 h-20 justify-center rounded-full shadow-lg bg-gray-300 hover:bg-sky-400 mb-4">
                    <div className="flex items-center justify-start ml-4 w-full">
                        <div className=" flex items-center justify-sta gap-3">
                            <BookUser  />
                            <p className="font-semibold text-gray-950">Porfolio</p>
                        </div>
                    </div>
                    <ChevronRight  className="mr-4"/>
            </Button></Link>
        </Card>
    );
}

export default Links;
