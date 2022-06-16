//реднерит изображение, получает путь к изображению, ширину и высоту
const Image = (props) => {
  return (
    <img src={props.url} style={{ width: props.width, height: props.height }} />
  );
};

export default Image;
