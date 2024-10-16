"use client";

import { SubmitButton } from "@/components/elements/common/SubmitButton";
import { useState } from "react";

export function TestSubmitButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <SubmitButton
      isSubmitting={isLoading}
      onClick={async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2500));
        setIsLoading(false);
      }}
    >
      Enviar
    </SubmitButton>
  );
}
