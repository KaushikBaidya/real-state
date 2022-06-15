import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminGalleryForm from "./AdminGalleryForm";
//import Header from "../../components/Header";

const AdminGalleryAdd = () => {
  const defaultValues = {
    img: null,
    title: "",
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Gallery" btnSave={false} path="/dashboard/gallery" />
        <AdminGalleryForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Save"
          path="/gallery/add"
          returnPath="/dashboard/gallery"
        />
      </div>
    </Layout>
  );
};

export default AdminGalleryAdd;
