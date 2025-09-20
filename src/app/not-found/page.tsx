"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Glitch from "@/components/layout/Glitch";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

export const dynamic = "force-dynamic";

function NotFoundContent() {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");

  return (
    <Glitch animation={true} variant="yellow">
      <Container
        variant="card"
        color="yellow"
        className="p-2.5 mx-4 flex w-[400px] h-auto"
      >
        <div>
          <div className="flex flex-row items-center gap-2.5">
            <Icon name="forbidden" size={34} color="#ffcd56" />
            <h1 className="text-2xl font-bold text-white">404 Not Found</h1>
          </div>
          <div>
            {domain ? (
              <p className="mt-4 text-white">
                The domain <span className="text-red-400">{domain}</span> was not found or is blocked.
                <br />
                Please check the URL or contact your server administrator.
              </p>
            ) : (
              <p className="mt-4 text-white">
                The requested resource could not be found.
              </p>
            )}
          </div>
        </div>
      </Container>
    </Glitch>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense>
      <NotFoundContent />
    </Suspense>
  );
}