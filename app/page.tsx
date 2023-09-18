import Image from "next/image";
import IdNext from "./id-next";
import DataDisplay from "./DataDisplay";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { id: string | undefined; include: string | undefined };
}) {
  console.log("id is:", searchParams.id);
  return (
    <div className=" mt-10 max-w-7xl px-6 mx-auto ">
      <IdNext />
      <div className=" mt-10 ">
        <Suspense key={searchParams.id} fallback={<div>Loading</div>}>
          <DataDisplay id={searchParams.id} include={searchParams.include} />
        </Suspense>
      </div>
    </div>
  );
}
