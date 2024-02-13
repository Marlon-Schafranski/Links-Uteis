
import Banner from "./banner";
import { Card, CardDescription, CardHeader } from "./card";
import { CardContent } from '@/components/ui/card';


const Intro = () => {
    return (
        <Card className="border-none">
        <CardContent className="flex justify-center items-center flex-col">
            <div className="flex flex-col items-center">
                <Banner
                    src="/Marlon.png"
                    alt="marlon"
                    className="w-[201px] h-[201px] rounded-full mb-5"
                />
                <div className="text-center">
                    <h1 className="font-extrabold text-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 border-sky-100 shadow-sm text-transparent hover:text-sky-300">
                        Marlon Schafranski
                    </h1>
                </div>
                <p className="font-normal text-gray-200 pt-2">
                    * Aqui você vai encontrar meus links das minhas outras redes
                    sociais e também meus outros contatos. *
                </p>
            </div>
        </CardContent>
    </Card>
    );
}

export default Intro;