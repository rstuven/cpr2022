export default function TitleCase(props: {
  text: string;
  uppercaseClass?: string;
  lowercaseClass?: string;
}) {
  const chars = props.text.split("");
  return (
    <>
      {chars.map((char, index) => {
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
