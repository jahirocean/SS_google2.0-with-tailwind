function Abatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      alt="Profile Pictures ${className}`}
    />
  );
}

export default Abatar;
