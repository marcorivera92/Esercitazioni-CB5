import { API_ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function CreditCards() {
  const { data, error, loading, refetch } = useFetch(
    API_ENDPOINTS.CREDIT_CARDS
  );

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  return (
    <section>
      {JSON.stringify(data)}
      <button onClick={refetch}>Refetch!</button>
    </section>
  );
}
