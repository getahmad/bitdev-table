import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import style from "./listBarang.module.css";

const EditBarang = () => {
  //   const [kodeSku, setKodeSku] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [fotoBarang, setFotoBarang] = useState("");
  const [qty, setQty] = useState(0);
  const [hargaSatuan, setHargaSatuan] = useState(0);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const [data, setData] = useState([]);
  let { kode_sku } = useParams();

  useEffect(() => {
    const url = `https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang/${kode_sku}`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [kode_sku]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const url = `https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang/${kode_sku}`;
    const bodyData = {
      //   kode_sku: kodeSku,
      nama_barang: namaBarang,
      foto_barang: fotoBarang,
      qty: qty,
      harga_satuan: hargaSatuan,
    };
    axios.put(url, bodyData).then((res) => {
      console.log(res.data);
      history.push("/");
      setLoading(false);
    });
  };
  return (
    <div className={style.containerForm}>
      <h2>Edit Barang</h2>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="kode_sku">Kode SKU</label> <br />
        <input
          type="text"
          id="kode_sku"
          name="kode_sku"
          onChange={(e) => setKodeSku(e.target.value)}
          placeholder={data.kode_sku}
        />
        <br /> */}
        <label htmlFor="nama_barang">Nama Barang</label>
        <br />
        <input
          type="text"
          id="nama_barang"
          name="nama_barang"
          onChange={(e) => setNamaBarang(e.target.value)}
          placeholder="nama barang"
        />
        <br />
        <label htmlFor="foto_barang">Foto Barang</label>
        <br />
        <input
          type="file"
          id="foto_barang"
          name="foto_barang"
          onChange={(e) => setFotoBarang(e.target.value)}
        />
        <br />
        <label htmlFor="qty">qty</label>
        <br />
        <input
          type="number"
          id="qty"
          name="qty"
          placeholder="jumlah qty"
          onChange={(e) => setQty(e.target.value)}
        />
        <br />
        <label htmlFor="harga_satuan">harga_satuan</label>
        <br />
        <input
          type="number"
          id="harga_satuan"
          name="harga_satuan"
          onChange={(e) => setHargaSatuan(e.target.value)}
          placeholder="harga_satuan"
        />
        <br />
        <button type="submit">{loading ? "Loading..." : "Submit"}</button>
        <a href="/">
          <button type="button">Cancel</button>
        </a>
      </form>
    </div>
  );
};

export default EditBarang;
