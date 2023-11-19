import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("نام اجباری است")
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نمی‌تواند بیشتر از 50 کاراکتر داشته باشد"),

  username: Yup.string()
    .required("نام کاربری اجباری است")
    .min(4, "نام کاربری باید حداقل 4 کاراکتر باشد")
    .max(20, "نام کاربری نمی‌تواند بیشتر از 20 کاراکتر داشته باشد"),

  email: Yup.string()
    .required("ایمیل اجباری است")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "ایمیل وارد شده معتبر نیست"
    ),
  identifier: Yup.string()
    .required("ایمیل اجباری است")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "ایمیل وارد شده معتبر نیست"
    ),

  phone: Yup.string()
    .required("تلفن اجباری است")
    .matches(/^09\d{9}$/, "تلفن وارد شده باید به صورت 09XXXXXXXXX باشد"),

  password: Yup.string()
    .required("رمز عبور اجباری است")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
      "رمز عبور باید حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک حرف اضافه (مانند !@#$%^&*) داشته باشد"
    )
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "تکرار رمز عبور باید با رمز عبور مطابقت داشته باشد"
    )
    .required("تکرار رمز عبور اجباری است"),
});

export default validationSchema;
