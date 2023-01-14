import * as yup from 'yup';

const redberryEmailRegex =
  /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@redberry([.])ge$/;

const IdentificationSchema = yup.object({
  first_name: yup
    .string()
    .trim()
    .required('სახელის ველი სავალდებულოა')
    .min(3, 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან')
    .max(255, 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'),
  last_name: yup
    .string()
    .trim()
    .required('გვარის ველი სავალდებულოა')
    .min(3, 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან')
    .max(255, 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'),
  email: yup
    .string()
    .trim()
    .email('თქვენ მიერ შეყვანილი მეილი არასწორია')
    .required('მეილის ველი სავალდებულოა')
    .matches(
      redberryEmailRegex,
      'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
    ),
});

export default IdentificationSchema;
