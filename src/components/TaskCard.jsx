import {Button, Card, CardHeader, Spacer, CardFooter} from "@nextui-org/react";


export const TaskCard = (props) => (
    <>
        <Spacer y={6} />
            <Card isFooterBlurred className="w-full h-[100px] col-span-12 sm:col-span-5 ">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <h4 className="text-black font-medium text-2xl">{props.taskName}</h4>
                </CardHeader>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <Button onClick={() => props.removeTask(props.id)} color="danger" variant="ghost" radius="full" size="sm">
                    X
                </Button>
            </CardFooter>
        </Card>
    </>
);
