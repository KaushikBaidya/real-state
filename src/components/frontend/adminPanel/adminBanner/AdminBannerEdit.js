import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminBannerForm from "./AdminBannerForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Error from "../../common/Error";

const AdminBannerEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "banner",
    `/banner/${id}`
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
    title1: data.data.title1,
    title2: data.data.title2,
    details: data.data.details,
  };

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Banner" btnSave={false} path="/dashboard/banner" />
        <AdminBannerForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/banner/edit/${id}`}
          returnPath="/dashboard/banner"
        />
      </div>
    </Layout>
  );
};

export default AdminBannerEdit;
