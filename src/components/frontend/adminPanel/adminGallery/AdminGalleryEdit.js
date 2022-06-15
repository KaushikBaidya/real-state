import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminGalleryForm from "./AdminGalleryForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Error from "../../common/Error";

const AdminGalleryEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "gallery",
    `/gallery/${id}`
  );

  if (isLoading)
    return (
      <Layout>
        <HashLoading />
      </Layout>
    );

  if (isError)
    return (
      <Layout>
        <Error message={error.message} />
      </Layout>
    );

  const defaultValues = {
    id: data.data.id,
    img: null,
    title: data.data.title,
  };

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Gallery" btnSave={false} path="/dashboard/gallery" />
        <AdminGalleryForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/gallery/edit/${id}`}
          returnPath="/dashboard/gallery"
        />
      </div>
    </Layout>
  );
};

export default AdminGalleryEdit;
