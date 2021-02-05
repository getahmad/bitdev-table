import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImg from "../../assets/images/noimg.jpg";
import style from "./cardBarang.module.css";

const CardBarang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
      money
    );
  };
  let { result } = useParams();

  useEffect(() => {
    setLoading(true);
    const url = `https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang`;
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const urlSearch = `https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang?search=${result}`;
    axios.get(urlSearch).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [result]);

  return (
    <>
      <div className="container">
        {loading ? (
          <div className={style.containerLoader}>
            <div className="loader"></div>
          </div>
        ) : (
          <div className="baris">
            {data.map((data) => (
              <div className="column-3" key={data.kode_sku}>
                <div className={style.card}>
                  <img
                    src={data.foto_barang === null ? noImg : data.foto_barang}
                    alt={data.nama_barang}
                    className={style.imageBarang}
                  />
                  <h6 className={style.title}>
                    <strong>{data.nama_barang}</strong>
                  </h6>
                  <p>Kode SKU&emsp;&emsp;: {data.kode_sku}</p>
                  <p>Quantity&emsp;&emsp;&emsp;: {data.qty}</p>
                  <p>
                    Harga Satuan&ensp;: Rp. {formatRupiah(data.harga_satuan)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardBarang;
