import React from "react";
import { useParams } from "react-router";
import { useGetData } from "../../../../hooks/dataApi";
import Layout from "../../mainLayout/Layout";
import AdminTestimonialsForm from "./AdminTestimonialsForm";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";

const AdminTestimonialsEdit = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, refetch } = useGetData(
    "testimonials",
    `/testimonials/${id}`
  );
  const defaultValues = {
    id: data?.data.id,
    img: null,
    name: data?.data.name,
    title: data?.data.title,
    details: data?.data.details,
  };

  if (isLoading)
    return (
      <Layout>
        <HashLoading />
      </Layout>
    );

  // if (isError)
  //   return (
  //     <Layout>
  //       <Error message={error.message} />
  //     </Layout>
  //   );

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
          action={refetch}
          btnText="Edit"
          path={`/testimonials/${id}`}
          returnPath="/dashboard/testimonials"
        />
      </div>
    </Layout>
  );
};

export default AdminTestimonialsEdit;
