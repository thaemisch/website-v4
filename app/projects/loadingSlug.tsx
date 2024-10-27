import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSlug() {
    return (
        <div className="w-full h-full">
            <div className="w-full bg-background md:px-10">
                <div className="w-full mx-auto py-20 px-4 md:px-8 lg:px-10 min-h-96">
                    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl flex flex-row items-center align-middle gap-1">
                        <Skeleton className="w-1/5 h-12" />
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
                        <Skeleton className="w-1/4 h-5 mb-5" />
                    </p>
                    <Skeleton className="w-1/6 h-5" />
                </div>
                <div className="w-full flex flex-col xl:flex-row md:px-10 gap-10">
                    <div className="w-full flex flex-col gap-10">
                        <Skeleton className="w-full h-1/4" />
                    </div>
                    <div className="w-full flex flex-col gap-10">
                        <Card className="w-full">
                            <CardHeader>
                                <Skeleton className="w-1/2 h-9" />
                            </CardHeader>
                            <CardContent className="flex flex-col">
                                <Skeleton className="w-1/2 h-6" />
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <Skeleton className="w-1/2 h-9" />
                            </CardHeader>
                            <CardContent className="flex flex-col">
                                <Skeleton className="w-1/2 h-6" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}