import { useInput } from '@/hooks';

const Input = (props) => {
  const { form } = useInput(props.name);

  return (
    <input
      className='font-normal bg-transparent outline-none w-[32.063rem] border-light-black text-light-black placeholder:light-black placeholder:opacity-80 font-Helvetica-Neue-LT-GEO-bold border placeholder:font-TBC-Contractica-CAPS rounded-sm pl-4 h-12 text-lg'
      placeholder={props.placeholder}
      id={props.id}
      type={props.type ? props.type : ''}
      {...form.register(props.name, {
        onBlur: props.onBlur,
        onChange: props.onChange,
      })}
    />
  );
};
export default Input;
