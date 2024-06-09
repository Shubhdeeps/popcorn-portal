type IHeadlineProps = {
  children: string | React.ReactNode;
};
export default function HeadlineTypography({ children }: IHeadlineProps) {
  return <div className="headline-typography">{children}</div>;
}
