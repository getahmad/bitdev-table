import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./listBarang.module.css";

const AddBarang = () => {
  //   const [kodeSku, setKodeSku] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [fotoBarang, setFotoBarang] = useState(null);
  const [qty, setQty] = useState(0);
  const [hargaSatuan, setHargaSatuan] = useState(0);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // let formdata = new FormData();
    // formdata.append("kode_sku", kodeSku);
    // formdata.append("nama_barang", namaBarang);
    // formdata.append("foto_barang", fotoBarang);
    // formdata.append("qty", qty);
    // formdata.append("harga_satuan", hargaSatuan);

    const url = "https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang";
    const bodyData = {
      //   kode_sku: kodeSku,
      nama_barang: namaBarang,
      foto_barang: fotoBarang,
      qty: qty,
      harga_satuan: hargaSatuan,
    };

    // const config = {
    //   headers: {
    //     "Content-type": "multipart/form-data",
    //   },
    // };

    axios
      //   .post(url, formdata, config)
      .post(url, bodyData)
      .then((res) => {
        console.log(res.data);
        history.push("/");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={style.containerForm}>
      <h2>Tambah Barang</h2>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="kode_sku">Kode SKU</label> <br />
        <input
          type="text"
          id="kode_sku"
          name="kode_sku"
          onChange={(e) => setKodeSku(e.target.value)}
          placeholder="Kode SKU"
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
          //   onChange={(e) => setFotoBarang(e.target.files[0])}
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

export default AddBarang;
