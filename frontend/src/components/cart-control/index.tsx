import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cart-icon";
import { CartCount, Container } from "./cart-control";

export function CartControl() {
  const router = useRouter();
  const { value } = useLocalStorage("cart-items", []);

  const handleNavigateToCart = () => {
    router.push("/cart");
  };

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}