export default function TitleCase(props: {
  text: string;
  uppercaseClass?: string;
  lowercaseClass?: string;
}) {
  const words = props.text.split(" ");
  const parts = words
    .flatMap((part, index) => [
      part[0],
      part.substring(1),
      index != words.length - 1 ? " " : "",
    ])
    .filter((part) => part != "");
  return (
    <>
      {parts.map((char, index) => {
        return (
          <span
            key={index}
            className={
              isLowerCase(char) ? props.lowercaseClass : props.uppercaseClass
            }
          >
            {char.toUpperCase()}
          </span>
        );
      })}
    </>
  );
}

function isLowerCase(text: string) {
  return text == text.toLowerCase() && text != text.toUpperCase();
}
