import { useInput } from '@/hooks';

const DateInput = (props) => {
  const { form } = useInput(props.name);

  const today = new Date();
  const date = today.toISOString().substring(0, 10);

  return (
    <input
      className='border-light-black text-light-black pl-4 pr-4 text-lg bg-transparent font-TBC-Contractica-CAPS outline-none border rounded-sm  h-12 w-[32.063rem] mr-5'
      type='text'
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
      max={date}
      onFocus={(e) => (e.target.type = props.type ? props.type : 'date')}
      {...form.register(props.name, props.rules)}
    />
  );
};
export default DateInput;
