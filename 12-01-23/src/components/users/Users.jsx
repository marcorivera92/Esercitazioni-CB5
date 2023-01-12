import { API_ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";
import "./users.css";

export function Users() {
  const { data, error, loading, refetch } = useFetch(API_ENDPOINTS.USERS);

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  if (!data) return "";

  const { id, first_name, last_name, date_of_birth, employment, avatar } = data;

  return (
    <section>
      <h1 className="header-title">Users Generator</h1>

      <div className="users-info">
        <h4>User Code: #{id}</h4>
        <h4>
          Full Name: {last_name}, {first_name}
        </h4>
        <h4>Birthday: {date_of_birth}</h4>
        <h4>Employment: {employment.title}</h4>
        <img src={avatar} className="avatar" />
      </div>

      <div className="btn">
        <button onClick={refetch}> User 👤 </button>
      </div>
    </section>
  );
}
