import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminOurTeamForm from "./AdminOurTeamForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Error from "../../common/Error";

const AdminOurTeamEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "ourTeam",
    `/ourTeam/${id}`
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
        <TopHeader title="Our Team" btnSave={false} path="/dashboard/ourTeam" />
        <AdminOurTeamForm
          defaultValues={defaultValues}
          action={refetch}
          btnText="Edit"
          path={`/ourTeam/edit/${id}`}
          returnPath="/dashboard/ourTeam"
        />
      </div>
    </Layout>
  );
};

export default AdminOurTeamEdit;
