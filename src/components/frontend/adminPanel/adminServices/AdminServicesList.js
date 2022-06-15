import React from "react";
import { useGetData } from "../../../../hooks/dataApi";
import DeleteButton from "../../button/DeleteButton";
import EditButton from "../../button/EditButton";
import { HashLoading } from "../../common/Loading";
import TopHeader from "../../common/TopHeader";
import Layout from "../../mainLayout/Layout";

const AdminServicesList = () => {
  const { data: list, error, isLoading, isError } = useGetData(
    "service",
    "/service-list"
  );

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
          title="Services"
          btnSave={true}
          path="/dashboard/service/add"
        />
        <div className="list-wrapper mb-8 ">
          <div className="md:grid grid-cols-4 list-header">
            <div className="flex justify-start">
              <span className="font-semibold">SL #</span>
            </div>
            <div className="flex justify-start">
              <span className="font-semibold">Title</span>
            </div>
            <div className="flex justify-start md:justify-center">
              <span className="font-semibold">Details</span>
            </div>
            <div className="flex justify-start md:justify-center">
              <span className="font-semibold">Action</span>
            </div>
          </div>
          {list.data.length > 0 &&
            list.data.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-4 list-body"
              >
                <div>
                  <span className="inline-block md:hidden font-semibold">
                    SL #:
                  </span>
                  <span className="break-words">{index + 1}</span>
                </div>
                <div>
                  <span className="inline-block md:hidden font-semibold">
                    Title:
                  </span>
                  <span className="break-words">{item.title}</span>
                </div>
                <div>
                  <span className="inline-block md:hidden font-semibold">
                    Details:
                  </span>
                  <span className="break-words">{item.details}</span>
                </div>
                <div>
                  <span className="inline-block md:hidden font-semibold">
                    Action:
                  </span>
                  <div className="flex justify-start md:justify-center">
                    <EditButton path={`/dashboard/service/edit/${item.id}`} />

                    <DeleteButton _key="service" path={`/service/${item.id}`} />
                  </div>
                </div>
              </div>
            ))}
          <div className="list-footer">
            <div className="col-span-10"></div>
            <div className="flex justify-center">
              <span className="font-semibold">Total : {list.data.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminServicesList;
