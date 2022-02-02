import styled from "styled-components";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal?: boolean;
  children: React.ReactNode;
}

// export interface LinkElementProps
//   extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkElement = styled.a`
  color: red;

  &:hover {
    color: green;
  }
`;

export const Link = (props: LinkProps): JSX.Element => {
  const { children, isExternal } = props;
  console.log(isExternal);
  const openInNewWindow = isExternal ? 'target="_blank"' : null;
  console.log(openInNewWindow);
  return (
    <LinkElement href="#" {...openInNewWindow}>
      {children}
    </LinkElement>
  );
};
