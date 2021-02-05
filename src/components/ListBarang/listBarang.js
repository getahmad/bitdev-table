import React, { useEffect, useState } from "react";
import DataTable from "@bit/adeoy.utils.data-table";
import style from "./listBarang.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { checkLogin } from "../../Helper";

const ListBarang = () => {
  const [data, setData] = useState([]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
      money
    );
  };

  useEffect(() => {
    const url = `https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  var columns1 = [
    { title: "Kode SKU", data: "kode_sku" },
    { title: "Nama Barang", data: "nama_barang" },
    {
      title: "Foto Barang",
      format: (row) => (
        <a href={row.foto_barang} target="_blank">
          <img
            style={{ width: "50px" }}
            src={row.foto_barang}
            alt={row.title}
          />
        </a>
      ),
    },
    { title: "QTY", data: "qty" },
    {
      title: "Harga Satuan",
      format: (row) => `Rp. ${formatRupiah(row.harga_satuan)}`,
    },
    {
      title: "Action",
      format: (row) => (
        <>
          <a href={`/edit-barang/${row.kode_sku}`}>
            <button type="button" className={style.buttonStyle}>
              <i className="fa fa-fw fa-edit" /> Edit
            </button>
          </a>
          <button
            type="button"
            className={style.buttonStyle}
            onClick={() => deleteData(row.kode_sku)}
          >
            <i className="fa fa-fw fa-trash" /> Delete
          </button>
        </>
      ),
    },
  ];

  var columns2 = [
    { title: "Kode SKU", data: "kode_sku" },
    { title: "Nama Barang", data: "nama_barang" },
    {
      title: "Foto Barang",
      format: (row) => (
        <a href={row.foto_barang} target="_blank">
          <img
            style={{ width: "50px" }}
            src={row.foto_barang}
            alt={row.title}
          />
        </a>
      ),
    },
    { title: "QTY", data: "qty" },
    {
      title: "Harga Satuan",
      format: (row) => `Rp. ${formatRupiah(row.harga_satuan)}`,
    },
  ];

  const deleteData = (kode_sku) => {
    const url = `https://601b8cde59fa2c0017560c6a.mockapi.io/ListBarang/${kode_sku}`;
    axios.delete(url).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className={style.container}>
      <h3>List Barang</h3>
      {!checkLogin() && (
        <DataTable
          data={data}
          columns={columns2}
          striped={true}
          hover={true}
          responsive={true}
        />
      )}

      {checkLogin() && (
        <>
          <a href="/tambah-barang">
            <button
              className={style.buttonStyle}
              style={{ marginBottom: "20px" }}
            >
              <i className="fa fa-fw fa-plus" />
              Tambah Barang
            </button>
          </a>
          <DataTable
            data={data}
            columns={columns1}
            striped={true}
            hover={true}
            responsive={true}
          />
        </>
      )}
    </div>
  );
};

export default ListBarang;
