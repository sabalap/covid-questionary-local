import { useInput } from '@/hooks';

const RadioInput = (props) => {
  const { form } = useInput(props.name);

  return (
    <input
      className='h-6 w-6 mr-5 accent-black'
      type='radio'
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
      {...form.register(props.name, props.rules)}
    />
  );
};
export default RadioInput;
