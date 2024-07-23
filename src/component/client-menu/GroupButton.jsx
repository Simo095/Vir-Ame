import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import antipasto from "../../asset/img/antipasto.png";
import primo from "../../asset/img/pasta.png";
import bevanda from "../../asset/img/beverage.png";
import carne from "../../asset/img/steak.png";
import dolce from "../../asset/img/dessert.png";
import contorno from "../../asset/img/dish.png";
import pizza from "../../asset/img/pizza.png";
import insalata from "../../asset/img/insalata.png";
import pesce from "../../asset/img/pesce.png";
import zuppa from "../../asset/img/zuppa.png";
import secondo from "../../asset/img/secondo.png";
import beer from "../../asset/img/beer.png";
import gelato from "../../asset/img/gelato.png";
import bar from "../../asset/img/bar.png";

const GroupButton = () => {
  const reparti = useSelector((state) => state.menu.ward);

  return (
    <Container fluid className="d-flex flex-column gap-2 m-0 p-0">
      <h1>ArancinoMania!</h1>

      {reparti &&
        reparti.length > 0 &&
        reparti.map((dish) => (
          <Link
            key={dish.id}
            to={dish.ward.id.toString()}
            smooth={true}
            offset={-135}
            duration={100}
          >
            <div className="btn-group d-flex gap-3">
              {dish.ward.name.toLowerCase() === "antipasto" ||
              dish.ward.name.toLowerCase() === "antipasti" ? (
                <Image width={60} src={antipasto} />
              ) : dish.ward.name.toLowerCase() === "primo" ||
                dish.ward.name.toLowerCase() === "primi" ||
                dish.ward.name.toLowerCase() === "primi piatti" ||
                dish.ward.name.toLowerCase() === "cucina" ? (
                <Image width={60} src={primo} />
              ) : dish.ward.name.toLowerCase() === "secondo" ||
                dish.ward.name.toLowerCase() === "secondi piatti" ||
                dish.ward.name.toLowerCase() === "secondi" ? (
                <Image width={60} src={secondo} />
              ) : //CONTORNI
              dish.ward.name.toLowerCase() === "contorno" ||
                dish.ward.name.toUpperCase() === "contorno" ||
                dish.ward.name.toLowerCase() === "contorni" ||
                dish.ward.name.toLowerCase() === "contorni " ||
                dish.ward.name.toUpperCase() === "contorni " ||
                dish.ward.name.toLowerCase() === "contorno " ||
                dish.ward.name.toUpperCase() === "contorno " ||
                dish.ward.name.toUpperCase() === "contorni" ? (
                <Image width={60} src={contorno} />
              ) : dish.ward.name.toLowerCase() === "bevanda" ||
                dish.ward.name.toLowerCase() === "bevande" ||
                dish.ward.name.toLowerCase() === "bibita" ||
                dish.ward.name.toLowerCase() === "bibite" ? (
                <Image width={60} src={bevanda} />
              ) : dish.ward.name.toLowerCase() === "dolce" ||
                dish.ward.name.toLowerCase() === "dolci" ? (
                <Image width={60} src={dolce} />
              ) : dish.ward.name.toLowerCase() === "pesce" ||
                dish.ward.name.toLowerCase() === "pesci" ||
                dish.ward.name.toLowerCase() === "mare" ? (
                <Image width={60} src={pesce} />
              ) : dish.ward.name.toLowerCase() === "pizza" ||
                dish.ward.name.toLowerCase() === "pizze" ? (
                <Image width={60} src={pizza} />
              ) : dish.ward.name.toLowerCase() === "insalata" ||
                dish.ward.name.toLowerCase() === "insalate" ? (
                <Image width={60} src={insalata} />
              ) : dish.ward.name.toLowerCase() === "carne" ||
                dish.ward.name.toLowerCase() === "carni" ? (
                <Image width={60} src={carne} />
              ) : dish.ward.name.toLowerCase() === "zuppa" ||
                dish.ward.name.toLowerCase() === "zuppe" ? (
                <Image width={60} src={zuppa} />
              ) : dish.ward.name.toLowerCase() === "birra" ||
                dish.ward.name.toLowerCase() === "birre" ? (
                <Image width={60} src={beer} />
              ) : dish.ward.name.toLowerCase() === "gelato" ||
                dish.ward.name.toLowerCase() === "gelati" ? (
                <Image width={60} src={gelato} />
              ) : dish.ward.name.toLowerCase() === "bar" ? (
                <Image width={60} src={bar} />
              ) : null}
              <span>{dish.ward.name}</span>
            </div>
          </Link>
        ))}
    </Container>
  );
};
export default GroupButton;
