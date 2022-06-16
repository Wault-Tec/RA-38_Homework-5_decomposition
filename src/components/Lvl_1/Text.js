//рендерит текст-ссылку, получает текст, ссылку, размер и вес шрифта, тип текста ('Header', 'Content', 'Source')
const Text = (props) => {
  return (
    <a href={props.link}>
      <p
        style={{ fontSize: props.size, fontWeight: props.weight }}
        className={`text-${props.type}`}
      >
        {props.children}
      </p>
    </a>
  );
};

export default Text;
