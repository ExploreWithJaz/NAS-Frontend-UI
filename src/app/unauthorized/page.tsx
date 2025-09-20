"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Glitch from "@/components/layout/Glitch";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

export const dynamic = "force-dynamic";

function UnauthorizedContent() {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");

  return (
    <Glitch animation={true} variant="red">
      <Container
        variant="card"
        color="red"
        className="p-2.5 mx-4 flex w-[400px] h-auto"
      >
        <div>
          <div className="flex flex-row items-center gap-2.5">
            <Icon name="forbidden" size={34} color="#FF6B6B" />
            <h1 className="text-2xl font-bold text-white">401 Unauthorized</h1>
          </div>
          <div>
            {domain ? (
              <p className="mt-4 text-white">
                You are not authorized to access <span className="text-red-400">{domain}</span>.
                <br />
                Please provide valid credentials.
              </p>
            ) : (
              <p className="mt-4 text-white">
                You are not authorized to access this resource.
              </p>
            )}
          </div>
        </div>
      </Container>
    </Glitch>
  );
}

export default function UnauthorizedPage() {
  return (
    <Suspense>
      <UnauthorizedContent />
    </Suspense>
  );
}