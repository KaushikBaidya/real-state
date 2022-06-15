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
    name: yup.string().required("name is required."),
    title: yup.string().required("title is required."),
    details: yup.string().required("details is required."),
  })
  .shape({
    img: yup.mixed().test("fileSize", "Image is required.", (value) => {
      return value && value[0];
    }),
  });

const AdminTestimonialsForm = ({
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
  const { name, title, details, img } = errors;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("title", data.title);
    formData.append("details", data.details);
    formData.append("img", data.img[0]);

    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: path,
        formData: formData,
      });
      if (status === 201) {
        action();
        reset();
        history.push(returnPath);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-col">
        <Input
          name="name"
          label="Name"
          type="text"
          register={register}
          errorMessage={name?.message}
        />
        <Input
          name="title"
          label="Title"
          type="text"
          register={register}
          errorMessage={title?.message}
        />
        <Input
          name="details"
          label="Details"
          type="text"
          register={register}
          errorMessage={details?.message}
        />
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

export default AdminTestimonialsForm;
