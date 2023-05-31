import { useRouter } from "next/router";
import { BackIcon } from "../icons/back-icon";
import { Button } from "./back-button";

type BackButtonProps = {
  navigate: string;
}

export function BackButton({ navigate }: BackButtonProps){
  const router = useRouter();

  const handleNavigate = () => {
      router.push(navigate)
  }

  return (
      <Button onClick={handleNavigate}>
          <BackIcon/>
          Voltar
      </Button>
  )
}