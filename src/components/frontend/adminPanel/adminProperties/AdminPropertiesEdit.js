import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminPropertiesForm from "./AdminPropertiesForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Error from "../../common/Error";

const AdminPropertiesEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "properties",
    `/properties/${id}`
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
    details: data.data.details,
  };

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="Properties"
          btnSave={false}
          path="/dashboard/properties"
        />
        <AdminPropertiesForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/properties/edit/${id}`}
          returnPath="/dashboard/properties"
        />
      </div>
    </Layout>
  );
};

export default AdminPropertiesEdit;
