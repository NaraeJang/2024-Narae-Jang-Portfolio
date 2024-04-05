const Title = ({ title, extraClass }) => {
  return (
    <h2 className={`text-left text-[#4637D1] ${extraClass ? extraClass : ''}`}>
      {title}
    </h2>
  );
};
export default Title;
