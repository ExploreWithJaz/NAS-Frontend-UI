"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Glitch from "@/components/layout/Glitch";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

export const dynamic = "force-dynamic";

function BadRequestContent() {
  const searchParams = useSearchParams();
  const domain = searchParams.get("original_url") || searchParams.get("domain");

  return (
    <Glitch animation={true} variant="yellow">
      <Container
        variant="card"
        color="yellow"
        className="p-2.5 mx-4 flex w-[400px] h-auto"
      >
        <div>
          <div className="flex flex-row items-center gap-2.5">
            <Icon name="warning" size={34} color="#ffcd56" />
            <h1 className="text-2xl font-bold text-white">500 Error</h1>
          </div>
          <div>
            {domain ? (
              <p className="mt-4 text-white">
                A server error occurred while trying to reach <span className="text-red-400">{domain}</span>.
                <br />
                Please try again later or contact your server administrator.
              </p>
            ) : (
              <p className="mt-4 text-white">
                A server error occurred while processing your request.
                <br />
                Please try again later or contact your server administrator.
              </p>
            )}
          </div>
        </div>
      </Container>
    </Glitch>
  );
}

export default function BadRequestPage() {
  return (
    <Suspense>
      <BadRequestContent />
    </Suspense>
  );
}