import { useInput } from '@/hooks';

const TextArea = (props) => {
  const { form } = useInput(props.name);

  return (
    <textarea
      className='focus:outline-none resize-none p-2 w-[36.575rem] bg-transparent h-[11.5rem] border border-light-black'
      cols='30'
      rows='10'
      {...form.register(props.name, props.rules)}
    />
  );
};
export default TextArea;
