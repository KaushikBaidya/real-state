import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminOurTeamForm from "./AdminOurTeamForm";
// import Header from "../../components/Header";

const AdminOurTeamAdd = () => {
  const defaultValues = {
    img: null,
    title: "",
    details: "",
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Our Team" btnSave={false} path="/dashboard/ourTeam" />
        <AdminOurTeamForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Save"
          path="/ourTeam/add"
          returnPath="/dashboard/ourTeam"
        />
      </div>
    </Layout>
  );
};

export default AdminOurTeamAdd;
