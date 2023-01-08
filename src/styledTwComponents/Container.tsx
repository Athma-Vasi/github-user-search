import tw from "tailwind-styled-components";

type ContainerProps = {
  $dark: boolean;
};

const Container = tw.div<ContainerProps>`
flex
items-center
justify-center
flex-col
w-full
p-6
sm:h-[1000px] md:h-[1000px] lg:h-[1000px] xs:h-[1000px]
gap-y-6
${({ $dark }) =>
  $dark ? "bg-myDarkBlue text-myWhite" : "bg-myWhite text-myDarkBlue"}
`;

export { Container };
