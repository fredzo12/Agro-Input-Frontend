/* eslint-disable react/prop-types */


const InputWithIcon = ({ placeholder, name, value, type, onChange, icon }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="border-2 border-slate-300 rounded-md p-1 px-4 flex items-center gap-3 w-full duration-200 hover:border-slate-500 focus-within:border-slate-500">
      {icon}{' '}
      <input
        type={type ? type : 'text'}
        name={name}
        value={value}
        onChange={handleChange}
        className="border border-transparent w-full focus:border-none focus:outline-none bg-slate-100/70 p-2"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputWithIcon;
