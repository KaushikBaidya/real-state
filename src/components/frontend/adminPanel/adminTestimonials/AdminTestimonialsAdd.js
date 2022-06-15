import React from "react";
import Layout from "../../mainLayout/Layout";
import TopHeader from "../../common/TopHeader";
import AdminTestimonialsForm from "./AdminTestimonialsForm";
// import Header from "../../components/Header";

const AdminTestimonialsAdd = () => {
  const defaultValues = {
    img: null,
    name: "",
    title: "",
    details: "",
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="Testimonials"
          btnSave={false}
          path="/dashboard/testimonials"
        />
        <AdminTestimonialsForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Save"
          path="/testimonials/add"
          returnPath="/dashboard/testimonials"
        />
      </div>
    </Layout>
  );
};

export default AdminTestimonialsAdd;
