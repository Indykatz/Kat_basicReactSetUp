// Called in About.js

// Import styled components
import { ContentFlexBox, ContentItemBox } from "../styles/about.styles";

// ContentItem function
const ContentItem = () => {
  // A list of names
  const theGang = [
    "Kat",
    "Dom",
    "Wren",
    "Alex B",
    "Gaz",
    "Karl",
    "John",
    "James",
    "Abdelbar",
    "Benny",
    "Eddie",
    "Olly",
    "Alex K",
    "Safwan",
    "Keisha",
    "Josh",
    "Liz",
  ];
  // What is return in app
  return (
    // ContentFlexBox styled component
    <ContentFlexBox>
      {/* Maps the list of names */}
      {theGang.map((gang, i) => {
        // returns mapped list of name
        // ContentItemBox styled component
        return <ContentItemBox key={i}>{gang}</ContentItemBox>;
      })}
      {/* End of Styles */}
    </ContentFlexBox>
  );
};

export default ContentItem;
