import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminPropertiesForm from "./AdminPropertiesForm";
//import Header from "../../components/Header";

const AdminPropertiesAdd = () => {
  const defaultValues = {
    img: null,
    title: "",
    details: "",
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
          action={() => {}}
          btnText="Save"
          path="/properties/add"
          returnPath="/dashboard/properties"
        />
      </div>
    </Layout>
  );
};

export default AdminPropertiesAdd;
