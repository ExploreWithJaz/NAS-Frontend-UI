"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Glitch from "@/components/layout/Glitch";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";

export const dynamic = "force-dynamic";

function ForbiddenContent() {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");

  return (
    <Glitch animation={true} variant="orange">
      <Container
        variant="card"
        color="orange"
        className="p-2.5 mx-4 flex w-[400px] h-auto"
      >
        <div>
          <div className="flex flex-row items-center gap-2.5">
            <Icon name="forbidden" size={34} color="#ff9f40" />
            <h1 className="text-2xl font-bold text-white">403 Forbidden</h1>
          </div>
          <div>
            {domain ? (
              <p className="mt-4 text-white">
                Access to <span className="text-red-400">{domain}</span> has been blocked by your server administrator. 
                <br />
                Contact your administrator for more information.
              </p>
            ) : (
              <p className="mt-4 text-white">
                You do not have permission to access this resource.
                <br />
                Contact your server administrator for more information.
              </p>
            )}
          </div>
        </div>
      </Container>
    </Glitch>
  );
}

export default function ForbiddenPage() {
  return (
    <Suspense>
      <ForbiddenContent />
    </Suspense>
  );
}