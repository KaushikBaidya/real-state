import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminServicesForm from "./AdminServicesForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Error from "../../common/Error";

const AdminServicesEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "service",
    `/service/${id}`
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
    title: data.data.title,
    details: data.data.details,
    img: null,
  };

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Services" btnSave={false} path="/dashboard/service" />
        <AdminServicesForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/service/edit/${id}`}
          returnPath="/dashboard/service"
        />
      </div>
    </Layout>
  );
};

export default AdminServicesEdit;
