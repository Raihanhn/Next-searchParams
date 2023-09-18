"use client";
import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function IdNext() {
  const searchParams = useSearchParams()!;
  const id = searchParams.get("id");
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="">
      <button
        onClick={() => {
          let nextId = parseInt(id ?? "0") + 1;
          router.push(`/?${createQueryString("id", nextId.toString())}`);
        }}
        className=" bg-green-500 px-3 py-1 border-blue-500 "
      >
        Next
      </button>
    </div>
  );
}
