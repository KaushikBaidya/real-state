import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminPartnerForm from "./AdminPartnerForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Error from "../../common/Error";

const AdminPartnerEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "partner",
    `/partner/${id}`
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
    id: data?.data.id,
    img: null,
  };

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Partner" btnSave={false} path="/dashboard/partner" />
        <AdminPartnerForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/partner/${id}`}
          returnPath="/dashboard/partner"
        />
      </div>
    </Layout>
  );
};

export default AdminPartnerEdit;
