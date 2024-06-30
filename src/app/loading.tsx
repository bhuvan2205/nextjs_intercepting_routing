import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8">
        {[...Array(3)]?.map((_, index) => {
          return (
            <div key={`skeleton-${index}`} className="flex flex-col space-y-3 py-8">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
