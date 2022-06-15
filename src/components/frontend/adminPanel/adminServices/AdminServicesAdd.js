import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminServicesForm from "./AdminServicesForm";
// import Header from "../../components/Header";

const AdminServicesAdd = () => {
  const defaultValues = {
    title: "",
    details: "",
    img: null,
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Services" btnSave={false} path="/dashboard/service" />
        <AdminServicesForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Save"
          path="/service/add"
          returnPath="/dashboard/services"
        />
      </div>
    </Layout>
  );
};

export default AdminServicesAdd;
