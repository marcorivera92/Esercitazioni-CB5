import { API_ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";
import "./blood-types.css";

export function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(API_ENDPOINTS.BLOOD_TYPES);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  if (!data) return "";

  const { id, group, rh_factor, type } = data;

  return (
    <section>
      <h1 className="header-title">Blood Type Generator</h1>

      <div className="blood-info">
        <h4>Blood code: #{id}</h4>
        <h4>Group: {group}</h4>
        <h4>Rh_Factor: {rh_factor}</h4>
        <h4>Type: {type}</h4>
      </div>

      <div className="btn">
        <button onClick={refetch}> Blood Type 💉 </button>
      </div>
    </section>
  );
}
