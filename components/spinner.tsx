
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVarients = cva(
    "text-muted-foreground animate-spin",
    {
        variants: {
            size: {
                sm: "w-4 h-4",
                md: "w-6 h-6",
                lg: "w-8 h-8",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

interface SpinnerProp extends VariantProps<typeof spinnerVarients> {

}


export const Spinner = ({
    size,
}: SpinnerProp) => {

    return (
        <Loader
            className={cn(spinnerVarients({size}))}
        />
    )
}