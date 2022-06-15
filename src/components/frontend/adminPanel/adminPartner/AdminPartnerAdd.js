import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminPartnerForm from "./AdminPartnerForm";
// import Header from "../../components/Header";

const AdminPartnerAdd = () => {
  const defaultValues = {
    img: null,
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Partner" btnSave={false} path="/dashboard/partner" />
        <AdminPartnerForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Save"
          path="/partner/add"
          returnPath="/dashboard/partner"
        />
      </div>
    </Layout>
  );
};

export default AdminPartnerAdd;
