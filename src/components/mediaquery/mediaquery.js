import Media from "react-media";

function Mediaquery({ componentLarge, componentMedium, componentSmall }) {
  return (
    <Media
      queries={{
        small: "(max-width: 830px)",
        medium: "(min-width: 831px) and (max-width: 1049px)",
        large: "(min-width: 1050px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small && componentSmall}
          {matches.medium && componentMedium}
          {matches.large && componentLarge}
        </>
      )}
    </Media>
  );
}
export default Mediaquery;
