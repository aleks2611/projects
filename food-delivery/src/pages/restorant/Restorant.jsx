import { useEffect, useState } from "react";
import { fetchRestorants } from "../../api/restaurants";
import Card from "../../shared/card/Card";
import { useNavigate } from "react-router-dom";

function Restorant() {
  const [restorants, setRestorant] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRestorants().then((data) => {
      setRestorant(data);
    });
  }, []);

  return (
    <div>
      {restorants &&
        restorants.map((item, index) => (
          <Card
            key={index}
            restorant={item}
            onClick={() => {
              navigate(`/restorant/${item.id}`);
            }}
          />
        ))}
    </div>
  );
}
export default Restorant;
