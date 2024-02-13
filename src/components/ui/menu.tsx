import { AArrowUp, ArrowLeft, ArrowRight, ArrowRightToLine, ArrowUp, BookUser, ChevronRight, CircleEllipsis, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";

const Menu = () => {
    return (
        <Card className="border-none p-12 flex justify-end">
            <CardContent>
                <Sheet >
                    <SheetTrigger className="cursor-pointer flex items-center justify-center rounded-full  transition-colors text-gray-200 justify-self-end">
                        <CircleEllipsis className="w-12 h-12" />
                    </SheetTrigger>
                    <SheetContent className="bg-gray-300 rounded-[3px] border-none">
                        <SheetHeader>
                            <SheetTitle className="items-center justify-center font-bold text-2xl text-center p-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-950 ">Menu </SheetTitle>
                            <SheetDescription className="text-black font-normal pb-8 " > Aqui você pode me encontrar em outras redes sociais. </SheetDescription>

                            <Button className="flex justify-start border-2 shadow-md border-gray-700 gap-3 hover:border-gray-700 hover:bg-gradient-to-r from-sky-300 to-sky-500">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <Facebook />
                                        <p className="font-semibold text-gray-950">Facebook</p>
                                    </div>
                                    <ChevronRight className="" />
                                </div>
                            </Button>

                            <Button className="flex justify-start border-2 shadow-md border-gray-700 gap-3 hover:border-gray-700 hover:bg-gradient-to-r from-sky-300 to-sky-500">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <Instagram />
                                        <p className="font-semibold text-gray-950">Instagram</p>
                                    </div>
                                    <ChevronRight />
                                </div>
                            </Button>

                            <Button className="flex justify-start border-2 shadow-md border-gray-700 gap-3 hover:border-gray-700 hover:bg-gradient-to-r from-sky-300 to-sky-500">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <Mail />
                                        <p className="font-semibold text-gray-950">E-mail</p>
                                    </div>
                                    <ChevronRight className="" />
                                </div>
                            </Button>

                            <Button className="flex justify-start border-2 shadow-md border-gray-700 gap-3 hover:border-gray-700 hover:bg-gradient-to-r from-sky-300 to-sky-500">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <MessageCircle />
                                        <p className="font-semibold text-gray-950">WhatsApp</p>
                                    </div>
                                    <ChevronRight className="" />
                                </div>
                            </Button>

                            <div className=" flex pt-3 justify-center gap-3">
                                <Button className="bg-white hover:border-gray-700 hover:bg-gradient-to-r from-sky-300 to-sky-500">

                                    <Github />
                                </Button>


                                <Button className="bg-white hover:bg-gradient-to-r from-sky-300 to-sky-500">
                                    <Linkedin />
                                </Button>

                                <Button className="bg-white hover:bg-gradient-to-r from-sky-300 to-sky-500">
                                    <BookUser />
                                </Button>
                            </div>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </CardContent>

        </Card>
    );
}

export default Menu;



