import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import Input from "../../common/Input";
import SaveButton from "../../button/SaveButton";
import { usePostData } from "../../../../hooks/dataApi";

const schema = yup
  .object({
    // title: yup.string().required("title is required."),
  })
  .shape({
    img: yup.mixed().test("fileSize", "Image is required.", (value) => {
      return value && value[0];
    }),
  });

const AdminPartnerForm = ({
  defaultValues,
  action,
  btnText,
  path,
  returnPath,
}) => {
  const history = useHistory();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { img } = errors;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("img", data.img[0]);

    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: path,
        formData: formData,
      });
      if (status === 201) {
        toast.success(data.message);
        reset();
      }
      if (status === 204) {
        toast.success("Update successful!");
        history.push(returnPath);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data.message);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
      action();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-col">
        <Input
          name="img"
          label="Image"
          type="file"
          register={register}
          errorMessage={img?.message}
        />
        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default AdminPartnerForm;
