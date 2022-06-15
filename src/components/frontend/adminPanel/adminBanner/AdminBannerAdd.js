import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminBannerForm from "./AdminBannerForm";
// import Header from "../../components/Header";

const AdminBannerAdd = () => {
  const defaultValues = {
    img: null,
    title1: "",
    title2: "",
    details: "",
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Banner" btnSave={false} path="/dashboard/banner" />
        <AdminBannerForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Save"
          path="/banner/add"
          returnPath="/dashboard/banner"
        />
      </div>
    </Layout>
  );
};

export default AdminBannerAdd;
