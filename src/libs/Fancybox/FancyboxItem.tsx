export function FancyboxItem({ group, ...props }: Props) {
  return <a {...props} data-fancybox={group || ''}></a>
}

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  group?: boolean | string
}
